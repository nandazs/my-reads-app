
import React from 'react';
import { Menu, Dropdown } from 'antd';
import { updateBook } from '../../services/api';

import {
    EllipsisOutlined,
} from '@ant-design/icons'; 

const { SubMenu } = Menu;

export default function CardSubMenu(props) {

    async function moveBook(book, shelf) {
        await updateBook(book, shelf);
    }
    
    const submenu = (
        <Menu>
          <SubMenu title="Move to Shelf" onClick={({key})=>moveBook(props.book, key)}>
            { 
                props.submenu.map((shelf) => {
                    return <Menu.Item icon={shelf.icon} key={shelf.key}>{shelf.name}</Menu.Item>
                })
            }
          </SubMenu>
        </Menu>
    );

    return(
        <Dropdown overlay={submenu}>
            <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                <EllipsisOutlined key="ellipsis"/>
            </a>
        </Dropdown>
    );
}