import React, { useEffect, useState } from 'react';
import BreadcrumbComponent from '../../components/Breadcrumb';
import { searchBooks } from '../../services/api';
import Spinner from '../../components/Spinner';
import CardBookSearch from '../../components/cards/CardBookSearch.jsx';

export default function SearchBooksPage() {

    const [books, setBooks] = useState([]);
    const [resOk, setResOk] = useState(false);

    const breadcrumb =  [
        {name: 'Home', route: '/home'},
        {name: 'Search Books', route: '/search'}
    ]

    useEffect(() => {
        document.querySelector('#input_search').addEventListener('select', onSelect);        
        return function cleanUp() {
            document.querySelector('#input_search').removeEventListener('select', onSelect);
        }
    })

    const onSelect = ({ detail }) => {
        booksAPI(detail);
        setResOk(false);
    }

    async function booksAPI(selected) {
        const booksAPI = await searchBooks(selected);
        setBooks(booksAPI);
        setResOk(true);
    }

    const cards = () => {
        return books.books.map((book) => {
            return <CardBookSearch key={book.id} {...book} books={book} />
        });
    }

    const shelf = () => {
        return resOk ? cards() : <Spinner/>;
    }

    return(
        <div>
            <BreadcrumbComponent className="breadcrumb" pages={breadcrumb}/>
            <div className="site-layout-content">
                <div className="shelf_container">
                    {shelf()}
                </div>
            </div>
        </div>    
    );
}