import axios from 'axios';

export default axios.create({
  baseUrl = process.env.baseURL || "http://localhost:5000"

  //baseURL: `https://codessource.herokuapp.com/`

});