//imports
import React from 'react'
import ReadOneProductComponent from './ReadOneProductComponent'
import DeleteProductComponent from './DeleteProductComponent'

// MainApp Component responsible for switching visual between reading one report and deleting it ( updating visibility to 0 )
var MainApp = React.createClass({
    getInitialState: function () {
        return {
            currentMode: 'readOne',
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
            <ReadOneProductComponent
                changeAppMode={this.changeAppMode} productId={this.props.productId}/>;

        switch (this.state.currentMode) {
            case 'readOne':
                break;
            case 'delete':
                modeComponent =
                    <DeleteProductComponent productId={this.props.productId} changeAppMode={this.changeAppMode}/>;
                break;
            default:
                break;
        }

        return modeComponent;
    }
});

// make sure to export the component
export default MainApp