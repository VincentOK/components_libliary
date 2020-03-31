import React from 'react';
import 'antd/dist/antd.css';
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/bar';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/toolbox';
import 'echarts/lib/component/markPoint';
import 'echarts/lib/component/markLine';
export default class ComponentsLine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      el:'BarMain',
      width: '100%',
      height: 500,
    };
    this.BarChart = null;
  }
  componentDidMount() {
    const _that = this;
    var xAxisData = [];
    var data1 = [];
    var data2 = [];
    for (var i = 0; i < 100; i++) {
      xAxisData.push('类目' + i);
      data1.push((Math.sin(i / 5) * (i / 5 -10) + i / 6) * 5);
      data2.push((Math.cos(i / 5) * (i / 5 -10) + i / 6) * 5);
    }
    // 初始化
    _that.BarChart = echarts.init(document.getElementById(_that.state.el));
    // 绘制图表
    _that.BarChart.setOption( {
      title: {
        text: '柱状图动画延迟'
      },
      legend: {
        data: ['bar', 'bar2']
      },
      toolbox: {
        // y: 'bottom',
        feature: {
          magicType: {
            type: ['stack', 'tiled']
          },
          dataView: {},
          saveAsImage: {
            pixelRatio: 2
          }
        }
      },
      tooltip: {},
      xAxis: {
        data: xAxisData,
        splitLine: {
          show: false
        }
      },
      yAxis: {
      },
      series: [{
        name: 'bar',
        type: 'bar',
        data: data1,
        animationDelay: function (idx) {
          return idx * 10;
        }
      },
        {
          name: 'bar2',
          type: 'bar',
          data: data2,
          animationDelay: function (idx) {
            return idx * 10 + 100;
          }
        }],
      animationEasing: 'elasticOut',
      animationDelayUpdate: function (idx) {
        return idx * 5;
      }
    });
    window.addEventListener('resize',function(){
      _that.BarChart.resize();
    })
  }
  render() {
    return (
      <div id={this.state.el} ref={this.state.el} style={{ width: this.state.width, height: this.state.height }}></div>
    );
  }
}
