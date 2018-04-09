//imports
import React from 'react'
import ProductRow from './ProductRow'

// ProductsTable Component that renders all the ProductRows ( reports )
var ProductsTable = React.createClass({
    render: function () {

        var rows = this.props.products
            .map(function (product, i) {
                return (
                    <ProductRow
                        key={i}
                        product={product}
                        changeAppMode={this.props.changeAppMode}
                    />
                );
            }.bind(this));

        return (
            !rows.length
                ? <div className='alert alert-danger'>Nu exista nicio reclamatie in acest moment.</div>
                :
                <div>
                    {rows}
                </div>
        );
    }
});

//make sure to export the component
export default ProductsTable