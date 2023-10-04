"use client"

import { Content, Header } from "antd/es/layout/layout";
import SiderMenu from "./SiderMenu";
import { Layout, theme } from "antd";
import Sider from "antd/es/layout/Sider";
import { useState } from "react";


export default function NavigationBar(){

    const [collapsed, setCollapsed] = useState(false);
    const {
      token: { colorBgContainer },
    } = theme.useToken();
  
    return(
     <Layout>
        <Layout>
            <Header style={{ padding: 0, background: colorBgContainer }} />
            <div style={{display:"flex"}}>
                <Sider trigger={null} collapsible collapsed={collapsed}>
                    <div className="demo-logo-vertical" />
                    <SiderMenu/>
                </Sider>
                <Content style={{ margin: '24px 16px 0' }}>
                    <div style={{ padding: 24, minHeight: 360, background: colorBgContainer }}>content</div>
                </Content>
            </div>
               
        </Layout> 
    </Layout>
    )
}