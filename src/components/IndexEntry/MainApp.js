//imports
import React from 'react'
import CreateProductComponent from './CreateProductComponent'
import Welcome from './Welcome'

// MainApp Component responsible for switching visual between index and create report ( Welcome.js and CreateProductComponent.js )
var MainApp = React.createClass({
    getInitialState: function () {
        return {
            currentMode: 'index',
        }
    },

    changeAppMode: function (newMode, productId) {
        this.setState({currentMode: newMode});

        if (productId !== undefined) {
            this.setState({productId: productId});
        }
        if (typeof(Storage) !== "undefined") {
            localStorage.setItem("productId", productId);
            localStorage.setItem("currentMode", newMode)
        } else {
            alert("Please use a browser that supports LocalStorage.");
        }

    },

    render: function () {
        var modeComponent =
            <Welcome
                changeAppMode={this.changeAppMode} />;

        switch (this.state.currentMode) {
            case 'index':
                break;
            case 'create':
                modeComponent = <CreateProductComponent changeAppMode={this.changeAppMode}/>;
                break;
            default:
                break;
        }

        return modeComponent;
    }
});

//make sure to export the component
export default MainApp