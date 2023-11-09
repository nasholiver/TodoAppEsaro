import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  token: null,
  status: 'idle',
  error: null,
};

export const createAccount = createAsyncThunk('auth/createAccount', async (userData) => {
  // Logic for sending a POST request to create an account
  const response = await fetch('http://test.ecoforest.green/api/v1/auth/create-account', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  });
  const data = await response.json();
  return data;
});

export const loginUser = createAsyncThunk('auth/login', async (credentials) => {
  // Logic for sending a POST request to log in the user
  const response = await fetch('http://test.ecoforest.green/api/v1/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  });
  const data = await response.json();
  return data;
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createAccount.fulfilled, (state, action) => {
        state.status = 'success';
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.error = null;
      })
      .addCase(createAccount.rejected, (state, action) => {
        state.status = 'error';
        state.error = action.payload.message;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        if (action.payload.status === 'error') {
          state.status = 'error';
          state.error = action.payload.message;
          return;
        }
        state.status = 'success';
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = 'error';
        state.error = action.payload.message;
      });

  },
});

export default authSlice.reducer;
