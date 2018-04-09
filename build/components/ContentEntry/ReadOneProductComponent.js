(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['exports', 'react', 'jquery'], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require('react'), require('jquery'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.react, global.jquery);
        global.ReadOneProductComponent = mod.exports;
    }
})(this, function (exports, _react, _jquery) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _react2 = _interopRequireDefault(_react);

    var _jquery2 = _interopRequireDefault(_jquery);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    // ReadOneProduct Component responsible for rendering the view in which we can read the details of a single report
    //imports
    var ReadOneProductComponent = _react2.default.createClass({
        displayName: 'ReadOneProductComponent',


        getInitialState: function getInitialState() {
            return {
                id: 0,
                name: '',
                description: '',
                offenseid: 0,
                date: '',
                adress: '',
                cnp: '',
                serie: '',
                number: '',
                category_name: ''
            };
        },

        componentDidMount: function componentDidMount() {
            var productId = localStorage.getItem("productId");

            //request the data from the server
            this.serverRequestProd = _jquery2.default.post("api/read_one_product.php", { prod_id: productId }, function (product) {
                var p = JSON.parse(product)[0];
                this.setState({ category_name: p.category_name });
                this.setState({ id: p.id });
                this.setState({ name: p.name });
                this.setState({ description: p.description });
                this.setState({ offenseid: p.offenseid });
                this.setState({ date: p.date });
                this.setState({ adress: p.adress });
                this.setState({ cnp: p.cnp });
                this.setState({ serie: p.serie });
                this.setState({ number: p.number });
            }.bind(this));
        },

        componentWillUnmount: function componentWillUnmount() {
            this.serverRequestProd.abort();
        },

        render: function render() {
            var _this = this;

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'p',
                    null,
                    'Titlu: ',
                    this.state.name
                ),
                _react2.default.createElement(
                    'p',
                    { style: { maxWidth: 20 + 'em', wordWrap: 'break-word' } },
                    'Descriere: ',
                    this.state.description
                ),
                _react2.default.createElement(
                    'p',
                    null,
                    'Data sesizarii: ',
                    this.state.date
                ),
                _react2.default.createElement(
                    'p',
                    null,
                    'Adresa: ',
                    this.state.adress
                ),
                _react2.default.createElement(
                    'p',
                    null,
                    'CNP: ',
                    this.state.cnp
                ),
                _react2.default.createElement(
                    'p',
                    null,
                    'Serie: ',
                    this.state.serie
                ),
                _react2.default.createElement(
                    'p',
                    null,
                    'Numar: ',
                    this.state.number
                ),
                _react2.default.createElement(
                    'div',
                    { style: { textAlign: 'center' } },
                    _react2.default.createElement(
                        'span',
                        null,
                        _react2.default.createElement(
                            'a',
                            { className: 'btn btn-danger',
                                onClick: function onClick() {
                                    return _this.props.changeAppMode('delete', _this.props.productId);
                                } },
                            'Marcheaza ca rezolvat'
                        )
                    )
                )
            );
        }
    });

    //make sure to export the component
    exports.default = ReadOneProductComponent;
});