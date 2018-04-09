(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['exports', 'react', 'react-modal', './MainApp'], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require('react'), require('react-modal'), require('./MainApp'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.react, global.reactModal, global.MainApp);
        global.UserRow = mod.exports;
    }
})(this, function (exports, _react, _reactModal, _MainApp) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _react2 = _interopRequireDefault(_react);

    var _reactModal2 = _interopRequireDefault(_reactModal);

    var _MainApp2 = _interopRequireDefault(_MainApp);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }

        return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
        };
    }();

    function _possibleConstructorReturn(self, call) {
        if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }

        return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }

    function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }

        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }

    //custom styles for the modal ( popup )
    var customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)'
        }
    };

    // UserRow which renders a member's details clicked on will render a modal ( popup )

    var UserRow = function (_React$Component) {
        _inherits(UserRow, _React$Component);

        function UserRow() {
            _classCallCheck(this, UserRow);

            var _this = _possibleConstructorReturn(this, (UserRow.__proto__ || Object.getPrototypeOf(UserRow)).call(this));

            _this.state = {
                modalIsOpen: false
            };

            _this.openModal = _this.openModal.bind(_this);
            _this.afterOpenModal = _this.afterOpenModal.bind(_this);
            _this.closeModal = _this.closeModal.bind(_this);
            return _this;
        }

        _createClass(UserRow, [{
            key: 'openModal',
            value: function openModal() {
                this.setState({ modalIsOpen: true });
            }
        }, {
            key: 'afterOpenModal',
            value: function afterOpenModal() {
                // references are now sync'd and can be accessed.
            }
        }, {
            key: 'closeModal',
            value: function closeModal() {
                this.setState({ modalIsOpen: false });
            }
        }, {
            key: 'render',
            value: function render() {
                var _this2 = this;

                return _react2.default.createElement(
                    'div',
                    { className: 'list' },
                    _react2.default.createElement(
                        'a',
                        { onClick: function onClick() {
                                return _this2.props.changeAppMode('readOne', _this2.props.user.id);
                            }, style: { textDecoration: 'none' } },
                        _react2.default.createElement(
                            'div',
                            { className: 'categorie' },
                            this.props.user.username
                        ),
                        _react2.default.createElement(
                            'div',
                            { style: { fontSize: 0.7 + 'em', fontFamily: 'Roboto', color: "#000000" } },
                            this.props.user.name
                        ),
                        _react2.default.createElement(
                            'div',
                            null,
                            _react2.default.createElement(
                                'p',
                                { style: { wordWrap: 'break-word', color: "#000000" } },
                                this.props.user.email
                            )
                        ),
                        _react2.default.createElement(
                            'span',
                            { onClick: this.openModal, style: { textDecoration: 'none' } },
                            _react2.default.createElement(
                                'div',
                                { className: 'btn btn-primary btn-large', style: { fontFamily: 'Roboto' } },
                                'Arata datele utilizatorului'
                            )
                        ),
                        _react2.default.createElement(
                            _reactModal2.default,
                            {
                                isOpen: this.state.modalIsOpen,
                                onAfterOpen: this.afterOpenModal,
                                onRequestClose: this.closeModal,
                                style: customStyles,
                                contentLabel: this.props.user.username
                            },
                            _react2.default.createElement(_MainApp2.default, { username: this.props.user.username, memberId: this.props.user.id })
                        )
                    )
                );
            }
        }]);

        return UserRow;
    }(_react2.default.Component);

    exports.default = UserRow;
});