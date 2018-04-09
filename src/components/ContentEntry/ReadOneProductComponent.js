//imports
import React from 'react'
import $ from 'jquery'

// ReadOneProduct Component responsible for rendering the view in which we can read the details of a single report
var ReadOneProductComponent = React.createClass({

    getInitialState: function () {
        return {
            id: 0,
            name: '',
            description: '',
            offenseid: 0,
            date: '',
            adress:'',
            cnp:'',
            serie:'',
            number:'',
            category_name:'',
        };
    },

    componentDidMount: function () {
        var productId = localStorage.getItem("productId");

        //request the data from the server
        this.serverRequestProd = $.post("api/read_one_product.php",
            {prod_id: productId},
            function (product) {
                var p = JSON.parse(product)[0];
                this.setState({category_name: p.category_name});
                this.setState({id: p.id});
                this.setState({name: p.name});
                this.setState({description: p.description});
                this.setState({offenseid: p.offenseid});
                this.setState({date: p.date});
                this.setState({adress: p.adress});
                this.setState({cnp: p.cnp});
                this.setState({serie: p.serie});
                this.setState({number: p.number});
            }.bind(this));
    },

    componentWillUnmount: function () {
        this.serverRequestProd.abort();
    },


    render: function () {
        return (
            <div>
                <p>Titlu: {this.state.name}</p>
                <p style={{maxWidth: 20+'em', wordWrap:'break-word'}}>Descriere: {this.state.description}</p>
                <p>Data sesizarii: {this.state.date}</p>
                <p>Adresa: {this.state.adress}</p>
                <p>CNP: {this.state.cnp}</p>
                <p>Serie: {this.state.serie}</p>
                <p>Numar: {this.state.number}</p>
                <div style={{textAlign: 'center'}}>
                    <span >
                        <a className="btn btn-danger"
                            onClick={() => this.props.changeAppMode('delete', this.props.productId)}>Marcheaza ca rezolvat
                        </a>
                    </span>
                </div>
            </div>
        );
    }
});

//make sure to export the component
export default ReadOneProductComponent