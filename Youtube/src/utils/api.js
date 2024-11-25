import axios from 'axios';

const BASE_URL = 'https://www.googleapis.com/youtube/v3';
const API_KEY = 'AIzaSyARkKy-YxQYMAuRnAjOTg7Y1VfpCAaLbO0'



export const fetchDataFromApi = async (endpoints,params={}) => {
  try {
    const response = await axios.get(`${BASE_URL}/${endpoints}`, { params: { ...params, key: API_KEY } });
/*     console.log(response.data); */
    return response.data
  } catch (error) {
    console.error(error);
  }
};

export default fetchDataFromApi;
