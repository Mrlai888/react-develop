/** @format */

import React from "react"
// import fakeAuth from "../../fakeAuth"

import { Row, Col, Form, Icon, Input, Button } from "antd"
import "./index.scss"

class Login extends React.PureComponent {
  render() {
    return (
      <div className="page-login">
        <Row>
          <Col span={8} offset={8}>
            <Form>
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
                  className="login-form-button"
                >
                  登录
                </Button>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Login
