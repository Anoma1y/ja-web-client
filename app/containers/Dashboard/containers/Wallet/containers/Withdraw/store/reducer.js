const INITIAL_STATE = {
  isLoading: false,
}

const HANDLERS = {

}

export default (state = INITIAL_STATE, action) => (
  action.type in HANDLERS ? HANDLERS[action.type](state, action) : state
);
