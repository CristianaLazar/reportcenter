// imports
import React from 'react'
import Modal from 'react-modal'
import MainApp from './MainApp'

//custom styles for the modal ( popup )
const customStyles = {
    content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)'
    }
};

// ProductRow which renders a single report and when clicked on will render a modal ( popup )
class ProductRow extends React.Component{

    constructor() {
        super();

        this.state = {
            modalIsOpen: false,
        };

        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    openModal() {
        this.setState({modalIsOpen: true});
    }

    afterOpenModal() {
        // references are now sync'd and can be accessed.
    }

    closeModal() {
        this.setState({modalIsOpen: false});
    }

    render() {
        return (
            <div className="list" >
                <a onClick={() => this.props.changeAppMode('readOne', this.props.product.id) } style={{textDecoration: 'none'}}>
                        <div className="categorie">{this.props.product.name}</div>
                        <div style={{fontSize: 0.7+'em', fontFamily: 'Roboto', color:"#000000"}}>{this.props.product.date}</div>
                        <div>
                        <p style={{wordWrap: 'break-word', color:"#000000"}}>{this.props.product.description}</p>
                        </div>
                    <span onClick={this.openModal} style={{textDecoration: 'none'}}><div className="btn btn-primary btn-large" style={{fontFamily:'Roboto'}} >Arata mai mult</div></span>
                    <Modal
                        isOpen={this.state.modalIsOpen}
                        onAfterOpen={this.afterOpenModal}
                        onRequestClose={this.closeModal}
                        style={customStyles}
                        contentLabel={this.props.product.name}
                        >
                        <MainApp productId={this.props.product.id}/>
                    </Modal>
                </a>
            </div>
        );
    }
}

//make sure to export the component
export default ProductRow