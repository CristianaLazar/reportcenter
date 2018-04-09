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
        global.VerifyUserComponent = mod.exports;
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

    //VerifyUserComponent that verifies an user
    //imports
    var VerifyUserComponent = _react2.default.createClass({
        displayName: 'VerifyUserComponent',


        componentDidMount: function componentDidMount() {
            (0, _jquery2.default)('.page-header h1').text('Verify User');
        },

        // function we call when we press the "Da" button to verify the user
        onDelete: function onDelete(e) {
            _jquery2.default.post("api/verify_user.php", { del_ids: this.props.memberId });
        },

        render: function render() {
            var _this = this;

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'p',
                    { style: { textAlign: 'center' } },
                    'Esti sigur ca vrei sa verific utilizatorul ',
                    this.props.username,
                    ' ?'
                ),
                _react2.default.createElement(
                    'p',
                    { style: { textAlign: 'center' } },
                    'Acesta va avea acces la panoul de reclamatii!!'
                ),
                _react2.default.createElement(
                    'div',
                    { style: { display: 'flex', textAlign: 'center', justifyContent: 'space-around' } },
                    _react2.default.createElement(
                        'div',
                        { style: {} },
                        _react2.default.createElement(
                            'a',
                            { href: '/admin.php', onClick: function onClick() {
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
    exports.default = VerifyUserComponent;
});