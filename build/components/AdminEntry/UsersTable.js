(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['exports', 'react', './UserRow'], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require('react'), require('./UserRow'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.react, global.UserRow);
        global.UsersTable = mod.exports;
    }
})(this, function (exports, _react, _UserRow) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _react2 = _interopRequireDefault(_react);

    var _UserRow2 = _interopRequireDefault(_UserRow);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    // UsersTable Component that renders all the UserRows
    //imports
    var UsersTable = _react2.default.createClass({
        displayName: 'UsersTable',

        render: function render() {

            var rows = this.props.users.map(function (user, i) {
                return _react2.default.createElement(_UserRow2.default, {
                    key: i,
                    user: user,
                    changeAppMode: this.props.changeAppMode
                });
            }.bind(this));

            return !rows.length ? _react2.default.createElement(
                'div',
                { className: 'alert alert-danger' },
                'Nu exista niciun membru ca nu a fost deja verificat.'
            ) : _react2.default.createElement(
                'div',
                null,
                rows
            );
        }
    });

    //make sure to export the component
    exports.default = UsersTable;
});