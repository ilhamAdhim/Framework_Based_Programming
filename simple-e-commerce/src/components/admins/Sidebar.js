import React from 'react';

import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { Link } from 'react-router-dom';

const Sidebar = props => {
    return (
        <>
            <ProSidebar style={{ height: '100vh' }} className="overflow-hidden">
                <Menu iconShape="square">
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
                </Menu>
            </ProSidebar>
        </>
    )
}


export default Sidebar;