

import React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb } from 'antd';

export default function BreadcrumbComponent(props) {
    const breadcrumb = () => {
            return props.pages.map((page, index) => {
                return (
                    <Breadcrumb.Item key={index}>
                        <Link to={page.route}>
                            {page.name}
                        </Link>
                    </Breadcrumb.Item>
                );      
            }
        );
    }

    return(
        <Breadcrumb className="breadcrumb">
                {breadcrumb()}
        </Breadcrumb>
    );

}