import React from "react";
import { Layout } from 'antd';
const { Footer } = Layout;

export default function FooterComponent() {
    return(
        <Footer className="footer" style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Fernanda Sereno</Footer>
    );
}