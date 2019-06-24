// TODO: Need to match Backend DB fields

const initialState = {
  tools: [{
    tool_id         : '', //TODO: BackEnd
    owner_id        : '', //TODO: Pull this from the account
    location        : '',
    tool_name       : '',
    tool_description: '',
    rental_price    : '',
    length_of_rental: '',
    status          : [], // TODO: depend on the backend endpoint
  }]
};

export default ( state = initialState, action ) => {
  const {type, payload} = action;
  switch (type) {
    default:
      return state;
  }
}