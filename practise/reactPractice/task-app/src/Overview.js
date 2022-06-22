import React from 'react'

class Editable extends React.Component {
    constructor(props){
        super(props)
        this.changeMode = this.changeMode.bind(this)
        this.state = {
            actual : <li onClick={this.changeMode} key={this.props.chosenKey}>{this.props.content}</li>,
            mode: 'list',
            reserve : <input onChange={this.changeMode} key={this.props.chosenKey} placeholder={this.props.content} />
            
        }
        
    }

    changeMode(){
        if(this.state.mode === 'list'){
            this.setState( () => {
                return {
                    actual : <li onClick={this.changeMode} key={this.props.chosenKey}>{this.props.content}</li>,
                    mode : 'inp',
                    reserve : <input onChange={this.changeMode} key={this.props.chosenKey} placeholder={this.props.content}/>
                }
            })
            return
        }
        this.setState( () => {
            return {
                actual :  <input onChange={this.changeMode} key={this.props.chosenKey} placeholder={this.props.content}/>,
                mode :  'list',
                reserve : <li onClick={this.changeMode} key={this.props.chosenKey}>{this.props.content}</li>
            
            }
        })

    }

    render(){
        return this.state.actual
    }
}

 
class Tasks extends React.Component {
    constructor(props){
        super(props)
        this.convertToListItems = this.convertToListItems.bind(this)

        }
    

    convertToListItems(itemsArray){
        return itemsArray.map(item => <Editable chosenKey={itemsArray.indexOf(item)} content={item}/>)

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