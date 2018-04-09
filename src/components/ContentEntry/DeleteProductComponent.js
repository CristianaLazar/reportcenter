//imports
import React from 'react'
import $ from 'jquery'

//Delete Component which is the visual for setting visibility to 0 in reports table
var DeleteProductComponent = React.createClass({

    componentDidMount: function () {
        $('.page-header h1').text('Delete product');
    },

    // function we call when we press the "Da" button to set visibility to 0
    onDelete: function (e) {
        $.post("api/delete_product.php",
            {del_ids: this.props.productId},
        );
    },

    render: function () {

        return (
            <div>
                <p style={{textAlign: 'center'}}>Esti sigur ca vrei sa marchezi reclamatia ca fiind preluata/rezolvata?</p>
                <p style={{textAlign: 'center'}}>Ea nu va mai putea fii vizibila!</p>
                <div style={{display: 'flex', textAlign: 'center', justifyContent: 'space-around'}}>
                <div style={{}}>
                    <a href="/content.php" onClick={() => this.props.changeAppMode('readOne', this.props.productId)}>
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
export default DeleteProductComponent