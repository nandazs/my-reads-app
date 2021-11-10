import React from "react";
import { Layout } from 'antd';
import Routes from "../../config/routes";
const { Content } = Layout;

export default function Main() {
  return(
    <Content style={{ padding: '0 50px' }}>
          <Routes/>
    </Content>
  );
}