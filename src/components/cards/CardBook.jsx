import React from 'react';
import { updateBook } from '../../services/api';
import { Card } from 'antd';
import {DeleteOutlined } from '@ant-design/icons';
const { Meta } = Card;

export default function CardBook(props) {

    async function moveBook(book, shelf) {
        await updateBook(book, shelf);
    }

    const image = (imageLinks) => {
        if(imageLinks) {
            return imageLinks.thumbnail ? imageLinks.thumbnail : imageLinks.smallthumbnail;
        } 
    }

    const submenu = (submenu) => {
        return submenu ? submenu : null;
    }


    return(
        <div className="card_container">
            <Card
                className="card_book"
                hoverable = {true}
                cover={<img className="card_img" alt={"Cover of " + props.title} src={image(props.imageLinks)}/>}
                actions={[<DeleteOutlined onClick={()=>moveBook(props.book, "noShelf")} key="noShelf"/>, submenu(props.submenu)]}
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