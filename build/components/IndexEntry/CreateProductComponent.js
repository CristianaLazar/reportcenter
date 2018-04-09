(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['exports', 'react', 'react-router', 'jquery'], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require('react'), require('react-router'), require('jquery'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.react, global.reactRouter, global.jquery);
        global.CreateProductComponent = mod.exports;
    }
})(this, function (exports, _react, _reactRouter, _jquery) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _react2 = _interopRequireDefault(_react);

    var _jquery2 = _interopRequireDefault(_jquery);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    // CreateProduct Component responsible for adding reports
    var CreateProductComponent = _react2.default.createClass({
        displayName: 'CreateProductComponent',

        getInitialState: function getInitialState() {
            return {
                categories: [],
                selectedCategoryId: 100,
                name: '',
                description: '',
                offenseid: '',
                date: '',
                adress: '',
                cnp: '',
                serie: '',
                number: '',
                urgency: '',
                successCreation: null
            };
        },

        //fetch all delinquency categories

        componentDidMount: function componentDidMount() {
            this.serverRequest = _jquery2.default.get("api/read_all_categories.php", function (categories) {
                this.setState({
                    categories: JSON.parse(categories)
                });
            }.bind(this));

            (0, _jquery2.default)('.page-header h1').text('Create product');
        },
        componentWillUnmount: function componentWillUnmount() {
            this.serverRequest.abort();
        },
        // handle category change
        onCategoryChange: function onCategoryChange(e) {
            this.setState({ selectedCategoryId: e.target.value });
            this.setState({ offenseid: e.target.value });
        },
        //handle name change
        onNameChange: function onNameChange(e) {
            this.setState({ name: e.target.value });
        },
        //handle description change
        onDescriptionChange: function onDescriptionChange(e) {
            this.setState({ description: e.target.value });
        },
        //handle date change
        onDateChange: function onDateChange(e) {
            this.setState({ date: e.target.value });
        },
        //handle adress change
        onAdressChange: function onAdressChange(e) {
            this.setState({ adress: e.target.value });
        },
        //handle cnp change
        onCNPChange: function onCNPChange(e) {
            this.setState({ cnp: e.target.value });
        },
        //handle serie change
        onSerieChange: function onSerieChange(e) {
            this.setState({ serie: e.target.value });
        },
        //handle number change
        onNumberChange: function onNumberChange(e) {
            this.setState({ number: e.target.value });
        },
        //checks if the delinquency at matter is urgent or not
        urgencyCheck: function urgencyCheck() {
            if (this.state.selectedCategoryId <= 6) {
                return true;
            } else {
                return false;
            }
        },

        onSave: function onSave(e) {
            _jquery2.default.post("api/create_product.php", {
                name: this.state.name,
                description: this.state.description,
                date: this.state.date,
                offenseid: this.state.selectedCategoryId,
                adress: this.state.adress,
                cnp: this.state.cnp,
                serie: this.state.serie,
                number: this.state.number
            }, function (res) {
                this.setState({ successCreation: res });
            }.bind(this));
            e.preventDefault();
        },
        render: function render() {
            var _this = this;

            // make categories as option for the select tag.
            var categoriesOptions = this.state.categories.map(function (category) {
                return _react2.default.createElement(
                    'option',
                    { key: category.id, value: category.id },
                    category.name
                );
            });

            if (this.urgencyCheck() == false) {
                return _react2.default.createElement(
                    'div',
                    null,
                    this.state.successCreation == "true" ? _react2.default.createElement(
                        'div',
                        { className: 'alert alert-success' },
                        'Plangere adaugata. Va multumim pentru contributia dumneavoastra la linistea societatii.'
                    ) : null,
                    this.state.successCreation == "false" ? _react2.default.createElement(
                        'div',
                        { className: 'alert alert-danger' },
                        'Ne pare rau, ceva nu a mers bine.Te rugam sa incerci din nou.'
                    ) : null,
                    _react2.default.createElement(
                        'form',
                        { onSubmit: this.onSave },
                        _react2.default.createElement(
                            'table',
                            { className: 'table' },
                            _react2.default.createElement(
                                'tbody',
                                null,
                                _react2.default.createElement(
                                    'tr',
                                    null,
                                    _react2.default.createElement(
                                        'td',
                                        null,
                                        'Numeste delicventa intalnita'
                                    ),
                                    _react2.default.createElement(
                                        'td',
                                        null,
                                        _react2.default.createElement('input', {
                                            type: 'text',
                                            className: 'form-control',
                                            value: this.state.name,
                                            required: true,
                                            onChange: this.onNameChange })
                                    )
                                ),
                                _react2.default.createElement(
                                    'tr',
                                    null,
                                    _react2.default.createElement(
                                        'td',
                                        null,
                                        'Descrie pe scurt cele intamplate'
                                    ),
                                    _react2.default.createElement(
                                        'td',
                                        null,
                                        _react2.default.createElement('textarea', {
                                            type: 'text',
                                            className: 'form-control',
                                            required: true,
                                            cols: '50',
                                            rows: '5',
                                            value: this.state.description,
                                            onChange: this.onDescriptionChange })
                                    )
                                ),
                                _react2.default.createElement(
                                    'tr',
                                    null,
                                    _react2.default.createElement(
                                        'td',
                                        null,
                                        'Te rugam sa alegi o categorie din care face parte delicventa'
                                    ),
                                    _react2.default.createElement(
                                        'td',
                                        null,
                                        _react2.default.createElement(
                                            'select',
                                            {
                                                onChange: this.onCategoryChange,
                                                className: 'form-control',
                                                value: this.state.selectedCategoryId },
                                            _react2.default.createElement(
                                                'option',
                                                { value: '-1' },
                                                'Alege...'
                                            ),
                                            categoriesOptions
                                        )
                                    )
                                ),
                                _react2.default.createElement(
                                    'tr',
                                    null,
                                    _react2.default.createElement(
                                        'td',
                                        null,
                                        'Data la care ai observat delicventa'
                                    ),
                                    _react2.default.createElement(
                                        'td',
                                        null,
                                        _react2.default.createElement('input', {
                                            className: 'form-control',
                                            value: this.state.date,
                                            required: true,
                                            onChange: this.onDateChange })
                                    )
                                ),
                                _react2.default.createElement(
                                    'tr',
                                    null,
                                    _react2.default.createElement(
                                        'td',
                                        null,
                                        'Locul in care ati observat delicventa'
                                    ),
                                    _react2.default.createElement(
                                        'td',
                                        null,
                                        _react2.default.createElement('input', {
                                            type: 'text',
                                            className: 'form-control',
                                            value: this.state.adress,
                                            required: true,
                                            onChange: this.onAdressChange
                                        })
                                    )
                                ),
                                _react2.default.createElement(
                                    'tr',
                                    null,
                                    _react2.default.createElement(
                                        'td',
                                        null,
                                        'CNP-ul dumneavoastra'
                                    ),
                                    _react2.default.createElement(
                                        'td',
                                        null,
                                        _react2.default.createElement('input', {
                                            type: 'text',
                                            className: 'form-control',
                                            value: this.state.cnp,
                                            required: true,
                                            onChange: this.onCNPChange })
                                    )
                                ),
                                _react2.default.createElement(
                                    'tr',
                                    null,
                                    _react2.default.createElement(
                                        'td',
                                        null,
                                        'Seria buletinului dumneavoastra'
                                    ),
                                    _react2.default.createElement(
                                        'td',
                                        null,
                                        _react2.default.createElement('input', {
                                            type: 'text',
                                            className: 'form-control',
                                            value: this.state.serie,
                                            required: true,
                                            onChange: this.onSerieChange })
                                    )
                                ),
                                _react2.default.createElement(
                                    'tr',
                                    null,
                                    _react2.default.createElement(
                                        'td',
                                        null,
                                        'Numarul buletinului dumneavoastra'
                                    ),
                                    _react2.default.createElement(
                                        'td',
                                        null,
                                        _react2.default.createElement('input', {
                                            type: 'text',
                                            className: 'form-control',
                                            value: this.state.number,
                                            required: true,
                                            onChange: this.onNumberChange })
                                    )
                                ),
                                _react2.default.createElement(
                                    'tr',
                                    null,
                                    _react2.default.createElement('td', null),
                                    _react2.default.createElement(
                                        'td',
                                        null,
                                        _react2.default.createElement(
                                            'a',
                                            { href: 'index.php',
                                                className: 'btn btn-primary',
                                                onClick: this.onSave },
                                            'Adaugati plangerea'
                                        ),
                                        _react2.default.createElement(
                                            'a',
                                            { href: 'index.php',
                                                className: 'btn btn-danger',
                                                onClick: function onClick() {
                                                    return _this.props.changeAppMode('readOne', _this.props.productId);
                                                }
                                            },
                                            'Anuleaza'
                                        )
                                    )
                                )
                            )
                        )
                    )
                );
            } else {
                return _react2.default.createElement(
                    'div',
                    { style: { fontSize: 3 + 'em', textAlign: "center" } },
                    'Te rugam sa suni imediat la 112. Situatia precizata necesita atentie imediat.'
                );
            }
        }
    });

    //make sure to export the component
    //imports
    exports.default = CreateProductComponent;
});