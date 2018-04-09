(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['exports', 'react', 'react-modal', './CreateProductComponent'], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require('react'), require('react-modal'), require('./CreateProductComponent'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.react, global.reactModal, global.CreateProductComponent);
        global.TopActionsComponent = mod.exports;
    }
})(this, function (exports, _react, _reactModal, _CreateProductComponent) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _react2 = _interopRequireDefault(_react);

    var _reactModal2 = _interopRequireDefault(_reactModal);

    var _CreateProductComponent2 = _interopRequireDefault(_CreateProductComponent);

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

    // custom styles for the modal
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
    // TopActions Component responsible for rendering the button with which we access CreateProduct Component

    var TopActionsComponent = function (_React$Component) {
        _inherits(TopActionsComponent, _React$Component);

        function TopActionsComponent() {
            _classCallCheck(this, TopActionsComponent);

            var _this = _possibleConstructorReturn(this, (TopActionsComponent.__proto__ || Object.getPrototypeOf(TopActionsComponent)).call(this));

            _this.state = {
                modalIsOpen: false
            };

            _this.openModal = _this.openModal.bind(_this);
            _this.afterOpenModal = _this.afterOpenModal.bind(_this);
            _this.closeModal = _this.closeModal.bind(_this);
            return _this;
        }

        _createClass(TopActionsComponent, [{
            key: 'openModal',
            value: function openModal() {
                this.setState({ modalIsOpen: true });
            }
        }, {
            key: 'afterOpenModal',
            value: function afterOpenModal() {}
        }, {
            key: 'closeModal',
            value: function closeModal() {
                this.setState({ modalIsOpen: false });
            }
        }, {
            key: 'render',
            value: function render() {
                return _react2.default.createElement(
                    'div',
                    { className: 'add' },
                    _react2.default.createElement(
                        'span',
                        null,
                        _react2.default.createElement(
                            'span',
                            {
                                onClick: this.openModal,
                                className: 'btn btn-primary btn-lg'
                            },
                            'Adaugati o reclamatie'
                        )
                    ),
                    _react2.default.createElement(
                        _reactModal2.default,
                        {
                            isOpen: this.state.modalIsOpen,
                            onAfterOpen: this.afterOpenModal,
                            onRequestClose: this.closeModal,
                            style: customStyles,
                            contentLabel: "Adauga o reclamatie"
                        },
                        _react2.default.createElement(_CreateProductComponent2.default, null)
                    )
                );
            }
        }]);

        return TopActionsComponent;
    }(_react2.default.Component);

    exports.default = TopActionsComponent;
});