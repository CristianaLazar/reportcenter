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

// UserRow which renders a member's details clicked on will render a modal ( popup )
class UserRow extends React.Component{

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
                <a onClick={() => this.props.changeAppMode('readOne', this.props.user.id) } style={{textDecoration: 'none'}}>
                    <div className="categorie">{this.props.user.username}</div>
                    <div style={{fontSize: 0.7+'em', fontFamily: 'Roboto', color:"#000000"}}>{this.props.user.name}</div>
                    <div>
                        <p style={{wordWrap: 'break-word', color:"#000000"}}>{this.props.user.email}</p>
                    </div>
                    <span onClick={this.openModal} style={{textDecoration: 'none'}}><div className="btn btn-primary btn-large" style={{fontFamily:'Roboto'}} >Arata datele utilizatorului</div></span>
                    <Modal
                        isOpen={this.state.modalIsOpen}
                        onAfterOpen={this.afterOpenModal}
                        onRequestClose={this.closeModal}
                        style={customStyles}
                        contentLabel={this.props.user.username}
                    >
                        <MainApp username={this.props.user.username} memberId={this.props.user.id}/>
                    </Modal>
                </a>
            </div>
        );
    }
}

//make sure to export the component
export default UserRow