(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['exports', 'react', './TopActionsComponent'], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require('react'), require('./TopActionsComponent'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.react, global.TopActionsComponent);
        global.Welcome = mod.exports;
    }
})(this, function (exports, _react, _TopActionsComponent) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _react2 = _interopRequireDefault(_react);

    var _TopActionsComponent2 = _interopRequireDefault(_TopActionsComponent);

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

    var Welcome = function (_React$Component) {
        _inherits(Welcome, _React$Component);

        function Welcome() {
            _classCallCheck(this, Welcome);

            return _possibleConstructorReturn(this, (Welcome.__proto__ || Object.getPrototypeOf(Welcome)).apply(this, arguments));
        }

        _createClass(Welcome, [{
            key: 'render',
            value: function render() {
                return _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        'span',
                        { style: { fontSize: 1.5 + "em" } },
                        'Ati semnalat o problema?'
                    ),
                    _react2.default.createElement(_TopActionsComponent2.default, { changeAppMode: this.props.changeAppMode })
                );
            }
        }]);

        return Welcome;
    }(_react2.default.Component);

    exports.default = Welcome;
});