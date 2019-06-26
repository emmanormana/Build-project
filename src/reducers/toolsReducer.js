// TODO: Need to match Backend DB fields

const initialState = {
  tools: [{
    id              : '1', //TODO: BackEnd
    owner_id        : '3',
    image           : 'Chainsaw.png', //TODO: Pull this from the account
    location        : 'TBD',
    tool_name       : 'Flamethrower',
    tool_description: 'Not a real flamethrower',
    rental_price    : '$15',
    length_of_rental: '48 hours',
    status          : ['My Garage Only ', 'My Network ', 'Rental '] ,// TODO: depend on the backend endpoint
  }]
};

export default ( state = initialState, action ) => {
  const {type, payload} = action;
  switch (type) {
    default:
      return state;
  }
}