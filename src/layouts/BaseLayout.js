/** @format */
import React from 'react'
import { Layout, Menu, Icon } from "antd"
import './BaseLayout.scss'

const { Header, Content, Sider } = Layout
const { SubMenu } = Menu

class BaseLayout extends React.Component {
  state = {
    collapsed: false
  }

  onCollapse = collapsed => {
    console.log(collapsed)
    this.setState({ collapsed })
  }

  render() {
    return (
      <Layout className="base-layout">
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
            <Menu.Item key="1">
              <Icon type="pie-chart" />
              <span>Welcome</span>
            </Menu.Item>
            <SubMenu
              key="sub1"
              title={
                <span>
                  <Icon type="user" />
                  <span>用户管理</span>
                </span>
              }
            >
              <Menu.Item key="3">用户列表</Menu.Item>
              <Menu.Item key="4">权限设置</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout>
          <Header />
          <Content></Content>
        </Layout>
      </Layout>
    )
  }
}

export default BaseLayout
