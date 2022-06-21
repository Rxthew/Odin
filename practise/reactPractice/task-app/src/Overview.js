import React from 'react'

class Tasks extends React.Component {
    constructor(props){
        super(props)
        this.convertToListItems = this.convertToListItems.bind(this)
        this.makeEditable = this.makeEditable.bind(this)
    }

    makeEditable(event){
        
    }

    convertToListItems(itemsArray){
        return itemsArray.map(item => <li onClick={this.makeEditable} key={itemsArray.indexOf(item)}>{item}</li>)

    }
    render(){
        return <div>
            <ul>
                {this.convertToListItems(this.props.items)}
            </ul>
        </div>
    }
}

export default Tasks