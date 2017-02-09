export default function create_cocktail_reducer(state=[], action) {
  switch ( action.type ) {
    case 'CREATE_COCKTAIL':
      return [...state, action.payload];
    default:
      return state;
  }
};
