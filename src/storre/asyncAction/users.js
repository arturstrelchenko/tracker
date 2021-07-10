import {addManyCustomers} from "../customRecur";

export const FetchUsers = () =>{
    return function (dispatch){
         if (dispatch) {
             fetch('https://jsonplaceholder.typicode.com/users')
                 .then(response => response.json())
                 .then(json=>{
                      let data = [];
                     json.map((item)=>{
                        return data.push({...item,tracker:0})
                     })
                     return data
                 })
                 .then(json => dispatch(addManyCustomers(json)))
         }else {
             return
         }
    }
}