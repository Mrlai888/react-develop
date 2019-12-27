/** @format */

import React from "react"
import { Link } from "react-router-dom"
// import fakeAuth from "../../fakeAuth"

import { Row, Col, Form, Icon, Input, Button } from "antd"
// import "./index.scss"

class Login extends React.PureComponent {
  handleSubmit = e => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values)
      }
    })
  }
  render() {
    const { getFieldDecorator } = this.props.form
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
                  {getFieldDecorator("username", {
                    rules: [
                      { required: true, message: "账号不能为空！" },
                      { type: "email", message: "请输入正确的邮箱地址！" },
                      { min: 4, message: "账号不能小于4位数" }
                    ]
                  })(
                    <Input
                      prefix={
                        <Icon
                          type="user"
                          style={{ color: "rgba(0,0,0,.25)" }}
                        />
                      }
                      placeholder="Username"
                    />
                  )}
                </Form.Item>
                <Form.Item>
                  {getFieldDecorator("password", {
                    rules: [
                      { required: true, message: "密码不能为空！" },
                      { min: 6, message: "密码不能小于6位数" },
                      { max: 12, message: "密码不能大于12位数" }
                    ]
                  })(
                    <Input
                      prefix={
                        <Icon
                          type="lock"
                          style={{ color: "rgba(0,0,0,.25)" }}
                        />
                      }
                      type="password"
                      placeholder="Password"
                    />
                  )}
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
                    <Link to="/register">注册</Link>
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

export default Form.create()(Login)
