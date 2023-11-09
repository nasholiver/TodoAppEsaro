import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
const initialState = {
  todos: [],
  status: 'idle',
  error: null,
  
};

export const fetchTodos = createAsyncThunk('todos/fetchTodos', async (token) => {
  // Logic for sending a GET request to retrieve todos
  const response = await fetch('http://test.ecoforest.green/api/v1/todo/get-todos', {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await response.json();
  console.log("data",data);
  return data;
});

export const addTodo = createAsyncThunk('todos/addTodo', async ({todo, token}) => {
  // Logic for sending a POST request to add a todo
 
  const response = await fetch('http://test.ecoforest.green/api/v1/todo/add-todo', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(todo),
  });
  const data = await response.json();
  return data;
});


export const updateTodo = createAsyncThunk('todos/updateTodo', async ({ todoId, completed, token }) => {
  // Logic for sending a PUT request to update a todo
  const response = await fetch(`http://test.ecoforest.green/api/v1/todo/${todoId}/completed/${completed}`, {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await response.json();
  return data;
});

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.status = 'success';
        console.log("action",action.payload.todos);
        state.todos = action.payload.todos;
        state.error = null;
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.status = 'error';
        state.error = action.error.message;
      })
      .addCase(addTodo.fulfilled, (state, action) => {
        state.status = 'success';
        state.todos.push(action.payload.todo);
        state.error = null;
      }
      )
      .addCase(updateTodo.fulfilled, (state, action) => {
        state.status = 'success';
        const index = state.todos.findIndex((todo) => todo.id === action.payload.todo.id);
        state.todos[index].completed = action.payload.todo.completed;

        state.error = null;
      })
      .addCase(updateTodo.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default todoSlice.reducer;
