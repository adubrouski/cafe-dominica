import produce from 'immer';

const initState = {
  category: null,
  criterion: 'rating',
};

const filters = (state = initState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case 'SET_CATEGORY':
        draft.category = action.payload;
        break;
      case 'SET_CRITERION':
        draft.criterion = action.payload;
        break;
      case 'RESET_FILTERS':
        draft.category = null;
        draft.criterion = 'rating';
        break;
      default:
    }
  });
};

export default filters;
