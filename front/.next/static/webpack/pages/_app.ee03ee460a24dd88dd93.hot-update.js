webpackHotUpdate_N_E("pages/_app",{

/***/ "./sagas/user.js":
/*!***********************!*\
  !*** ./sagas/user.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return userSaga; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");


var _marked = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(logIn),
    _marked2 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(logOut),
    _marked3 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(signUp),
    _marked4 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchFollow),
    _marked5 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchUnfollow),
    _marked6 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchLogIn),
    _marked7 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchLogOut),
    _marked8 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchSignUp),
    _marked9 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(userSaga);



 // function logInAPI(data) {
//   return axios.post("/api/login", data);
// }
// function logOutAPI() {
//   return axios.post("/api/logout");
// }
// function signUpAPI() {
//   return axios.post("/api/signup");
// }

function logIn(action) {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function logIn$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["delay"])(1000);

        case 3:
          _context.next = 5;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["LOG_IN_SUCCESS"],
            data: action.data
          });

        case 5:
          _context.next = 11;
          break;

        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          _context.next = 11;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["LOG_IN_FAILURE"],
            error: _context.t0.response.data
          });

        case 11:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[0, 7]]);
}

function logOut() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function logOut$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["delay"])(1000);

        case 3:
          _context2.next = 5;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["LOG_OUT_SUCCESS"]
          });

        case 5:
          _context2.next = 11;
          break;

        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2["catch"](0);
          _context2.next = 11;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["LOG_OUT_FAILURE"],
            error: _context2.t0.response.data
          });

        case 11:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2, null, [[0, 7]]);
}

function signUp() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function signUp$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["delay"])(1000);

        case 3:
          _context3.next = 5;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["SIGN_UP_SUCCESS"]
          });

        case 5:
          _context3.next = 11;
          break;

        case 7:
          _context3.prev = 7;
          _context3.t0 = _context3["catch"](0);
          _context3.next = 11;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["SIGN_UP_FAILURE"],
            error: _context3.t0.response.data
          });

        case 11:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3, null, [[0, 7]]);
}

function watchFollow() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchFollow$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(FOLLOW_REQUEST, follow);

        case 2:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked4);
}

function watchUnfollow() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchUnfollow$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(UNFOLLOW_REQUEST, unfollow);

        case 2:
        case "end":
          return _context5.stop();
      }
    }
  }, _marked5);
}

function watchLogIn() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchLogIn$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_3__["LOG_IN_REQUEST"], logIn);

        case 2:
        case "end":
          return _context6.stop();
      }
    }
  }, _marked6);
}

function watchLogOut() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchLogOut$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          _context7.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_3__["LOG_OUT_REQUEST"], logOut);

        case 2:
        case "end":
          return _context7.stop();
      }
    }
  }, _marked7);
}

function watchSignUp() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchSignUp$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          _context8.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_3__["SIGN_UP_REQUEST"], signUp);

        case 2:
        case "end":
          return _context8.stop();
      }
    }
  }, _marked8);
}

function userSaga() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function userSaga$(_context9) {
    while (1) {
      switch (_context9.prev = _context9.next) {
        case 0:
          _context9.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLogIn), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLogOut), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchSignUp), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchFollow), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchUnfollow)]);

        case 2:
        case "end":
          return _context9.stop();
      }
    }
  }, _marked9);
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2FnYXMvdXNlci5qcyJdLCJuYW1lcyI6WyJsb2dJbiIsImxvZ091dCIsInNpZ25VcCIsIndhdGNoRm9sbG93Iiwid2F0Y2hVbmZvbGxvdyIsIndhdGNoTG9nSW4iLCJ3YXRjaExvZ091dCIsIndhdGNoU2lnblVwIiwidXNlclNhZ2EiLCJhY3Rpb24iLCJkZWxheSIsInB1dCIsInR5cGUiLCJMT0dfSU5fU1VDQ0VTUyIsImRhdGEiLCJMT0dfSU5fRkFJTFVSRSIsImVycm9yIiwicmVzcG9uc2UiLCJMT0dfT1VUX1NVQ0NFU1MiLCJMT0dfT1VUX0ZBSUxVUkUiLCJTSUdOX1VQX1NVQ0NFU1MiLCJTSUdOX1VQX0ZBSUxVUkUiLCJ0YWtlTGF0ZXN0IiwiRk9MTE9XX1JFUVVFU1QiLCJmb2xsb3ciLCJVTkZPTExPV19SRVFVRVNUIiwidW5mb2xsb3ciLCJMT0dfSU5fUkVRVUVTVCIsIkxPR19PVVRfUkVRVUVTVCIsIlNJR05fVVBfUkVRVUVTVCIsImFsbCIsImZvcmsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tHQTBCVUEsSzttR0FnQkFDLE07bUdBZUFDLE07bUdBZUFDLFc7bUdBSUFDLGE7bUdBSUFDLFU7bUdBSUFDLFc7bUdBSUFDLFc7bUdBSWVDLFE7O0FBNUZ6QjtBQUNBO0NBYUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUVBLFNBQVVSLEtBQVYsQ0FBZ0JTLE1BQWhCO0VBQUE7SUFBQTtNQUFBO1FBQUE7VUFBQTtVQUFBO1VBR0ksT0FBTUMsZ0VBQUssQ0FBQyxJQUFELENBQVg7O1FBSEo7VUFBQTtVQUlJLE9BQU1DLDhEQUFHLENBQUM7WUFDUkMsSUFBSSxFQUFFQyw2REFERTtZQUVSQyxJQUFJLEVBQUVMLE1BQU0sQ0FBQ0s7VUFGTCxDQUFELENBQVQ7O1FBSko7VUFBQTtVQUFBOztRQUFBO1VBQUE7VUFBQTtVQUFBO1VBU0ksT0FBTUgsOERBQUcsQ0FBQztZQUNSQyxJQUFJLEVBQUVHLDZEQURFO1lBRVJDLEtBQUssRUFBRSxZQUFJQyxRQUFKLENBQWFIO1VBRlosQ0FBRCxDQUFUOztRQVRKO1FBQUE7VUFBQTtNQUFBO0lBQUE7RUFBQTtBQUFBOztBQWdCQSxTQUFVYixNQUFWO0VBQUE7SUFBQTtNQUFBO1FBQUE7VUFBQTtVQUFBO1VBR0ksT0FBTVMsZ0VBQUssQ0FBQyxJQUFELENBQVg7O1FBSEo7VUFBQTtVQUlJLE9BQU1DLDhEQUFHLENBQUM7WUFDUkMsSUFBSSxFQUFFTSw4REFBZUE7VUFEYixDQUFELENBQVQ7O1FBSko7VUFBQTtVQUFBOztRQUFBO1VBQUE7VUFBQTtVQUFBO1VBUUksT0FBTVAsOERBQUcsQ0FBQztZQUNSQyxJQUFJLEVBQUVPLDhEQURFO1lBRVJILEtBQUssRUFBRSxhQUFJQyxRQUFKLENBQWFIO1VBRlosQ0FBRCxDQUFUOztRQVJKO1FBQUE7VUFBQTtNQUFBO0lBQUE7RUFBQTtBQUFBOztBQWVBLFNBQVVaLE1BQVY7RUFBQTtJQUFBO01BQUE7UUFBQTtVQUFBO1VBQUE7VUFHSSxPQUFNUSxnRUFBSyxDQUFDLElBQUQsQ0FBWDs7UUFISjtVQUFBO1VBSUksT0FBTUMsOERBQUcsQ0FBQztZQUNSQyxJQUFJLEVBQUVRLDhEQUFlQTtVQURiLENBQUQsQ0FBVDs7UUFKSjtVQUFBO1VBQUE7O1FBQUE7VUFBQTtVQUFBO1VBQUE7VUFRSSxPQUFNVCw4REFBRyxDQUFDO1lBQ1JDLElBQUksRUFBRVMsOERBREU7WUFFUkwsS0FBSyxFQUFFLGFBQUlDLFFBQUosQ0FBYUg7VUFGWixDQUFELENBQVQ7O1FBUko7UUFBQTtVQUFBO01BQUE7SUFBQTtFQUFBO0FBQUE7O0FBZUEsU0FBVVgsV0FBVjtFQUFBO0lBQUE7TUFBQTtRQUFBO1VBQUE7VUFDRSxPQUFNbUIscUVBQVUsQ0FBQ0MsY0FBRCxFQUFpQkMsTUFBakIsQ0FBaEI7O1FBREY7UUFBQTtVQUFBO01BQUE7SUFBQTtFQUFBO0FBQUE7O0FBSUEsU0FBVXBCLGFBQVY7RUFBQTtJQUFBO01BQUE7UUFBQTtVQUFBO1VBQ0UsT0FBTWtCLHFFQUFVLENBQUNHLGdCQUFELEVBQW1CQyxRQUFuQixDQUFoQjs7UUFERjtRQUFBO1VBQUE7TUFBQTtJQUFBO0VBQUE7QUFBQTs7QUFJQSxTQUFVckIsVUFBVjtFQUFBO0lBQUE7TUFBQTtRQUFBO1VBQUE7VUFDRSxPQUFNaUIscUVBQVUsQ0FBQ0ssNkRBQUQsRUFBaUIzQixLQUFqQixDQUFoQjs7UUFERjtRQUFBO1VBQUE7TUFBQTtJQUFBO0VBQUE7QUFBQTs7QUFJQSxTQUFVTSxXQUFWO0VBQUE7SUFBQTtNQUFBO1FBQUE7VUFBQTtVQUNFLE9BQU1nQixxRUFBVSxDQUFDTSw4REFBRCxFQUFrQjNCLE1BQWxCLENBQWhCOztRQURGO1FBQUE7VUFBQTtNQUFBO0lBQUE7RUFBQTtBQUFBOztBQUlBLFNBQVVNLFdBQVY7RUFBQTtJQUFBO01BQUE7UUFBQTtVQUFBO1VBQ0UsT0FBTWUscUVBQVUsQ0FBQ08sOERBQUQsRUFBa0IzQixNQUFsQixDQUFoQjs7UUFERjtRQUFBO1VBQUE7TUFBQTtJQUFBO0VBQUE7QUFBQTs7QUFJZSxTQUFVTSxRQUFWO0VBQUE7SUFBQTtNQUFBO1FBQUE7VUFBQTtVQUNiLE9BQU1zQiw4REFBRyxDQUFDLENBQ1JDLCtEQUFJLENBQUMxQixVQUFELENBREksRUFFUjBCLCtEQUFJLENBQUN6QixXQUFELENBRkksRUFHUnlCLCtEQUFJLENBQUN4QixXQUFELENBSEksRUFJUndCLCtEQUFJLENBQUM1QixXQUFELENBSkksRUFLUjRCLCtEQUFJLENBQUMzQixhQUFELENBTEksQ0FBRCxDQUFUOztRQURhO1FBQUE7VUFBQTtNQUFBO0lBQUE7RUFBQTtBQUFBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuZWUwM2VlNDYwYTI0ZGQ4OGRkOTMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFsbCwgY2FsbCwgZGVsYXksIGZvcmssIHB1dCwgdGFrZUxhdGVzdCB9IGZyb20gXCJyZWR1eC1zYWdhL2VmZmVjdHNcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQge1xyXG4gIExPR19JTl9GQUlMVVJFLFxyXG4gIExPR19JTl9SRVFVRVNULFxyXG4gIExPR19JTl9TVUNDRVNTLFxyXG4gIExPR19PVVRfRkFJTFVSRSxcclxuICBMT0dfT1VUX1JFUVVFU1QsXHJcbiAgTE9HX09VVF9TVUNDRVNTLFxyXG4gIFNJR05fVVBfRkFJTFVSRSxcclxuICBTSUdOX1VQX1JFUVVFU1QsXHJcbiAgU0lHTl9VUF9TVUNDRVNTLFxyXG59IGZyb20gXCIuLi9yZWR1Y2Vycy91c2VyXCI7XHJcblxyXG4vLyBmdW5jdGlvbiBsb2dJbkFQSShkYXRhKSB7XHJcbi8vICAgcmV0dXJuIGF4aW9zLnBvc3QoXCIvYXBpL2xvZ2luXCIsIGRhdGEpO1xyXG4vLyB9XHJcblxyXG4vLyBmdW5jdGlvbiBsb2dPdXRBUEkoKSB7XHJcbi8vICAgcmV0dXJuIGF4aW9zLnBvc3QoXCIvYXBpL2xvZ291dFwiKTtcclxuLy8gfVxyXG5cclxuLy8gZnVuY3Rpb24gc2lnblVwQVBJKCkge1xyXG4vLyAgIHJldHVybiBheGlvcy5wb3N0KFwiL2FwaS9zaWdudXBcIik7XHJcbi8vIH1cclxuXHJcbmZ1bmN0aW9uKiBsb2dJbihhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgLy8gY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2dJbkFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgZGVsYXkoMTAwMCk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0dfSU5fU1VDQ0VTUyxcclxuICAgICAgZGF0YTogYWN0aW9uLmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPR19JTl9GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsb2dPdXQoKSB7XHJcbiAgdHJ5IHtcclxuICAgIC8vIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9nT3V0QVBJKTtcclxuICAgIHlpZWxkIGRlbGF5KDEwMDApO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9HX09VVF9TVUNDRVNTLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0dfT1VUX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24qIHNpZ25VcCgpIHtcclxuICB0cnkge1xyXG4gICAgLy8gY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChzaWduVXBBUEkpO1xyXG4gICAgeWllbGQgZGVsYXkoMTAwMCk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBTSUdOX1VQX1NVQ0NFU1MsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFNJR05fVVBfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hGb2xsb3coKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChGT0xMT1dfUkVRVUVTVCwgZm9sbG93KTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoVW5mb2xsb3coKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChVTkZPTExPV19SRVFVRVNULCB1bmZvbGxvdyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExvZ0luKCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoTE9HX0lOX1JFUVVFU1QsIGxvZ0luKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9nT3V0KCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoTE9HX09VVF9SRVFVRVNULCBsb2dPdXQpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hTaWduVXAoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChTSUdOX1VQX1JFUVVFU1QsIHNpZ25VcCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiB1c2VyU2FnYSgpIHtcclxuICB5aWVsZCBhbGwoW1xyXG4gICAgZm9yayh3YXRjaExvZ0luKSxcclxuICAgIGZvcmsod2F0Y2hMb2dPdXQpLFxyXG4gICAgZm9yayh3YXRjaFNpZ25VcCksXHJcbiAgICBmb3JrKHdhdGNoRm9sbG93KSxcclxuICAgIGZvcmsod2F0Y2hVbmZvbGxvdyksXHJcbiAgXSk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==