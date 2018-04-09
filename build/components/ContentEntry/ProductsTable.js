(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['exports', 'react', './ProductRow'], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require('react'), require('./ProductRow'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.react, global.ProductRow);
        global.ProductsTable = mod.exports;
    }
})(this, function (exports, _react, _ProductRow) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _react2 = _interopRequireDefault(_react);

    var _ProductRow2 = _interopRequireDefault(_ProductRow);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    // ProductsTable Component that renders all the ProductRows ( reports )
    //imports
    var ProductsTable = _react2.default.createClass({
        displayName: 'ProductsTable',

        render: function render() {

            var rows = this.props.products.map(function (product, i) {
                return _react2.default.createElement(_ProductRow2.default, {
                    key: i,
                    product: product,
                    changeAppMode: this.props.changeAppMode
                });
            }.bind(this));

            return !rows.length ? _react2.default.createElement(
                'div',
                { className: 'alert alert-danger' },
                'Nu exista nicio reclamatie in acest moment.'
            ) : _react2.default.createElement(
                'div',
                null,
                rows
            );
        }
    });

    //make sure to export the component
    exports.default = ProductsTable;
});