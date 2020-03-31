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

require("antd/dist/antd.css");

var _echarts = _interopRequireDefault(require("echarts/lib/echarts"));

require("echarts/lib/chart/bar");

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
      el: 'BarMain',
      width: '100%',
      height: 500
    };
    _this.BarChart = null;
    return _this;
  }

  (0, _createClass2.default)(ComponentsLine, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _that = this;

      var xAxisData = [];
      var data1 = [];
      var data2 = [];

      for (var i = 0; i < 100; i++) {
        xAxisData.push('类目' + i);
        data1.push((Math.sin(i / 5) * (i / 5 - 10) + i / 6) * 5);
        data2.push((Math.cos(i / 5) * (i / 5 - 10) + i / 6) * 5);
      } // 初始化


      _that.BarChart = _echarts.default.init(document.getElementById(_that.state.el)); // 绘制图表

      _that.BarChart.setOption({
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
        yAxis: {},
        series: [{
          name: 'bar',
          type: 'bar',
          data: data1,
          animationDelay: function animationDelay(idx) {
            return idx * 10;
          }
        }, {
          name: 'bar2',
          type: 'bar',
          data: data2,
          animationDelay: function animationDelay(idx) {
            return idx * 10 + 100;
          }
        }],
        animationEasing: 'elasticOut',
        animationDelayUpdate: function animationDelayUpdate(idx) {
          return idx * 5;
        }
      });

      window.addEventListener('resize', function () {
        _that.BarChart.resize();
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react.default.createElement("div", {
        id: this.state.el,
        ref: this.state.el,
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