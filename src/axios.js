import axios from "axios";

const instance = axios.create({
  baseURL: 'http://localhost:5001/amzon-clone-pv62020ee1/us-central1/api', // the api{cloud function} url
});

export default instance;