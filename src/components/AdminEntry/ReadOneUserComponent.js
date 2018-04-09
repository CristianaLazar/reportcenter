//imports
import React from 'react'
import $ from 'jquery'

// ReadOneUserComponent component that displays all the details of a certain user
var ReadOneUserComponent = React.createClass({

    getInitialState: function () {
        return {
            id: 0,
            username: '',
            email: '',
            name: 0,
            cnp: '',
            serie:'',
            number:'',
            workplace_info:'',
        };
    },

    componentDidMount: function () {
        var memberId = localStorage.getItem("memberId");

        //request the data from the server
        this.serverRequestProd = $.post("api/read_one_unverified_user.php",
            {member_id: memberId},
            function (user) {
                var u = JSON.parse(user)[0];
                this.setState({id: u.id});
                this.setState({username: u.username});
                this.setState({email: u.email});
                this.setState({name: u.name});
                this.setState({cnp: u.cnp});
                this.setState({serie: u.serie});
                this.setState({number: u.number});
                this.setState({workplace_info: u.workplace_info});
            }.bind(this));
    },

    componentWillUnmount: function () {
        this.serverRequestProd.abort();
    },


    render: function () {
        return (
            <div>
                <p>Nume de utilizator: {this.state.username}</p>
                <p>Email: {this.state.email}</p>
                <p>Nume complet: {this.state.name}</p>
                <p>CNP {this.state.cnp}</p>
                <p>Serie: {this.state.serie}</p>
                <p>Numar: {this.state.number}</p>
                <p>Loc de munca: {this.state.workplace_info}</p>
                <div style={{textAlign: 'center'}}>
                    <span >
                        <a className="btn btn-danger"
                           onClick={() => this.props.changeAppMode('verify', this.props.productId)}>Verifica utilizatorul
                        </a>
                    </span>
                </div>
            </div>
        );
    }
});

//make sure to export the component
export default ReadOneUserComponent