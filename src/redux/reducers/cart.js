import produce from 'immer';

const initState = {
  items: [],
  totalPrice: 0,
  totalCount: 0,
};

const cart = (state = initState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case 'ADD_PRODUCT_TO_CART':
        const product = {
          ...action.payload,
          uniqId: +Math.random().toFixed(3),
        };
        draft.items.push(product);
        break;
      case 'REMOVE_PRODUCT':
        draft.items.forEach((item, index) => {
          if (item.uniqId === action.payload.uniqId) {
            draft.items.splice(index, 1);
          }
        });
        break;
      case 'CLEAR_CART':
        draft.items = [];
        break;
      default:
    }

    draft.totalCount = draft.items.length;
    draft.totalPrice = draft.items.reduce((sum, obj) => obj.price + sum, 0, -1).toFixed(1);
  });
};

export default cart;
