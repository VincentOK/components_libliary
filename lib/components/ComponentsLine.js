"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireDefault(require("react"));

var _antd = require("antd");

require("antd/dist/antd.css");

var _echarts = _interopRequireDefault(require("echarts/lib/echarts"));

require("echarts/lib/chart/line");

require("echarts/lib/component/tooltip");

require("echarts/lib/component/title");

require("echarts/lib/component/legend");

require("echarts/lib/component/toolbox");

require("echarts/lib/component/markPoint");

require("echarts/lib/component/markLine");

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var ComponentsLine = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(ComponentsLine, _React$Component);

  var _super = _createSuper(ComponentsLine);

  function ComponentsLine(props) {
    var _this;

    (0, _classCallCheck2.default)(this, ComponentsLine);
    _this = _super.call(this, props);
    _this.state = {
      el: "lineMain",
      width: '100%',
      height: 500,
      myOptions: {
        title: {
          text: '折线图堆叠'
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          name: '邮件营销',
          type: 'line',
          stack: '总量',
          data: [120, 132, 101, 134, 90, 230, 210]
        }, {
          name: '联盟广告',
          type: 'line',
          stack: '总量',
          data: [220, 182, 191, 234, 290, 330, 310]
        }, {
          name: '视频广告',
          type: 'line',
          stack: '总量',
          data: [150, 232, 201, 154, 190, 330, 410]
        }, {
          name: '直接访问',
          type: 'line',
          stack: '总量',
          data: [320, 332, 301, 334, 390, 330, 320]
        }, {
          name: '搜索引擎',
          type: 'line',
          stack: '总量',
          data: [820, 932, 901, 934, 1290, 1330, 1320]
        }]
      }
    };
    _this.chart = null;
    return _this;
  }

  (0, _createClass2.default)(ComponentsLine, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _that = this; // 初始化


      _that.chart = _echarts.default.init(document.getElementById(_that.state.el)); // 绘制图表

      _that.chart.setOption(_that.state.myOptions);

      window.addEventListener('resize', function () {
        _that.chart.resize();
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react.default.createElement("div", {
        id: this.state.el,
        style: {
          width: this.state.width,
          height: this.state.height
        }
      });
    }
  }]);
  return ComponentsLine;
}(_react.default.Component);

exports.default = ComponentsLine;