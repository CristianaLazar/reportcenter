//imports
import React from 'react'
import UserRow from './UserRow'

// UsersTable Component that renders all the UserRows
var UsersTable = React.createClass({
    render: function () {

        var rows = this.props.users
            .map(function (user, i) {
                return (
                    <UserRow
                        key={i}
                        user={user}
                        changeAppMode={this.props.changeAppMode}
                    />
                );
            }.bind(this));

        return (
            !rows.length
                ? <div className='alert alert-danger'>Nu exista niciun membru ca nu a fost deja verificat.</div>
                :
                <div>
                    {rows}
                </div>
        );
    }
});

//make sure to export the component
export default UsersTable