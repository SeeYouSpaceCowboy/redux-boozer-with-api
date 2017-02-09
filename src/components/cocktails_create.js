import React from 'react'
import {connect} from 'react-redux'
import {createCocktail} from '../actions'


class CocktailsCreate extends React.Component{
constructor(){
  super()
  this.state = {
    name: "",
    description: "",
    instructions: "",
    proportions: []
  }


this.handleChange = this.handleChange.bind(this)
this.handleSubmit = this.handleSubmit.bind(this)
this.handleProportionChange = this.handleProportionChange.bind(this)
this.appendProportionInput = this.appendProportionInput.bind(this)
}

handleChange(event){
  this.setState({[event.target.id]: event.target.value})

}

handleSubmit(event){
  event.preventDefault()
  this.props.createCocktail(this.state)
  this.setState({
    name: "",
    description: "",
    instructions: "",
    proportions: []
  })
}

handleProportionChange(event){
  const parentId = event.target.parentElement.id
  const attribute = event.target.id
  const array = this.state.proportions

  array[parentId-1][attribute] = event.target.value
  this.setState({proportions: array})
  console.log(this.state)
}

appendProportionInput(event){
  event.preventDefault()
  this.setState({proportions: [...this.state.proportions, {id: this.state.proportions.length+1, amount: "", ingredient_name: ""}]})
}

  render(){
    return(
      <div>
        <h2>Create Cocktail</h2>
        <form>

          <label for='name'> Cocktail Name: </label><br/>
          <input id='name' type='text' value={this.state.name} onChange={this.handleChange}/><br/>

          <label for='description'> Cocktail Description: </label><br/>
          <textarea id='description' value={this.state.description} onChange={this.handleChange}/><br/>

          <label for='instructions'> Cocktail Instructions: </label><br/>
          <textarea id='instructions' value={this.state.instructions} onChange={this.handleChange}/><br/>

          <label for='proportions'> Cocktail Proportions: </label><br/>

          <ul>{this.state.proportions.map(function(proportion){
            return <li id={proportion.id} key={proportion.id}>
            <input id='amount' onChange={this.handleProportionChange} type='text'/>
            <input id='ingredient_name' type='text' onChange={this.handleProportionChange}/> </li>
          }.bind(this))}
          </ul>
          <button onClick={this.appendProportionInput}>Add Proportion</button>


          <input type='submit' value='Submit' onClick={this.handleSubmit}/>

        </form>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch){
  return {createCocktail: function (cocktail){
    let action = createCocktail(cocktail)
    dispatch (action)
  }}
}


export default connect(null, mapDispatchToProps)(CocktailsCreate)
