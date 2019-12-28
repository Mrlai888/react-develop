/** @format */
import React from "react"
import { Route, Switch } from "react-router-dom"
import { Layout, Menu, Icon } from "antd"
import "./BaseLayout.scss"

import Welcome from "../views/Welcome"
import List from "../views/UserManage/List"
import Auth from "../views/UserManage/Auth"

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

  /**
   * 菜单点击跳转
   */
  handleMenuLink(path) {
    this.props.history.push(path) // 编程式导航
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
            <Menu.Item key="1" onClick={this.handleMenuLink.bind(this, "/")}>
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
              <Menu.Item
                key="3"
                onClick={this.handleMenuLink.bind(this, "/usermanage/list")}
              >
                用户列表
              </Menu.Item>
              <Menu.Item
                key="4"
                onClick={this.handleMenuLink.bind(this, "/usermanage/auth")}
              >
                权限设置
              </Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout>
          <Header className="header" />
          <Content className="content">
            <Switch>
              <Route path="/usermanage/auth" component={Auth}></Route>
              <Route path="/usermanage/list" component={List}></Route>
              <Route path="/" component={Welcome}></Route>
            </Switch>
          </Content>
        </Layout>
      </Layout>
    )
  }
}

export default BaseLayout
