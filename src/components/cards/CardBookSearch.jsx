import React, { useState } from 'react';
import {updateBook } from '../../services/api';
import {
    EyeOutlined,
    CheckOutlined,
    BookOutlined,
    EllipsisOutlined,
    CheckCircleOutlined
} from '@ant-design/icons';
import { Menu, Dropdown } from 'antd';
import { Card } from 'antd';

const { Meta } = Card;
const { SubMenu } = Menu;

export default function CardBookSearch(props) {

    const [active, setActive] = useState(false)

    async function moveBook(book, shelf) {
        await updateBook(book, shelf);
        setActive(true);
    }

    const submenu = () => {
        return (<Menu>
                    <SubMenu key="submenu" title="Move to Shelf" onClick={({key})=>moveBook(props.books, key)}>
                        <Menu.Item icon={ <EyeOutlined />} key={'currentlyReading'}>Currently Reading</Menu.Item>
                        <Menu.Item icon={ <BookOutlined />} key={'wantToRead'}>Want To Read</Menu.Item>
                        <Menu.Item icon={ <CheckOutlined/>} key={'read'}>Reads</Menu.Item>
                    </SubMenu>
                </Menu>);
    }

    const dropdown = () => {
        return (
                <Dropdown overlay={submenu}>
                    <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                        {icon()}
                    </a>
                </Dropdown>);
    }

    function icon(actived) {
        if(active) {
            return <CheckCircleOutlined style={{ fontSize: '16px', color: 'green'}}/>;
        } else {
            return <EllipsisOutlined style={{ fontSize: '16px'}} key="ellipsis"/>;
        }
       
    }

    const image = (imageLinks) => {
        if(imageLinks) {
            return imageLinks.thumbnail ? imageLinks.thumbnail : imageLinks.smallthumbnail;
        } 
    }

    return(
        <div className="card_container">
            <Card
                className="card_book"
                hoverable = {true}
                cover={<img className="card_img" alt={"Cover of " + props.title} src={image(props.imageLinks)}/>}
                actions={[dropdown()]}
            >
                <Meta
                    className="card_body"
                    title={props.title}
                    description={props.authors ? props.authors.toString().replace(",", ", ") : "Unknow Author"}
                />
            </Card>
        </div>
    );
}