//imports
import React from 'react'
import ReadOneUserComponent from './ReadOneUserComponent'
import VerifyUserComponent from './VerifyUserComponent'

// MainApp Component
var MainApp = React.createClass({
    getInitialState: function () {
        return {
            currentMode: 'readOne',
        }
    },

    changeAppMode: function (newMode, memberId) {
        this.setState({currentMode: newMode});
        if (typeof(Storage) !== "undefined") {
            localStorage.setItem("currentMode", newMode)
        } else {
            alert("Please use a browser that supports LocalStorage.");
        }

    },

    render: function () {
        var modeComponent =
            <ReadOneUserComponent
                changeAppMode={this.changeAppMode} userId={this.props.memberId}/>;

        switch (this.state.currentMode) {
            case 'readOne':
                break;
            case 'verify':
                modeComponent =
                    <VerifyUserComponent username={this.props.username} memberId={this.props.memberId} changeAppMode={this.changeAppMode}/>;
                break;
            default:
                break;
        }

        return modeComponent;
    }
});

// make sure to export the component
export default MainApp