webpackHotUpdate_N_E("pages/index",{

/***/ "./components/FollowButton.js":
/*!************************************!*\
  !*** ./components/FollowButton.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
var _this = undefined,
    _jsxFileName = "C:\\react-study\\next-inflearn\\front\\components\\FollowButton.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var FollowButton = function FollowButton(_ref) {
  _s();

  var post = _ref.post;

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.user;
  }),
      me = _useSelector.me,
      followLoading = _useSelector.followLoading,
      unfollowLoading = _useSelector.unfollowLoading;

  var isFollowing = me === null || me === void 0 ? void 0 : me.Followings.find(function (v) {
    return v.id === post.User.id;
  });
  var onFollow = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    if (isFollowing) {
      dispatchEvent({
        type: _reducers_user__WEBPACK_IMPORTED_MODULE_4__["UNFOLLOW_REQUEST"]
      });
    }
  }, [isFollowing]);
  return __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    onClickButton: onClickButton,
    loading: followLoading || unfollowLoading,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 5
    }
  }, isFollowing ? "언팔로우" : "팔로우");
};

_s(FollowButton, "dBorxj87fYHO7gL8Zmc4mZzobZ4=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"]];
});

_c = FollowButton;
FollowButton.propTypes = {
  post: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (FollowButton);

var _c;

$RefreshReg$(_c, "FollowButton");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gb2xsb3dCdXR0b24uanMiXSwibmFtZXMiOlsiRm9sbG93QnV0dG9uIiwicG9zdCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwibWUiLCJmb2xsb3dMb2FkaW5nIiwidW5mb2xsb3dMb2FkaW5nIiwiaXNGb2xsb3dpbmciLCJGb2xsb3dpbmdzIiwiZmluZCIsInYiLCJpZCIsIlVzZXIiLCJvbkZvbGxvdyIsInVzZUNhbGxiYWNrIiwiZGlzcGF0Y2hFdmVudCIsInR5cGUiLCJVTkZPTExPV19SRVFVRVNUIiwib25DbGlja0J1dHRvbiIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm9iamVjdCIsImlzUmVxdWlyZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxPQUFjO0VBQUE7O0VBQUEsSUFBWEMsSUFBVyxRQUFYQSxJQUFXOztFQUNqQyxtQkFBK0NDLCtEQUFXLENBQ3hELFVBQUNDLEtBQUQ7SUFBQSxPQUFXQSxLQUFLLENBQUNDLElBQWpCO0VBQUEsQ0FEd0QsQ0FBMUQ7RUFBQSxJQUFRQyxFQUFSLGdCQUFRQSxFQUFSO0VBQUEsSUFBWUMsYUFBWixnQkFBWUEsYUFBWjtFQUFBLElBQTJCQyxlQUEzQixnQkFBMkJBLGVBQTNCOztFQUdBLElBQU1DLFdBQVcsR0FBR0gsRUFBSCxhQUFHQSxFQUFILHVCQUFHQSxFQUFFLENBQUVJLFVBQUosQ0FBZUMsSUFBZixDQUFvQixVQUFDQyxDQUFEO0lBQUEsT0FBT0EsQ0FBQyxDQUFDQyxFQUFGLEtBQVNYLElBQUksQ0FBQ1ksSUFBTCxDQUFVRCxFQUExQjtFQUFBLENBQXBCLENBQXBCO0VBQ0EsSUFBTUUsUUFBUSxHQUFHQyx5REFBVyxDQUFDLFlBQU07SUFDakMsSUFBSVAsV0FBSixFQUFpQjtNQUNmUSxhQUFhLENBQUM7UUFDWkMsSUFBSSxFQUFFQywrREFBZ0JBO01BRFYsQ0FBRCxDQUFiO0lBR0Q7RUFDRixDQU4yQixFQU16QixDQUFDVixXQUFELENBTnlCLENBQTVCO0VBT0EsT0FDRSxNQUFDLDJDQUFEO0lBQ0UsYUFBYSxFQUFFVyxhQURqQjtJQUVFLE9BQU8sRUFBRWIsYUFBYSxJQUFJQyxlQUY1QjtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBSUdDLFdBQVcsR0FBRyxNQUFILEdBQVksS0FKMUIsQ0FERjtBQVFELENBcEJEOztHQUFNUixZO1VBQzJDRSx1RDs7O0tBRDNDRixZO0FBc0JOQSxZQUFZLENBQUNvQixTQUFiLEdBQXlCO0VBQ3ZCbkIsSUFBSSxFQUFFb0IsaURBQVMsQ0FBQ0MsTUFBVixDQUFpQkM7QUFEQSxDQUF6QjtBQUlldkIsMkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNzk1ZWE1ZWM0MjMzNTgwOTYzOTcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjayB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IFVORk9MTE9XX1JFUVVFU1QgfSBmcm9tIFwiLi4vcmVkdWNlcnMvdXNlclwiO1xyXG5cclxuY29uc3QgRm9sbG93QnV0dG9uID0gKHsgcG9zdCB9KSA9PiB7XHJcbiAgY29uc3QgeyBtZSwgZm9sbG93TG9hZGluZywgdW5mb2xsb3dMb2FkaW5nIH0gPSB1c2VTZWxlY3RvcihcclxuICAgIChzdGF0ZSkgPT4gc3RhdGUudXNlclxyXG4gICk7XHJcbiAgY29uc3QgaXNGb2xsb3dpbmcgPSBtZT8uRm9sbG93aW5ncy5maW5kKCh2KSA9PiB2LmlkID09PSBwb3N0LlVzZXIuaWQpO1xyXG4gIGNvbnN0IG9uRm9sbG93ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgaWYgKGlzRm9sbG93aW5nKSB7XHJcbiAgICAgIGRpc3BhdGNoRXZlbnQoe1xyXG4gICAgICAgIHR5cGU6IFVORk9MTE9XX1JFUVVFU1QsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0sIFtpc0ZvbGxvd2luZ10pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8QnV0dG9uXHJcbiAgICAgIG9uQ2xpY2tCdXR0b249e29uQ2xpY2tCdXR0b259XHJcbiAgICAgIGxvYWRpbmc9e2ZvbGxvd0xvYWRpbmcgfHwgdW5mb2xsb3dMb2FkaW5nfVxyXG4gICAgPlxyXG4gICAgICB7aXNGb2xsb3dpbmcgPyBcIuyWuO2MlOuhnOyasFwiIDogXCLtjJTroZzsmrBcIn1cclxuICAgIDwvQnV0dG9uPlxyXG4gICk7XHJcbn07XHJcblxyXG5Gb2xsb3dCdXR0b24ucHJvcFR5cGVzID0ge1xyXG4gIHBvc3Q6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvbGxvd0J1dHRvbjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==