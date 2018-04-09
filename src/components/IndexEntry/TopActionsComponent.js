//imports
import React from 'react'
import Modal from 'react-modal'
import CreateProductComponent from './CreateProductComponent'

// custom styles for the modal
const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};
// TopActions Component responsible for rendering the button with which we access CreateProduct Component
class TopActionsComponent extends React.Component {

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
    }

    closeModal() {
        this.setState({modalIsOpen: false});
    }

    render() {
        return (
            <div className="add">
                <span >
                <span
                   onClick={this.openModal}
                   className='btn btn-primary btn-lg'
                >Adaugati o reclamatie</span>
                </span>
                        <Modal
                            isOpen={this.state.modalIsOpen}
                            onAfterOpen={this.afterOpenModal}
                            onRequestClose={this.closeModal}
                            style={customStyles}
                            contentLabel={"Adauga o reclamatie"}
                        >
                            <CreateProductComponent />
                        </Modal>
            </div>
        )
    }
}

//make sure to export the component
export default TopActionsComponent