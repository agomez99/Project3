import axios from 'axios';

export default axios.create({
  baseURL: `https://codessource.herokuapp.com/`
});