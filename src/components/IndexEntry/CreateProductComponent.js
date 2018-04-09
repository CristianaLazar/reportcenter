//imports
import React from 'react'
import {Link} from 'react-router'
import $ from 'jquery'

// CreateProduct Component responsible for adding reports
var CreateProductComponent = React.createClass({
    getInitialState: function () {
        return {
            categories: [],
            selectedCategoryId: 100,
            name: '',
            description: '',
            offenseid:'',
            date: '',
            adress:'',
            cnp:'',
            serie:'',
            number:'',
            urgency:'',
            successCreation: null,
        };
    },

    //fetch all delinquency categories

    componentDidMount: function () {
        this.serverRequest = $.get("api/read_all_categories.php", function (categories) {
            this.setState({
                categories: JSON.parse(categories)
            });
        }.bind(this));

        $('.page-header h1').text('Create product');
    },
    componentWillUnmount: function () {
        this.serverRequest.abort();
    },
    // handle category change
    onCategoryChange: function (e) {
        this.setState({selectedCategoryId: e.target.value});
        this.setState({offenseid: e.target.value});
    },
    //handle name change
    onNameChange: function (e) {
        this.setState({name: e.target.value});
    },
    //handle description change
    onDescriptionChange: function (e) {
        this.setState({description: e.target.value});
    },
    //handle date change
    onDateChange: function (e) {
        this.setState({date: e.target.value});
    },
    //handle adress change
    onAdressChange: function (e) {
        this.setState({adress: e.target.value});
    },
    //handle cnp change
    onCNPChange: function (e) {
        this.setState({cnp: e.target.value});
    },
    //handle serie change
    onSerieChange: function (e) {
        this.setState({serie: e.target.value});
    },
    //handle number change
    onNumberChange: function (e) {
        this.setState({number: e.target.value});
    },
    //checks if the delinquency at matter is urgent or not
    urgencyCheck: function () {
        if(this.state.selectedCategoryId <= 6)
        {return true;}
        else
        {return false;}
    },

    onSave: function (e) {
        $.post("api/create_product.php", {
                name: this.state.name,
                description: this.state.description,
                date: this.state.date,
                offenseid: this.state.selectedCategoryId,
                adress: this.state.adress,
                cnp: this.state.cnp,
                serie: this.state.serie,
                number: this.state.number,
            },
            function (res) {
                this.setState({successCreation: res});
            }.bind(this)
        );
        e.preventDefault();
    },
    render: function () {

        // make categories as option for the select tag.
        var categoriesOptions = this.state.categories.map(function (category) {
            return (
                <option key={category.id} value={category.id}>{category.name}</option>
            );
        });

        if (this.urgencyCheck()==false)
        {return (
            <div>
                {

                    this.state.successCreation == "true" ?
                        <div className='alert alert-success'>
                            Plangere adaugata. Va multumim pentru contributia dumneavoastra la linistea societatii.
                        </div>
                        : null
                }

                {

                    this.state.successCreation == "false" ?
                        <div className='alert alert-danger'>
                            Ne pare rau, ceva nu a mers bine.Te rugam sa incerci din nou.
                        </div>
                        : null
                }

                <form onSubmit={this.onSave}>
                    <table className='table'>
                        <tbody>
                        <tr>
                            <td>Numeste delicventa intalnita</td>
                            <td>
                                <input
                                    type='text'
                                    className='form-control'
                                    value={this.state.name}
                                    required
                                    onChange={this.onNameChange}/>
                            </td>
                        </tr>

                        <tr>
                            <td>Descrie pe scurt cele intamplate</td>
                            <td>
                        <textarea
                            type='text'
                            className='form-control'
                            required
                            cols="50"
                            rows="5"
                            value={this.state.description}
                            onChange={this.onDescriptionChange}>
                        </textarea>
                            </td>
                        </tr>

                        <tr>
                            <td>Te rugam sa alegi o categorie din care face parte delicventa</td>
                            <td>
                                <select
                                    onChange={this.onCategoryChange}
                                    className='form-control'
                                    value={this.state.selectedCategoryId}>
                                    <option value="-1">Alege...</option>
                                    {categoriesOptions}
                                </select>
                            </td>
                        </tr>

                        <tr>
                            <td>Data la care ai observat delicventa</td>
                            <td>
                                <input
                                    className='form-control'
                                    value={this.state.date}
                                    required
                                    onChange={this.onDateChange}/>
                            </td>
                        </tr>

                        <tr>
                            <td>Locul in care ati observat delicventa</td>
                            <td>
                                <input
                                    type="text"
                                    className='form-control'
                                    value={this.state.adress}
                                    required
                                    onChange={this.onAdressChange}
                                />
                            </td>
                        </tr>

                        <tr>
                            <td>CNP-ul dumneavoastra</td>
                            <td>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={this.state.cnp}
                                    required
                                    onChange={this.onCNPChange}/>
                            </td>
                        </tr>

                        <tr>
                            <td>Seria buletinului dumneavoastra</td>
                            <td>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={this.state.serie}
                                    required
                                    onChange={this.onSerieChange}/>
                            </td>
                        </tr>

                        <tr>
                            <td>Numarul buletinului dumneavoastra</td>
                            <td>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={this.state.number}
                                    required
                                    onChange={this.onNumberChange}/>
                            </td>
                        </tr>

                        <tr>
                            <td></td>
                            <td>
                                <a href="index.php"
                                      className='btn btn-primary'
                                      onClick={this.onSave}>Adaugati plangerea
                                </a>
                                <a href="index.php"
                                      className="btn btn-danger"
                                      onClick={() => this.props.changeAppMode('readOne', this.props.productId)}
                                >
                                    Anuleaza
                                </a>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </form>
            </div>
        );}
        else
        {
            return (
                <div style={{fontSize: 3+'em', textAlign: "center"}}>
                    Te rugam sa suni imediat la 112. Situatia precizata necesita atentie imediat.
                </div>
            );
        }
    }
});

//make sure to export the component
export default CreateProductComponent