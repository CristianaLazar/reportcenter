(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['exports', 'react', 'jquery', './UsersTable'], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require('react'), require('jquery'), require('./UsersTable'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.react, global.jquery, global.UsersTable);
        global.ListAllUnverifiedUsers = mod.exports;
    }
})(this, function (exports, _react, _jquery, _UsersTable) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _react2 = _interopRequireDefault(_react);

    var _jquery2 = _interopRequireDefault(_jquery);

    var _UsersTable2 = _interopRequireDefault(_UsersTable);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    // ListAllUnverifiedUsers Component responsible for rendering the whole page where we can verify members
    var ListAllUnverifiedUsers = _react2.default.createClass({
        displayName: 'ListAllUnverifiedUsers',

        getInitialState: function getInitialState() {
            return {
                users: [],
                currentMode: 'readUsers',
                memberId: null
            };
        },

        // fetch all the data from the server

        componentDidMount: function componentDidMount() {
            this.serverRequest = _jquery2.default.get("api/read_unverified_users.php", function (users) {
                this.setState({
                    users: JSON.parse(users)
                });
            }.bind(this));
        },

        componentWillUnmount: function componentWillUnmount() {
            this.serverRequest.abort();
        },

        changeAppMode: function changeAppMode(newMode, memberId) {
            this.setState({ currentMode: newMode });

            if (memberId !== undefined) {
                this.setState({ memberId: memberId });
            }
            if (typeof Storage !== "undefined") {
                localStorage.setItem("memberId", memberId);
                localStorage.setItem("currentMode", newMode);
            } else {
                alert("Please use a browser that supports LocalStorage.");
            }
        },

        render: function render() {

            // list of users
            var filteredUsers = this.state.users;
            (0, _jquery2.default)('.page-header h1').text('Read Users');

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        'div',
                        { className: 'list', style: { fontFamily: 'Roboto' } },
                        'Te aflii pe pagina: Admin Panel'
                    ),
                    _react2.default.createElement(_UsersTable2.default, {
                        users: filteredUsers,
                        changeAppMode: this.changeAppMode })
                )
            );
        }
    });

    //make sure to export the component
    //imports
    exports.default = ListAllUnverifiedUsers;
});