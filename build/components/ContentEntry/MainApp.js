(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['exports', 'react', './ReadOneProductComponent', './DeleteProductComponent'], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require('react'), require('./ReadOneProductComponent'), require('./DeleteProductComponent'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.react, global.ReadOneProductComponent, global.DeleteProductComponent);
        global.MainApp = mod.exports;
    }
})(this, function (exports, _react, _ReadOneProductComponent, _DeleteProductComponent) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _react2 = _interopRequireDefault(_react);

    var _ReadOneProductComponent2 = _interopRequireDefault(_ReadOneProductComponent);

    var _DeleteProductComponent2 = _interopRequireDefault(_DeleteProductComponent);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    // MainApp Component responsible for switching visual between reading one report and deleting it ( updating visibility to 0 )
    var MainApp = _react2.default.createClass({
        displayName: 'MainApp',

        getInitialState: function getInitialState() {
            return {
                currentMode: 'readOne'
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
            var modeComponent = _react2.default.createElement(_ReadOneProductComponent2.default, {
                changeAppMode: this.changeAppMode, productId: this.props.productId });

            switch (this.state.currentMode) {
                case 'readOne':
                    break;
                case 'delete':
                    modeComponent = _react2.default.createElement(_DeleteProductComponent2.default, { productId: this.props.productId, changeAppMode: this.changeAppMode });
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