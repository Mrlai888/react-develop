/** @format */
/* eslint-disable react-hooks/exhaustive-deps */

// 用户列表
import React, { useState, useEffect } from "react"
import { Table, Divider, Button, Modal, Input } from "antd"
import { findUser, deleteUser } from "../../../api/UserApi"
// import Confirm from "../../../components/Confirm"

const List = ({ handleDlete, handleWrite, handleCancel, handleOk }) => {
  // 用户列表
  const [useList, setList] = useState([])

  // 每页显示条数
  const [limt] = useState(8)

  // 总条数
  const [total, setTotal] = useState(1)

  // 加载
  const [loading, setLoading] = useState(false)

  // 弹出窗显示隐藏
  const [visible, setVisible] = useState(false)

  const { confirm } = Modal

  const columns = [
    {
      title: "用户编号",
      dataIndex: "id"
    },
    {
      title: "用户名",
      dataIndex: "username"
    },
    {
      title: "密码",
      dataIndex: "password"
    },
    {
      title: "性别",
      dataIndex: "gender",
      render(col, row) {
        if (row.gender === 1) {
          return "男"
        } else {
          return "女"
        }
      }
    },
    {
      title: "操作",
      key: "action",
      render: (text, record) => (
        <span>
          <Button
            type="primary"
            icon="edit"
            shape="circle"
            onClick={() => {
              return handleWrite(record.id)
            }}
          ></Button>
          <Modal
            maskStyle={{
              background: "rgba(0,0,0,.1)"
            }}
            visible={visible}
            title="编辑内容"
            onOk={handleOk}
            onCancel={handleCancel}
            footer={[
              <Button key="back" onClick={handleCancel}>
                返回
              </Button>,
              <Button
                key="submit"
                type="primary"
                loading={loading}
                onClick={handleOk}
              >
                保存
              </Button>
            ]}
          >
            <p>用户名:</p>
            <Input></Input>
            <p>密码:</p>
            <Input></Input>
            <p>性别</p>
          </Modal>
          <Divider type="vertical" />
          <Button
            type="danger"
            icon="delete"
            shape="circle"
            onClick={() => {
              return handleDlete(record.id)
            }}
          ></Button>
        </span>
      )
    }
  ]
  handleDlete = id => {
    confirm({
      title: "是否要删除当前信息?",
      // content: "Some descriptions",
      okText: "确认",
      okType: "primary",
      cancelText: "取消",
      width: "500px",
      onOk() {
        deleteUser(id)
        let newData = [...useList]
        const value = newData.findIndex(item => {
          return item.id === id
        })
        newData.splice(value, 1)
        setList(newData)
      },
      onCancel() {}
    })
  }
  handleWrite = id => {
    setVisible(true)
    console.log(id)
  }

  handleOk = () => {
    setLoading(true)
    setTimeout(() => {
      setVisible(false)
      setLoading(false)
    }, 2000)
  }

  handleCancel = () => {
    setVisible(false)
  }

  useEffect(() => {
    getListPage(1)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const onChange = page => {
    getListPage(page)
  }

  const getListPage = page => {
    // 加载
    setLoading(true)

    findUser({ _page: page, _limit: limt }).then(response => {
      const { data, headers } = response
      setList(data)
      setTotal(parseInt(headers["x-total-count"]))

      // 加载完成...
      setLoading(false)
    })
  }
  return (
    <div className="page-list">
      <Table
        rowKey="id"
        columns={columns}
        dataSource={useList}
        loading={loading}
        pagination={{
          total: total,
          defaultPageSize: limt,
          onChange: onChange,
          hideOnSinglePage: true
        }}
      ></Table>
    </div>
  )
}

export default List
