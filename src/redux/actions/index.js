export const searchJobs = query => ({
    type: 'SEARCH_JOBS',
    payload: query
  });
  
  export const fetchCompanyJobs = companyName => ({
    type: 'FETCH_COMPANY_JOBS',
    payload: companyName
  });
  
  export const setSearchResults = results => ({
    type: 'SET_SEARCH_RESULTS',
    payload: results
  });
  
  export const setCompanyJobs = jobs => ({
    type: 'SET_COMPANY_JOBS',
    payload: jobs
  });
  
  export const setLoading = isLoading => ({
    type: 'SET_LOADING',
    payload: isLoading
  });