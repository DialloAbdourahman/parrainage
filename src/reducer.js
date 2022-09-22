const cart_reducer = (state, action) => {
  if (action.type === 'CLOSE_MODAL') {
    return {
      ...state,
      modal: {
        text: '',
        isModalOpen: false,
      },
    };
  }
  if (action.type === 'OPEN_MODAL') {
    const newTeachers = state.data.filter(
      (item) => item.id !== action.payload.id
    );
    return {
      ...state,
      modal: {
        text: action.payload.text,
        isModalOpen: true,
      },
      data: newTeachers,
    };
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default cart_reducer;
