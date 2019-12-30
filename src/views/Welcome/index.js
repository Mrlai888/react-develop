/** @format */

import React from "react"
import { Carousel } from "antd"
class Welcome extends React.PureComponent {
  render() {
    return (
      <div className="page-welcome">
        <Carousel autoplay>
          <div>
            1321321321231231313132132132312123312312
            <img src="../../pic/13340.jpg" alt="" />
            {/* <h3>1</h3> */}
          </div>
          <div>
            <img src="../../pic/15167.jpg" alt="" />
            {/* <h3>2</h3> */}
          </div>
          <div>
            <img src="../../pic/7672.jpg" alt="" />
            {/* <h3>3</h3> */}
          </div>
          <div>
            {/* <h3>4</h3> */}
            <img src="../../pic/8067.jpg" alt="" />
          </div>
        </Carousel>
      </div>
    )
  }
}

export default Welcome
