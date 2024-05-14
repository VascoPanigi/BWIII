import { HIDE_MODAL, SET_MODAL_TYPE, SHOW_MODAL } from '../actions'

const initialState = {
  showModal: false,
  modalType: null,
}

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_MODAL:
      return {
        ...state,
        showModal: true,
      }
    case HIDE_MODAL:
      return {
        ...state,
        showModal: false,
      }
    case SET_MODAL_TYPE:
      return { ...state, modalType: action.payload }

    default:
      return state
  }
}

export default modalReducer
