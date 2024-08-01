import axios from "axios";
const Test = () => {
  axios.get("http://localhost:8000/").then((res) => console.log(res));
};
export default Test;
