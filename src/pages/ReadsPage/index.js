import React from 'react';
import PageModel from '../PageModel'
import BreadcrumbComponent from '../../components/Breadcrumb';

import {
    EyeOutlined,
    BookOutlined,
} from '@ant-design/icons'; 

export default function ReadsPage() {

    const breadcrumb =  [
        {name: 'Home', route: '/'},
        {name: 'Reads', route: '/reads'},
    ]

    const submenu = [
        {name: 'Currently Reading', key: 'currentlyReading', icon: <EyeOutlined />},
        {name: 'Want To Read', key: 'wantToRead', icon: <BookOutlined/>},  
    ]

    return(
        <>
            <BreadcrumbComponent className="breadcrumb" pages={breadcrumb}/>
            <PageModel submenu={submenu} currentShelf={"read"}/>
        </>
    );

}