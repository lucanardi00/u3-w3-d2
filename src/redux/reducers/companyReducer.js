const initialState = {
    companyJobs: []
  };
  
  const companyReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_COMPANY_JOBS':
        return { ...state, companyJobs: action.payload };
      default:
        return state;
    }
  };
  
  export default companyReducer;