import React, {useState} from 'react';
import DropDown from "../components/dpopDown/DropDown";
import {useDispatch, useSelector} from "react-redux";
import './style.css';
import {Button} from "antd";
import {addUser, deleteUser} from "../storre/customRecur";

const ListItem = () => {
    const users = useSelector(state => state.users.users)
    const dispatch = useDispatch();
    const [value,setValue] = useState('')
    const deleteUsers = (user) =>{
        dispatch(deleteUser(user.id))
    }

    const addButtonUsers = (name) =>{

        const user = {
            id:Date.now(),
            name:name,
            tracker:null,
        }
        if (!name.length){
            alert("write correct name ")
        }else {
        dispatch(addUser(user))
        }

    }

    return (
        <div className="content__admin">
            {!users.length?( <div>
                <h1>Dont have users</h1>
                <p>You can add user</p>
                <input type="text" value={value} onChange={(e)=>{setValue(e.target.value)}}/>
                <Button type='primary' onClick={()=>{addButtonUsers(value)}}>Add user</Button>
            </div>):(
                <>
            {users.map((user,key)=>{
                return(
                    <div className='user__item' key={key}>
                        <DropDown user={user}/>
                        <Button type='danger' onClick={()=>{deleteUsers(user)}}> X</Button>
                    </div>
                )
            })}
            </>
                )}
        </div>
    );
};

export default ListItem;