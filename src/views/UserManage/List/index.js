/** @format */
// 用户列表
import React, { useState, useEffect } from "react"
import { Table } from "antd"
import { findUser } from "../../../api/UserApi"

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
    title: "性别",
    dataIndex: "gender",
    render(col, row) {
      if (row.gender === 1) {
        return "男"
      } else {
        return "女"
      }
    }
  }
]

const List = () => {
  // 用户列表
  const [useList, setList] = useState([])

  // 每页显示条数
  const [limt] = useState(8)

  // 总条数
  const [total, setTotal] = useState(1)

  // 加载
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    findUserPage(1)
  }, [])

  const onChange = page => {
    findUserPage(page)
  }

  const findUserPage = page => {
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
          onChange: onChange
        }}
      ></Table>
    </div>
  )
}

export default List
