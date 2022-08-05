const initialState = {
  isAdd: false,
  isEdit: false,
  card: [],
  allCards: [],
  cardIndex: 0,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_IS_ADD':
      return { ...state, isAdd: action.payload };
    case 'SET_IS_EDIT':
      return { ...state, isEdit: action.payload };
    case 'SET_CARD_INDEX':
      return { ...state, cardIndex: action.payload };
    case 'DELETE_CARD':
      return {
        ...state,
        allCards: state.card.splice(state.cardIndex, 1),
      };
    case 'EDIT_CARD_INFO':
      return {
        ...state,
        allCards: state.card.splice(state.cardIndex, 1, action.payload),
      };
    case 'SET_CARD_INFO':
      return {
        ...state,
        allCards: state.card.push(action.payload),
      };
    default:
      return state;
  }
};
