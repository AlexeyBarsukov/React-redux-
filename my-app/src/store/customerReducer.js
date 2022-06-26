const defaultState = {
  customer: ['1']
}


export const customerReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_CUSTOMER":
      return { ...state, }
    case "GET_CUSTOMERS":
      return { ...state, }
    default:
      return state
  }

}