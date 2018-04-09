(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['exports', 'react', 'jquery', './ProductsTable'], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require('react'), require('jquery'), require('./ProductsTable'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.react, global.jquery, global.ProductsTable);
        global.ReadProductsComponent = mod.exports;
    }
})(this, function (exports, _react, _jquery, _ProductsTable) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _react2 = _interopRequireDefault(_react);

    var _jquery2 = _interopRequireDefault(_jquery);

    var _ProductsTable2 = _interopRequireDefault(_ProductsTable);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    // ReadProducts Component responsible for rendering the whole page where we can read the reports
    var ReadProductsComponent = _react2.default.createClass({
        displayName: 'ReadProductsComponent',

        getInitialState: function getInitialState() {
            return {
                products: [],
                currentMode: 'readOne',
                productId: null
            };
        },

        // fetch all the data from the server

        componentDidMount: function componentDidMount() {
            this.serverRequest = _jquery2.default.get("api/read_all_products.php", function (products) {
                this.setState({
                    products: JSON.parse(products)
                });
            }.bind(this));
        },

        componentWillUnmount: function componentWillUnmount() {
            this.serverRequest.abort();
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

            // list of products
            var filteredProducts = this.state.products;
            (0, _jquery2.default)('.page-header h1').text('Read Products');

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        'div',
                        { className: 'list', style: { fontFamily: 'Roboto' } },
                        'Te aflii pe pagina: Panou de control reclamatii.'
                    ),
                    _react2.default.createElement(_ProductsTable2.default, {
                        products: filteredProducts,
                        changeAppMode: this.changeAppMode })
                )
            );
        }
    }); //imports
    exports.default = ReadProductsComponent;
});