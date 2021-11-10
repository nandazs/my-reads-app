import React from 'react';
import PageModel from '../PageModel'
import BreadcrumbComponent from '../../components/Breadcrumb';

import {
    CheckOutlined,
    BookOutlined,
} from '@ant-design/icons'; 


export default function CurrentlyReadingPage() {

    const breadcrumb =  [
        {name: 'Home', route: '/'},
        {name: 'Currently Reading', route: '/currentlyReading'},
    ]

    const submenu = [
        {name: 'Want To Read', key: 'wantToRead', icon: <BookOutlined/>},
        {name: 'Reads', key: 'read', icon: <CheckOutlined/>}
    ]

    return(
        <>
            <BreadcrumbComponent className="breadcrumb" pages={breadcrumb}/>
            <PageModel submenu={submenu} currentShelf={"currentlyReading"}/>
        </>
    );

}
