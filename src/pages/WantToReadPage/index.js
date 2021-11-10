import PageModel from '../PageModel'
import BreadcrumbComponent from '../../components/Breadcrumb';

import {
    EyeOutlined,
    CheckOutlined,
} from '@ant-design/icons'; 

export default function WantToReadPage() {

    const breadcrumb =  [
        {name: 'Home', route: '/'},
        {name: 'Want to Read', route: '/want_to_read'},
    ]

    const submenu = [
        {name: 'Currently Reading', key: 'currentlyReading', icon: <EyeOutlined />},
        {name: 'Reads', key: 'read', icon: <CheckOutlined/>},  
    ]

    return(
        <>
            <BreadcrumbComponent className="breadcrumb" pages={breadcrumb}/>
            <PageModel submenu={submenu} currentShelf={"wantToRead"}/>
        </>
    );

}
