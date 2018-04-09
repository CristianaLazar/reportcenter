(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['exports', 'react', './ReadOneUserComponent', './VerifyUserComponent'], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require('react'), require('./ReadOneUserComponent'), require('./VerifyUserComponent'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.react, global.ReadOneUserComponent, global.VerifyUserComponent);
        global.MainApp = mod.exports;
    }
})(this, function (exports, _react, _ReadOneUserComponent, _VerifyUserComponent) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _react2 = _interopRequireDefault(_react);

    var _ReadOneUserComponent2 = _interopRequireDefault(_ReadOneUserComponent);

    var _VerifyUserComponent2 = _interopRequireDefault(_VerifyUserComponent);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    // MainApp Component
    var MainApp = _react2.default.createClass({
        displayName: 'MainApp',

        getInitialState: function getInitialState() {
            return {
                currentMode: 'readOne'
            };
        },

        changeAppMode: function changeAppMode(newMode, memberId) {
            this.setState({ currentMode: newMode });
            if (typeof Storage !== "undefined") {
                localStorage.setItem("currentMode", newMode);
            } else {
                alert("Please use a browser that supports LocalStorage.");
            }
        },

        render: function render() {
            var modeComponent = _react2.default.createElement(_ReadOneUserComponent2.default, {
                changeAppMode: this.changeAppMode, userId: this.props.memberId });

            switch (this.state.currentMode) {
                case 'readOne':
                    break;
                case 'verify':
                    modeComponent = _react2.default.createElement(_VerifyUserComponent2.default, { username: this.props.username, memberId: this.props.memberId, changeAppMode: this.changeAppMode });
                    break;
                default:
                    break;
            }

            return modeComponent;
        }
    });

    // make sure to export the component
    //imports
    exports.default = MainApp;
});