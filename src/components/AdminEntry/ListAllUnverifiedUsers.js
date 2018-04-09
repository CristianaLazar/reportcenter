//imports
import React from 'react'
import $ from 'jquery'
import UsersTable from './UsersTable'

// ListAllUnverifiedUsers Component responsible for rendering the whole page where we can verify members
var ListAllUnverifiedUsers = React.createClass({
    getInitialState: function () {
        return {
            users: [],
            currentMode: 'readUsers',
            memberId: null
        };
    },

    // fetch all the data from the server

    componentDidMount: function () {
        this.serverRequest = $.get("api/read_unverified_users.php", function (users) {
            this.setState({
                users: JSON.parse(users)
            });
        }.bind(this));
    },

    componentWillUnmount: function () {
        this.serverRequest.abort();
    },

    changeAppMode: function (newMode, memberId) {
        this.setState({currentMode: newMode});

        if (memberId !== undefined) {
            this.setState({memberId: memberId});
        }
        if (typeof(Storage) !== "undefined") {
            localStorage.setItem("memberId", memberId);
            localStorage.setItem("currentMode", newMode)
        } else {
            alert("Please use a browser that supports LocalStorage.");
        }

    },

    render: function () {

        // list of users
        var filteredUsers = this.state.users;
        $('.page-header h1').text('Read Users');

        return (
            <div>
                <div>
                    <div className="list" style={{fontFamily:'Roboto'}}>Te aflii pe pagina: Admin Panel</div>

                    <UsersTable
                        users={filteredUsers}
                        changeAppMode={this.changeAppMode}/>
                </div>
            </div>
        );
    }
});

//make sure to export the component
export default ListAllUnverifiedUsers