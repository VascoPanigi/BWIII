import { HIDE_MODAL, SET_MODAL_TYPE, SHOW_MODAL, SELECTED } from '../actions'

const initialState = {
  showModal: false,
  modalType: null,
  selected: null,
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

    case SELECTED:
      return { ...state, selected: action.payload }

    default:
      return state
  }
}

export default modalReducer
