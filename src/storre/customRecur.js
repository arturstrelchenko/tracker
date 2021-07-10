
const ADD_MANY_USER = 'ADD_MANY_USER';
const DELETE_USER = "DELETE_USER";
const ADD_USER = 'ADD_USER';

const defaultState = {
    users:[]
}
export const customReducer = (state = defaultState,action) =>{
    switch (action.type) {


        case ADD_MANY_USER:return{...state,users: [...state.users,...action.payload]}
        case DELETE_USER:return {...state,users:state.users.filter(users=>users.id !== action.payload)}
        case ADD_USER:return {...state,users:[...state.users,action.payload]}
        default:return state;
    }
}

export const addManyCustomers = (payload) => ({type:ADD_MANY_USER,payload})
export const deleteUser = (payload) =>({type:DELETE_USER,payload})
export const addUser = (payload) =>({type:ADD_USER,payload})


