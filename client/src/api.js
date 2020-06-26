import axios from 'axios';

export default axios.create({
  baseURL: `http://localhost:5000/`

  //baseURL: `https://codessource.herokuapp.com/`
  //baseUrl = process.env.baseURL || "http://localhost:5000"


});