(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['exports', 'react', './CreateProductComponent', './Welcome'], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require('react'), require('./CreateProductComponent'), require('./Welcome'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.react, global.CreateProductComponent, global.Welcome);
        global.MainApp = mod.exports;
    }
})(this, function (exports, _react, _CreateProductComponent, _Welcome) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _react2 = _interopRequireDefault(_react);

    var _CreateProductComponent2 = _interopRequireDefault(_CreateProductComponent);

    var _Welcome2 = _interopRequireDefault(_Welcome);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    // MainApp Component responsible for switching visual between index and create report ( Welcome.js and CreateProductComponent.js )
    var MainApp = _react2.default.createClass({
        displayName: 'MainApp',

        getInitialState: function getInitialState() {
            return {
                currentMode: 'index'
            };
        },

        changeAppMode: function changeAppMode(newMode, productId) {
            this.setState({ currentMode: newMode });

            if (productId !== undefined) {
                this.setState({ productId: productId });
            }
            if (typeof Storage !== "undefined") {
                localStorage.setItem("productId", productId);
                localStorage.setItem("currentMode", newMode);
            } else {
                alert("Please use a browser that supports LocalStorage.");
            }
        },

        render: function render() {
            var modeComponent = _react2.default.createElement(_Welcome2.default, {
                changeAppMode: this.changeAppMode });

            switch (this.state.currentMode) {
                case 'index':
                    break;
                case 'create':
                    modeComponent = _react2.default.createElement(_CreateProductComponent2.default, { changeAppMode: this.changeAppMode });
                    break;
                default:
                    break;
            }

            return modeComponent;
        }
    });

    //make sure to export the component
    //imports
    exports.default = MainApp;
});