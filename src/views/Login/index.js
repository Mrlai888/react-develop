/** @format */

import React from "react"
// import fakeAuth from "../../fakeAuth"

import { Row, Col, Form, Icon, Input, Button } from "antd"
import "./index.scss"

class Login extends React.PureComponent {
  handleSubmit = e => {
    e.preventDefault()
  }
  render() {
    // const { getFieldDecorator } = this.props.form
    return (
      <div className="page-login">
        <Row className="page-login_row" type="flex" align="middle">
          <Col span={8} offset={8}>
            <div>
              <Form onSubmit={this.handleSubmit} className="login-form">
                <Form.Item>
                  <h1 className="login-form_title">Administrator</h1>
                </Form.Item>
                <Form.Item>
                  <Input
                    prefix={
                      <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                    }
                    placeholder="Username"
                  />
                </Form.Item>
                <Form.Item>
                  <Input
                    prefix={
                      <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                    }
                    type="password"
                    placeholder="Password"
                  />
                </Form.Item>
                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="login-form_button"
                  >
                    登录
                  </Button>
                </Form.Item>
                <Form.Item>
                  <Button type="Default" className="login-form_button">
                    注册
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Login
