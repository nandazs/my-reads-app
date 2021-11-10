import React from 'react';
import PageModel from '../PageModel';
import BreadcrumbComponent from '../../components/Breadcrumb';

export default function HomePage() {

    const breadcrumb =  [
        {name: 'Home', route: '/'},
    ]

    return(
    <>
        <BreadcrumbComponent className="breadcrumb" pages={breadcrumb}/>
        <PageModel currentShelf={"Home"}/>
    </>);

}