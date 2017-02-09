const BASE_URL = 'http://localhost:3000/api/v1'
import axios from 'axios'

export function fetchCocktails(){
  const cocktails =axios.get(`${BASE_URL}/cocktails`).then(res => res.data)
  return {
    type: 'FETCH_COCKTAILS',
    payload: cocktails
  }
}

export function createCocktail(params){
  const cocktail = axios.post(`${BASE_URL}/cocktails`,
    params).then(response => response.data);
  return {
    type: 'CREATE_COCKTAIL',
    payload: cocktail
  }

}

export function updateCurrentCocktail(cocktail_id){
  return {
    type: 'UPDATE_CURRENT_COCKTAIL',
    payload: cocktail_id
  }
}
