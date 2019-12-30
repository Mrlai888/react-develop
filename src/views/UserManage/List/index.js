/** @format */
/* eslint-disable react-hooks/exhaustive-deps */

// 用户列表
import React, { useState, useEffect } from "react"
import { Table, Divider, Button } from "antd"
import { findUser, deleteUser } from "../../../api/UserApi"

const List = ({ handleDlete }) => {
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
          <Button type="primary" icon="edit" shape="circle"></Button>
          <Divider type="vertical" />
          <Button
            type="danger"
            icon="delete"
            shape="circle"
            onClick={() => {
              deleteUser(text.id)
            }}
          ></Button>
        </span>
      )
    }
  ]
  // handleDlete = text => {
  //   console.log(text.id)
  // }
  // 用户列表
  const [useList, setList] = useState([])

  // 每页显示条数
  const [limt] = useState(9)

  // 总条数
  const [total, setTotal] = useState(1)

  // 加载
  const [loading, setLoading] = useState(false)

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
