const initialState = {
    query: '',
    jobs: [],
    loading: false
  };
  
  const searchReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SEARCH_JOBS':
        return { ...state, query: action.payload };
      case 'SET_SEARCH_RESULTS':
        return { ...state, jobs: action.payload };
      case 'SET_LOADING':
        return { ...state, loading: action.payload };
      default:
        return state;
    }
  };
  
  export default searchReducer;