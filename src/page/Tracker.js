import React from 'react';
import './style.css';
import { useSelector} from "react-redux";
import Tracker from "../components/tracker/Tracker";

const Trackers = ({time,setTime}) => {
    const users = useSelector(state => state.users.users)

    return (
        <div className="content__user">
            {!users.length?(
                <div>
                <h1>Dont have users</h1>
                </div>
                ):(
                <>
            {users.map((user,key)=>{
                return(
                    <div className='user__item' key={key}>
                        <b>{user.name}</b>
                        <Tracker user={user} time={time} setTime={setTime}/>
                    </div>
                )
            })}
            </>
                )}
        </div>
    );
};

export default React.memo(Trackers);