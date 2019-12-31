/** @format */
/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react"
import { Route, Switch } from "react-router-dom"
import { Layout, Menu, Icon, Avatar, Badge } from "antd"
import "./BaseLayout.scss"

import Welcome from "../views/Welcome"
import List from "../views/UserManage/List"
import Auth from "../views/UserManage/Auth"

const { Header, Content, Sider } = Layout
const { SubMenu } = Menu

class BaseLayout extends React.Component {
  state = {
    collapsed: false,
    current: "mail"
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    })
  }

  onCollapse = collapsed => {
    // console.log(collapsed)
    this.setState({ collapsed })
  }

  //菜单点击跳转
  handleMenuLink(path) {
    this.props.history.push(path) // 编程式导航
  }

  handleClick = e => {
    console.log("click ", e)
    this.setState({
      current: e.key
    })
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
          <Header className="header">
            <Icon
              style={{ fontSize: "22px" }}
              className="trigger"
              type={this.state.collapsed ? "menu-unfold" : "menu-fold"}
              onClick={this.toggle}
            />
            <Menu
              onClick={this.handleClick}
              selectedKeys={[this.state.current]}
              mode="horizontal"
              style={{ marginTop: "-47px", borderBottom: "none" }}
            >
              <SubMenu
                style={{ float: "right" , top:'-5px'}}
                title={
                  <span className="submenu-title-wrapper">
                    <Badge count={"99+"}>
                      <Avatar
                        shape="square"
                        size="large"
                        icon="user"
                        src="https://i.loli.net/2019/12/31/C2A4ihxotVrwMvZ.jpg"
                      />
                    </Badge>
                  </span>
                }
              >
                <Menu.ItemGroup title="Item 1">
                  <Menu.Item key="setting:1">Option 1</Menu.Item>
                  <Menu.Item key="setting:2">Option 2</Menu.Item>
                </Menu.ItemGroup>
                <Menu.ItemGroup title="Item 2">
                  <Menu.Item key="setting:3">Option 3</Menu.Item>
                  <Menu.Item key="setting:4">Option 4</Menu.Item>
                </Menu.ItemGroup>
              </SubMenu>
            </Menu>
          </Header>
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

// {/* <span style={{ float: "right", marginRight: "50px" }}>
// <Badge count={"99+"}>
//   <Avatar
//     shape="square"
//     size="large"
//     icon="user"
//     src="https://i.loli.net/2019/12/31/C2A4ihxotVrwMvZ.jpg"
//   />
// </Badge>
// </span> */}
export default BaseLayout
