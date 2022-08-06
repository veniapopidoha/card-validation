const initialState = {
  close: true,
  isEdit: false,
  card: [],
  allCards: [],
  cardIndex: 0,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CLOSE':
      return { ...state, close: action.payload };
    case 'SET_EDIT':
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
