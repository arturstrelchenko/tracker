import React from 'react';
import {Dropdown, Menu} from "antd";
import {DownOutlined} from "@ant-design/icons";
import 'antd/dist/antd.css';
const DropDown = ({user}) => {
    const menu = (
        <Menu>
            <Menu.Item key="0">
                WebSite: <b>{user?.website}</b>
            </Menu.Item>
            <Menu.Item key="1">
              Email: <b>{user?.email}</b>
            </Menu.Item>
            <Menu.Item key="3">
                Company: <b>{user?.company?.name}</b>
            </Menu.Item>
            <Menu.Item key="4">
                Task: <b>{user?.company?.bs}</b>
            </Menu.Item>
            <Menu.Item key="5">
                {user.tracker===0?(<p>Dont work now</p>):(
                    <>
                Tracker time:
                <span>{("0" + Math.floor((user.tracker / 60000) % 60)).slice(-2)}:</span>
                <span>{("0" + Math.floor((user.tracker / 1000) % 60)).slice(-2)}:</span>
                <span>{("0" + ((user.tracker / 10) % 100)).slice(-2)}</span>
                    </>
                    )}
            </Menu.Item>
        </Menu>
    );
    console.log(user)
    return (
        <div>
            <Dropdown overlay={menu} trigger={['click']}>
                <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                    {user?.name}
                    <DownOutlined />
                </a>
            </Dropdown>
        </div>
    );
};

export default DropDown;