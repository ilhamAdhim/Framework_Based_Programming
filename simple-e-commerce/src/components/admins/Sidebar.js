import React from 'react';

import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { logout } from '../../actions/authAction';

import bg from '../../assets/bg1.jpg'

const Sidebar = props => {
    let history = useHistory()
    const userDispatch = useDispatch()

    const logoutUser = () => {
        userDispatch(logout())
        history.push('/')
    }

    return (
        <>
            <ProSidebar style={{ height: '100vh', position: 'fixed' }} className="overflow-hidden" breakPoint="sm" image={bg}>
                <Menu iconShape="square" className="mt-4">
                    <MenuItem >Dashboard</MenuItem>
                    <SubMenu title="Manage">
                        <MenuItem>
                            <Link to="/ManageProducts">
                                Products
                            </Link>
                        </MenuItem>
                        <MenuItem>
                            <Link to="/ManageUsers">
                                Users
                            </Link>
                        </MenuItem>
                        <MenuItem>
                            <Link to="/VerifyTransaction">
                                Transactions
                            </Link>
                        </MenuItem>
                    </SubMenu>
                    <MenuItem onClick={logoutUser}>
                        Logout
                    </MenuItem>
                </Menu>
            </ProSidebar>
        </>
    )
}


export default Sidebar;