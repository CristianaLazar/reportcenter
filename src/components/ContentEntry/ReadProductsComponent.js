//imports
import React from 'react'
import $ from 'jquery'
import ProductsTable from './ProductsTable'

// ReadProducts Component responsible for rendering the whole page where we can read the reports
var ReadProductsComponent = React.createClass({
    getInitialState: function () {
        return {
            products: [],
            currentMode: 'readOne',
            productId: null
        };
    },

    // fetch all the data from the server

    componentDidMount: function () {
        this.serverRequest = $.get("api/read_all_products.php", function (products) {
            this.setState({
                products: JSON.parse(products)
            });
        }.bind(this));
    },

    componentWillUnmount: function () {
        this.serverRequest.abort();
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

        // list of products
        var filteredProducts = this.state.products;
        $('.page-header h1').text('Read Products');

        return (
            <div>
                <div>
                    <div className="list" style={{fontFamily:'Roboto'}}>Te aflii pe pagina: Panou de control reclamatii.</div>

                    <ProductsTable
                        products={filteredProducts}
                        changeAppMode={this.changeAppMode}/>
                </div>
            </div>
        );
    }
});

export default ReadProductsComponent