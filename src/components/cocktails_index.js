import React from 'react';
import {connect} from 'react-redux';
import {updateCurrentCocktail} from '../actions'

class CocktailsIndex  extends React.Component {

  handleClick(cocktail_id){
    console.log(cocktail_id)
    this.props.updateCurrentCocktail(cocktail_id)
  }

render(){
  return (
    <div>
      <div className='col-md-4'>
        <ul>
          {this.props.cocktails.map((cocktail) => {
            return (<li key={cocktail.id}>
              <a onClick={this.handleClick.bind(this, cocktail.id)}>
                {cocktail.name}
              </a>
            </li>)
          })}
        </ul>
      </div>
      <div className='col-md-8'>
        {this.props.children}
      </div>
    </div>
  )}
}

function mapStateToProps(state){
  return {
    cocktails: state.cocktails
  }
}

function mapDispatchToProps(dispatch){
  return{
    updateCurrentCocktail: function(cocktail_id){
      let action = updateCurrentCocktail(cocktail_id)
      dispatch(action)
    }
  }
}

const componentCreator = connect(mapStateToProps, mapDispatchToProps)

export default componentCreator(CocktailsIndex);
