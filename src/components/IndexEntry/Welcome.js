//imports
import React from 'react'
import TopActionsComponent from './TopActionsComponent'

// Welcome Component that renders the middle section of the homepage
class Welcome extends React.Component{
    render(){
        return(
            <div>
                <span style={{fontSize: 1.5+"em"}}>Ati semnalat o problema?</span>
                <TopActionsComponent changeAppMode={this.props.changeAppMode}/>
            </div>
        )
    }
}

//make sure to export the component
export default Welcome