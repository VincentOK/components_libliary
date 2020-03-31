import React from 'react';
import {Button} from 'antd';
import 'antd/dist/antd.css';
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/line';
export default class SmallButton extends React.Component {
  componentDidMount() {
    // 初始化
    var myChart = echarts.init(document.getElementById('main'));
    // 绘制图表
    myChart.setOption({
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [{
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line'
      }]
    });
  }
  render() {
    return (
      <div style={{border: '1px solid red'}}>
        <div style={{border: '1px solid black'}}>
          <Button type="primary">默认按钮</Button>
        </div>
        <div id="main" style={{ width: '100%', height: 500 }}></div>
      </div>
    );
  }
}
