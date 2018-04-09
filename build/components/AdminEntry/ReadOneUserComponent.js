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
        global.ReadOneUserComponent = mod.exports;
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

    // ReadOneUserComponent component that displays all the details of a certain user
    //imports
    var ReadOneUserComponent = _react2.default.createClass({
        displayName: 'ReadOneUserComponent',


        getInitialState: function getInitialState() {
            return {
                id: 0,
                username: '',
                email: '',
                name: 0,
                cnp: '',
                serie: '',
                number: '',
                workplace_info: ''
            };
        },

        componentDidMount: function componentDidMount() {
            var memberId = localStorage.getItem("memberId");

            //request the data from the server
            this.serverRequestProd = _jquery2.default.post("api/read_one_unverified_user.php", { member_id: memberId }, function (user) {
                var u = JSON.parse(user)[0];
                this.setState({ id: u.id });
                this.setState({ username: u.username });
                this.setState({ email: u.email });
                this.setState({ name: u.name });
                this.setState({ cnp: u.cnp });
                this.setState({ serie: u.serie });
                this.setState({ number: u.number });
                this.setState({ workplace_info: u.workplace_info });
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
                    'Nume de utilizator: ',
                    this.state.username
                ),
                _react2.default.createElement(
                    'p',
                    null,
                    'Email: ',
                    this.state.email
                ),
                _react2.default.createElement(
                    'p',
                    null,
                    'Nume complet: ',
                    this.state.name
                ),
                _react2.default.createElement(
                    'p',
                    null,
                    'CNP ',
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
                    'p',
                    null,
                    'Loc de munca: ',
                    this.state.workplace_info
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
                                    return _this.props.changeAppMode('verify', _this.props.productId);
                                } },
                            'Verifica utilizatorul'
                        )
                    )
                )
            );
        }
    });

    //make sure to export the component
    exports.default = ReadOneUserComponent;
});