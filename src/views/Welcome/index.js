/** @format */

import React from "react"
import { Descriptions, Badge } from "antd"
class Welcome extends React.PureComponent {
  render() {
    return (
      <Descriptions title="React 后台管理系统" layout="vertical" bordered>
        <Descriptions.Item label="组件库">Ant Design</Descriptions.Item>
        <Descriptions.Item label="数据来源">jsonserver模拟数据</Descriptions.Item>
        <Descriptions.Item label="数据请求方式">Axios</Descriptions.Item>
        <Descriptions.Item label="开始时间">
          2019-12-30 09:40
        </Descriptions.Item>
        <Descriptions.Item label="结束时间" span={2}>
          ---
        </Descriptions.Item>
        <Descriptions.Item label="项目状态" span={3}>
          <Badge status="processing" text="开发中" />
        </Descriptions.Item>
        <Descriptions.Item label="Negotiated Amount">$80.00</Descriptions.Item>
        <Descriptions.Item label="Discount">$20.00</Descriptions.Item>
        <Descriptions.Item label="Official Receipts">$60.00</Descriptions.Item>
        <Descriptions.Item label="Config Info">
          Data disk type: MongoDB
          <br />
          Database version: 3.4
          <br />
          Package: dds.mongo.mid
          <br />
          Storage space: 10 GB
          <br />
          Replication factor: 3
          <br />
          Region: East China 1<br />
        </Descriptions.Item>
      </Descriptions>
    )
  }
}

export default Welcome
