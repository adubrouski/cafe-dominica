import produce from 'immer';

const initState = {
  products: [],
  isLoaded: false,
  allCategories: {
    doners: ['С курицей', 'С говядиной', 'С морепродуктами', 'Вегетарианские', 'Острые'],
    pizzas: ['Мясные', 'Гриль', 'Вегетарианские'],
    hotdishes: ['Супы', 'Паста', 'Мясо', 'Драники'],
    drinks: ['Напитки', 'Кофе', 'Соки'],
    salads: ['Мясные', 'Вегетарианские'],
  },
};

const doners = (state = initState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case 'SET_PRODUCTS':
        draft.products = action.payload;
        draft.isLoaded = true;
        break;
      case 'SET_LOAD_STATUS':
        draft.isLoaded = action.payload;
        break;
      default:
    }
  });
};

export default doners;
