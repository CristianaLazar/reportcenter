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
        global.DeleteProductComponent = mod.exports;
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

    //Delete Component which is the visual for setting visibility to 0 in reports table
    //imports
    var DeleteProductComponent = _react2.default.createClass({
        displayName: 'DeleteProductComponent',


        componentDidMount: function componentDidMount() {
            (0, _jquery2.default)('.page-header h1').text('Delete product');
        },

        // function we call when we press the "Da" button to set visibility to 0
        onDelete: function onDelete(e) {
            _jquery2.default.post("api/delete_product.php", { del_ids: this.props.productId });
        },

        render: function render() {
            var _this = this;

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'p',
                    { style: { textAlign: 'center' } },
                    'Esti sigur ca vrei sa marchezi reclamatia ca fiind preluata/rezolvata?'
                ),
                _react2.default.createElement(
                    'p',
                    { style: { textAlign: 'center' } },
                    'Ea nu va mai putea fii vizibila!'
                ),
                _react2.default.createElement(
                    'div',
                    { style: { display: 'flex', textAlign: 'center', justifyContent: 'space-around' } },
                    _react2.default.createElement(
                        'div',
                        { style: {} },
                        _react2.default.createElement(
                            'a',
                            { href: '/content.php', onClick: function onClick() {
                                    return _this.props.changeAppMode('readOne', _this.props.productId);
                                } },
                            _react2.default.createElement(
                                'button',
                                { onClick: this.onDelete,
                                    className: 'btn btn-danger m-r-1em' },
                                'Da'
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { style: {} },
                        _react2.default.createElement(
                            'a',
                            { onClick: function onClick() {
                                    return _this.props.changeAppMode('readOne', _this.props.productId);
                                } },
                            _react2.default.createElement(
                                'button',
                                {
                                    className: 'btn btn-primary' },
                                'Nu'
                            )
                        )
                    )
                )
            );
        }
    });

    //make sure to export the component
    exports.default = DeleteProductComponent;
});