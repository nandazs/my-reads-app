import React from 'react';
import { Link } from 'react-router-dom';
import { SearchBooksInput } from '../SearchBooksInput';
import {
    CheckOutlined,
    BookOutlined,
    EyeOutlined,
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
const { Header } = Layout;

export default function HeaderComponent() {

    return(
        <Header>
            <Menu theme="dark" mode="horizontal">
                <Menu.Item className="home" key="/">
                    <Link to="/">
                        My Books
                    </Link>
                </Menu.Item>
                <Menu.Item key="/currently_reading" icon={<EyeOutlined />}>
                    <Link to="/currently_reading">
                        Currently Reading
                    </Link>
                </Menu.Item>
                <Menu.Item key="/want_to_read" icon={<BookOutlined />}>
                    <Link to="/want_to_read">
                        Want to Read
                    </Link>
                </Menu.Item>      
                <Menu.Item key="/reads" icon={<CheckOutlined />}>
                    <Link to="/reads">
                        Reads
                    </Link>
                </Menu.Item>
                <Menu.Item key="/search">
                    <Link to="/search">
                        <SearchBooksInput/>
                    </Link>
                </Menu.Item>
            </Menu>       
        </Header>
    );
}

