import {createSlice ,nanoid} from '@reduxjs/toolkit'

const initialState = {
    todos:[{id : 1,text:"Hello World"}]
}

export const todoSlice = createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo :(state ,action)=>{
              const newTodo ={
                id : nanoid(),
                text: action.payload 
              }
              state.todos.push(newTodo)
        },//state : state will give access to the intial value that we have provided in the intitial state   action :sometime we get some values that we sometime need to call other functionality
        
         removeTodo :(state , action ) => {
            state.todos = state.todos.filter((todo)=> todo.id !== action.payload)
         }
    }
}) 

export const {addTodo ,removeTodo } = todoSlice.actions

export default todoSlice.reducer