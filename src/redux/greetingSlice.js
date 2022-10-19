import axios from "axios";
const GET_MESSAGE = "greetings/greeting";
const getMessage = (message) => ({ type: GET_MESSAGE, payload: message });
function greetReducer(state = [], action = {}) {
  switch (action.type) {
    case GET_MESSAGE:
      return action.payload;
    default:
      return state;
  }
}
const fetchMessage = async () => {
  await axios.get("http://127.0.0.1:3000/api/v1/messages").then((response) => {
    return response.data.greeting;
  });
};
export { getMessage, fetchMessage };
export default greetReducer;
