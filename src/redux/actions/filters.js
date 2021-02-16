const setCategory = (payload) => ({ type: 'SET_CATEGORY', payload });

const setCriterion = (payload) => ({ type: 'SET_CRITERION', payload });

const resetFilters = () => ({ type: 'RESET_FILTERS' });

export { setCategory, setCriterion, resetFilters };
