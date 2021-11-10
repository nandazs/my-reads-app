import React, { useEffect, useState } from 'react';
import CardBook from '../../components/cards/CardBook.jsx';
import { getMyBooks } from '../../services/api';
import Spinner from '../../components/Spinner';
import CardSubMenu from '../../components/cards/CardSubMenu.jsx';
import CardBookHome from '../../components/cards/CardBookHome.jsx';

export default function PageModel(props) {

    const [books, setBooks] = useState([]);

    useEffect(() => {
        return getMyBooks().then(function(data) { 
            setBooks(data.books);
        });
    })

    const cards = () => {
        return books.map((book) => {
            if(book.shelf === props.currentShelf) {
                return <CardBook key={book.id} {...book} book={book} 
                submenu={<CardSubMenu submenu={props.submenu} key={book.id} book={book}/>}/>;
            }
        })
    }

    const cardsHome = () => {
        return books.map((book) => {
            return <CardBookHome key={book.id} {...book} book={book}/>;
        })
    }

    const shelf = () => {
        if(books.length > 0) {
            if(props.currentShelf === 'Home') {
                return cardsHome();
            } else {
                return cards();
            }
        } else {
            return <Spinner/>;;
        }
    }

    return(
        <>
            <div className="site-layout-content">
                <div className="shelf_container">
                    {shelf()}
                </div>
            </div>
        </>    
    );

}