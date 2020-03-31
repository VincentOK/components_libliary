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

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var SmallButton = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(SmallButton, _React$Component);

  var _super = _createSuper(SmallButton);

  function SmallButton() {
    (0, _classCallCheck2.default)(this, SmallButton);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(SmallButton, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // 初始化
      var myChart = _echarts.default.init(document.getElementById('main')); // 绘制图表


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
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react.default.createElement("div", {
        style: {
          border: '1px solid red'
        }
      }, /*#__PURE__*/_react.default.createElement("div", {
        style: {
          border: '1px solid black'
        }
      }, /*#__PURE__*/_react.default.createElement(_antd.Button, {
        type: "primary"
      }, "\u9ED8\u8BA4\u6309\u94AE")), /*#__PURE__*/_react.default.createElement("div", {
        id: "main",
        style: {
          width: '100%',
          height: 500
        }
      }));
    }
  }]);
  return SmallButton;
}(_react.default.Component);

exports.default = SmallButton;