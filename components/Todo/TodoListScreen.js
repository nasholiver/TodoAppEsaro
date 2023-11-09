import React, { useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTodos, updateTodo, addTodo } from '../../store/todoSlice';
import RadioButton from './RadioButton.js';

export default function TodoListScreen() {
    const todos = useSelector(state => state.todo.todos);
    const dispatch = useDispatch();
    const user = useSelector(state => state.auth.user);
    const token = useSelector((state) => state.auth.token);
  useEffect(() => {
    // Dispatch the fetchTodos action to send a GET request
    dispatch(fetchTodos(token));

  }, []);

  // just a boilerplate list of todos
  // we can add a form to add new todos later

  const listofTodos = [
    {
      task: 'Learn programming by 12am', completed: false
    },
    {  task:"Learn how to cook by 1pm", completed: false },
    {  task:"Pick up the kids by 2pm", completed: false },
    {  task:"Have lunch at 3pm", completed: false },
    {  task:"Go visit mum by4pm", completed: false },
    {  task:"Go to the gym by 5pm", completed: false },
    {  task:"Go to the Market by 6pm", completed: false },

  ]

  const addNewTodo = () => {
    // pick a random todo from the listofTodos array
    const randomIndex = Math.floor(Math.random() * listofTodos.length);
    const newTodo = listofTodos[randomIndex];

  
    dispatch(addTodo({ todo: newTodo, token: token }));
  };


  const handleUpdateTodo = (todoId, completed) => {
    // Dispatch the updateTodo action to send a PUT request to update the todo
    dispatch(updateTodo({ todoId, completed, token }));
  };

  return (
    <View >
  
    <View style={styles.container}>
         <Image
        style={styles.topCornerImage}
        source={require('../../assets/bubble-invert.png')}
        />
      {/* Top Background Image */}
      <Image source={require('../../assets/profile.png')} style={styles.topBackgroundImage} />

      {/* Welcome Message */}
      <View style={styles.welcomeContainer}>
        <Text style={styles.welcomeText}>Welcome back, 
        {user? user.full_name : 'User'}
        </Text>
      </View>
    </View>

      {/* Second Image */}
      <Image source={require('../../assets/clock.png')} style={styles.clockImage}/>


      {/* Task List Section */}
      <View style={styles.taskListContainer}>
        <Text style={styles.taskListTitle}>Task List</Text>
        <View style={styles.cardContainer}>
          <View style={styles.headerCard}>
            <Text style={styles.headerCardText}>Daily Task</Text>
            {/* plus icon */}
            <TouchableOpacity onPress={addNewTodo}>
            <Image source={require('../../assets/plus.png')} style={styles.plusImage} 
            />
            </TouchableOpacity>

          </View>
        {todos ? (
          <FlatList
            data={todos}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => handleUpdateTodo(item.id, !item.completed)}>
                <View style={styles.taskCard}>
              <TouchableOpacity onPress={() => handleUpdateTodo(item.id, !item.completed)}>
                <RadioButton selected={item.completed} onSelect={() => handleUpdateTodo(item.id, !item.completed)} />
              </TouchableOpacity>
              <Text style={styles.taskText}>{item.task}</Text>
                  
                </View>
              </TouchableOpacity>
            )}
          />
        ) : (
            <Text>Loading...</Text>
            )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    topCornerImage : {
        position: 'absolute',
        top: -35,
        left: 0,
        width: 220,
        height: 220,
        resizeMode:'contain',

    },
  headerCard: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
      padding: 10,
    },
    headerCardText: {
      // fontSize: 16,
      //fontWeight: 'bold',
    },
    plusImage: {
      width: 20,
      height: 20,
      resizeMode: 'contain',
    },
  clockImage : {
    width: 115,
    height: 115,
    marginTop: 10,
    resizeMode: 'contain',
    //center
    alignSelf: 'center',

  },
  // outer:{
  //   position:'absolute',
  //   backgroundColor: '#62D2C3',
  //   width: 1000,
  //   height: 400,
  // },
  container: {
    backgroundColor: '#62D2C3',
   
    alignItems: 'center',
    
   
  },
  topBackgroundImage: {
    marginTop: 116,
    width: '30%',
    height: 150,
    resizeMode: 'contain',
    
  },
  welcomeContainer: {
    marginBottom: 20,
  },
  welcomeText: {
    //fontSize: 24,
    //fontWeight: 'bold',
    color: 'white',
  },
  secondImage: {
    width: 150,
    height: 150,
    marginTop: 20,
  },
  taskListContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  taskListTitle: {
    //fontSize: 20,
    //fontWeight: 'bold',
    marginBottom: 10,
  },
  cardContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    width: '80%',
    maxHeight: 300,
  },
  taskCard: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    padding: 10,
  },
  taskText: {
    // fontSize: 16,
  },
  taskStatus: {
    //fontSize: 14,
    color: '#62D2C3', // Main color for status
  },
});
