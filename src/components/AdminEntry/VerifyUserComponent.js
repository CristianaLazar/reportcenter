//imports
import React from 'react'
import $ from 'jquery'

//VerifyUserComponent that verifies an user
var VerifyUserComponent = React.createClass({

    componentDidMount: function () {
        $('.page-header h1').text('Verify User');
    },

    // function we call when we press the "Da" button to verify the user
    onDelete: function (e) {
        $.post("api/verify_user.php",
            {del_ids: this.props.memberId},
        );
    },

    render: function () {

        return (
            <div>
                <p style={{textAlign: 'center'}}>Esti sigur ca vrei sa verific utilizatorul {this.props.username} ?</p>
                <p style={{textAlign: 'center'}}>Acesta va avea acces la panoul de reclamatii!!</p>
                <div style={{display: 'flex', textAlign: 'center', justifyContent: 'space-around'}}>
                    <div style={{}}>
                        <a href="/admin.php" onClick={() => this.props.changeAppMode('readOne', this.props.productId)}>
                            <button onClick={this.onDelete}
                                    className='btn btn-danger m-r-1em'>Da
                            </button>
                        </a>
                    </div>
                    <div style={{}}>
                        <a onClick={() => this.props.changeAppMode('readOne', this.props.productId)}>
                            <button
                                className='btn btn-primary'>Nu
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
});

//make sure to export the component
export default VerifyUserComponent