import { HIDE_MODAL, SET_MODAL_TYPE, SHOW_MODAL, SELECTED, SHOW_ID_MODAL } from '../actions'

const initialState = {
  showModal: false,
  modalType: null,
  selected: null,
  showIdModal: null,
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
        showIdModal: null,
      }
    case SET_MODAL_TYPE:
      return { ...state, modalType: action.payload }

    case SELECTED:
      return { ...state, selected: action.payload }
    case SHOW_ID_MODAL:
      return { ...state, showModal: true, showIdModal: action.payload }

    default:
      return state
  }
}

export default modalReducer
