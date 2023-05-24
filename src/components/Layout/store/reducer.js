import { CLOSE_SIDE_BAR, OPEN_SIDE_BAR } from "./constants";

const initState = {
  expanded: false,
};
function reducer(state, action) {
  switch (action.type) {
        case CLOSE_SIDE_BAR:
            return {
                ...state,
                expanded: action.payload
            }
        case OPEN_SIDE_BAR:
            return{
                ...state,
                expanded: action.payload
            }
        default:
            throw new Error('Error')
  }
};

export { initState };
export default reducer
