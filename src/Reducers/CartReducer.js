/*
{
    movies: [],
    sidebarIsOpen: true or false
}
 */
function cartReducer(state, action) {
  switch (action.type) {
    case "ADD": 
      return {...state, movies:[...state.movies, action.payload]};
    case "REMOVE":
      return {
        ...state,
        movies: state.movies.filter((movie) => movie.id !== action.id)
      };
      case 'OPENSIDEBAR':
        return {...state,sidebarIsOpen :true};
      case 'CLOSESIDEBAR':
          return {...state,sidebarIsOpen :false};
    default:
      return state;
  }
}
export default cartReducer