
import { CART_SUCC, GAMES_FAIL, GAMES_REQ, GAMES_SUCC, MOVIES_SUCC, GET_FAILURE, GET_PRODUCT_ID_SUCCESS, GET_REQUEST, GET_SUCCESS, SHOW_SUCC, TOTAL_SUCC, ADMIN_SUCC, REFRESH_SUCC } from "./actionTypes"


const init = {
  isLoading: false,
  isError: false,
  Games: [],
  products: [],
  Movies: [],
  CART: [],
  show: true,
  total: 0,
  admin:false,
  refresh:false
}
export const reducer = (state = init, { type, payload }) => {
  switch (type) {
    case GET_REQUEST: {
      return { ...state, isLoading: true, isError: false }
    }

    case GET_FAILURE: {
      return { ...state, isLoading: false, isError: true }
    }
    case GAMES_REQ:
      return { ...state, isLoading: true }
    case GAMES_SUCC:
      return { ...state, isLoading: false, Games: payload }
    case GET_SUCCESS: {
      return { ...state, isLoading: false, isError: false, products: payload }
    }
    case GAMES_FAIL:
      return { ...state, isLoading: false, isError: true }
    case MOVIES_SUCC:
      return { ...state, isLoading: false, Movies: payload }
    case CART_SUCC:
      return { ...state, isLoading: false, CART: payload }
    case SHOW_SUCC:
      return { ...state, isLoading: false, show: !state.show }
    case TOTAL_SUCC:
      return { ...state, isLoading: false, total: payload }
      case ADMIN_SUCC:
        return { ...state, isLoading: false, admin: !state.admin }
        case REFRESH_SUCC:
        return { ...state, isLoading: false, refresh: !state.refresh }
    default:
      return state

  }
}