webpackHotUpdate(0,{

/***/ 962:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(811);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _ufunc = __webpack_require__(827);\n\nvar _ufunc2 = _interopRequireDefault(_ufunc);\n\nfunction _interopRequireDefault(obj) {\n  return obj && obj.__esModule ? obj : { default: obj };\n}\n\nvar TableData = function TableData(props) {\n  var item = props.item;\n\n  for (var i = 0; i < item.length; i++) {\n    return item.map(function (val, index) {\n      var col = undefined;\n\n      var isUndefined = _ufunc2.default.maybe(0);\n\n      var item1 = val[2];\n      var item2 = isUndefined(item[index + 1]);\n      var item1PlusOne = val[2] + 1;\n      var item1PlusItem2 = val[2] + isUndefined(item[index + 1])[2];\n      var item2MinusItem1 = item2[2] - item1[2];\n\n      console.log(item[index + 1]);\n      // console.log(val[1], item1PlusOne, item1PlusItem2, item2MinusItem1);\n\n      // sets colspan\n      if (item1PlusOne !== item1PlusItem2 + 1) {\n        col = item2MinusItem1 !== 0 ? item2MinusItem1 : null;\n      };\n\n      return _react2.default.createElement('td', {\n        colSpan: col,\n        key: index,\n        'data-kitid': 'tabledata-[' + props.index + ', ' + index + ']-' + props.kitid }, val[1]);\n    });\n  }\n};\n\nTableData.propTypes = {\n  item: _react2.default.PropTypes.array,\n  index: _react2.default.PropTypes.number,\n  kitid: _react2.default.PropTypes.string\n};\n\nexports.default = TableData;\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vY29tcG9uZW50cy9yZWFjdC11aWtpdC10YWJsZS9saWIvdGFibGUtZGF0YS5qcz9lNThiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7QUFFYixNQUFNLENBQUMsY0FBYyxDQUFDLE9BQU8sRUFBRSxZQUFZLEVBQUU7QUFDM0MsT0FBSyxFQUFFLElBQUk7Q0FDWixDQUFDLENBQUM7O0FBRUgsSUFBSSxNQUFNLEdBQUcsbUJBQU8sQ0FBQyxHQUFPLENBQUMsQ0FBQzs7QUFFOUIsSUFBSSxPQUFPLEdBQUcsc0JBQXNCLENBQUMsTUFBTSxDQUFDLENBQUM7O0FBRTdDLElBQUksTUFBTSxHQUFHLG1CQUFPLENBQUMsR0FBTyxDQUFDLENBQUM7O0FBRTlCLElBQUksT0FBTyxHQUFHLHNCQUFzQixDQUFDLE1BQU0sQ0FBQyxDQUFDOztBQUU3QyxTQUFTLHNCQUFzQixDQUFDLEdBQUcsRUFBRTtBQUFFLFNBQU8sR0FBRyxJQUFJLEdBQUcsQ0FBQyxVQUFVLEdBQUcsR0FBRyxHQUFHLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDO0NBQUU7O0FBRS9GLElBQUksU0FBUyxHQUFHLFNBQVMsU0FBUyxDQUFDLEtBQUssRUFBRTtBQUN4QyxNQUFJLElBQUksR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDOztBQUV0QixPQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtBQUNwQyxXQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxHQUFHLEVBQUUsS0FBSyxFQUFFO0FBQ3BDLFVBQUksR0FBRyxHQUFHLFNBQVMsQ0FBQzs7QUFFcEIsVUFBSSxXQUFXLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7O0FBRTNDLFVBQUksS0FBSyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNuQixVQUFJLEtBQUssR0FBRyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3pDLFVBQUksWUFBWSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDOUIsVUFBSSxjQUFjLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDOUQsVUFBSSxlQUFlLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQzs7QUFFMUMsYUFBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDOzs7O0FBSTVCLFVBQUksWUFBWSxLQUFLLGNBQWMsR0FBRyxDQUFDLEVBQUU7QUFDdkMsV0FBRyxHQUFHLGVBQWUsS0FBSyxDQUFDLEdBQUcsZUFBZSxHQUFHLElBQUksQ0FBQztPQUN0RCxDQUFDOztBQUVGLGFBQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQ2xDLElBQUksRUFDSjtBQUNFLGVBQU8sRUFBRSxHQUFHO0FBQ1osV0FBRyxFQUFFLEtBQUs7QUFDVixvQkFBWSxFQUFFLGFBQWEsR0FBRyxLQUFLLENBQUMsS0FBSyxHQUFHLElBQUksR0FBRyxLQUFLLEdBQUcsSUFBSSxHQUFHLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFDakYsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUNQLENBQUM7S0FDSCxDQUFDLENBQUM7R0FDSjtDQUNGLENBQUM7O0FBRUYsU0FBUyxDQUFDLFNBQVMsR0FBRztBQUNwQixNQUFJLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsS0FBSztBQUNyQyxPQUFLLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsTUFBTTtBQUN2QyxPQUFLLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsTUFBTTtDQUN4QyxDQUFDOztBQUVGLE9BQU8sQ0FBQyxPQUFPLEdBQUcsU0FBUyIsImZpbGUiOiI5NjIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF91ZnVuYyA9IHJlcXVpcmUoJ3VmdW5jJyk7XG5cbnZhciBfdWZ1bmMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdWZ1bmMpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgVGFibGVEYXRhID0gZnVuY3Rpb24gVGFibGVEYXRhKHByb3BzKSB7XG4gIHZhciBpdGVtID0gcHJvcHMuaXRlbTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGl0ZW0ubGVuZ3RoOyBpKyspIHtcbiAgICByZXR1cm4gaXRlbS5tYXAoZnVuY3Rpb24gKHZhbCwgaW5kZXgpIHtcbiAgICAgIHZhciBjb2wgPSB1bmRlZmluZWQ7XG5cbiAgICAgIHZhciBpc1VuZGVmaW5lZCA9IF91ZnVuYzIuZGVmYXVsdC5tYXliZSgwKTtcblxuICAgICAgdmFyIGl0ZW0xID0gdmFsWzJdO1xuICAgICAgdmFyIGl0ZW0yID0gaXNVbmRlZmluZWQoaXRlbVtpbmRleCArIDFdKTtcbiAgICAgIHZhciBpdGVtMVBsdXNPbmUgPSB2YWxbMl0gKyAxO1xuICAgICAgdmFyIGl0ZW0xUGx1c0l0ZW0yID0gdmFsWzJdICsgaXNVbmRlZmluZWQoaXRlbVtpbmRleCArIDFdKVsyXTtcbiAgICAgIHZhciBpdGVtMk1pbnVzSXRlbTEgPSBpdGVtMlsyXSAtIGl0ZW0xWzJdO1xuXG4gICAgICBjb25zb2xlLmxvZyhpdGVtW2luZGV4ICsgMV0pO1xuICAgICAgLy8gY29uc29sZS5sb2codmFsWzFdLCBpdGVtMVBsdXNPbmUsIGl0ZW0xUGx1c0l0ZW0yLCBpdGVtMk1pbnVzSXRlbTEpO1xuXG4gICAgICAvLyBzZXRzIGNvbHNwYW5cbiAgICAgIGlmIChpdGVtMVBsdXNPbmUgIT09IGl0ZW0xUGx1c0l0ZW0yICsgMSkge1xuICAgICAgICBjb2wgPSBpdGVtMk1pbnVzSXRlbTEgIT09IDAgPyBpdGVtMk1pbnVzSXRlbTEgOiBudWxsO1xuICAgICAgfTtcblxuICAgICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAndGQnLFxuICAgICAgICB7XG4gICAgICAgICAgY29sU3BhbjogY29sLFxuICAgICAgICAgIGtleTogaW5kZXgsXG4gICAgICAgICAgJ2RhdGEta2l0aWQnOiAndGFibGVkYXRhLVsnICsgcHJvcHMuaW5kZXggKyAnLCAnICsgaW5kZXggKyAnXS0nICsgcHJvcHMua2l0aWQgfSxcbiAgICAgICAgdmFsWzFdXG4gICAgICApO1xuICAgIH0pO1xuICB9XG59O1xuXG5UYWJsZURhdGEucHJvcFR5cGVzID0ge1xuICBpdGVtOiBfcmVhY3QyLmRlZmF1bHQuUHJvcFR5cGVzLmFycmF5LFxuICBpbmRleDogX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcy5udW1iZXIsXG4gIGtpdGlkOiBfcmVhY3QyLmRlZmF1bHQuUHJvcFR5cGVzLnN0cmluZ1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gVGFibGVEYXRhO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4uL2NvbXBvbmVudHMvcmVhY3QtdWlraXQtdGFibGUvbGliL3RhYmxlLWRhdGEuanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9");

/***/ }

})