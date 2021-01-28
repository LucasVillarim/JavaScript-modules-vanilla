import baseURL from './baseURL.js';
import {isAuth} from './Auth.js';


const token = localStorage.getItem('@token');

const defaultHeaders = {
  headers: {
    'Content-Type': 'application/json',
    'Authorization': token
  }
}

export const getAccountInfo = async (urlParam) => {
  const response = await axios.get(`${baseURL}${urlParam}`, defaultHeaders);
  console.log({"getAccountInfo": response.data});
  return response.data;
}

export const getAccountDashBoard = async (urlParam) => {
  const response = await axios.get(`${baseURL}${urlParam}`, defaultHeaders);
  console.log({"getAccountDashBoard": response.data});
  return response.data;
}

export const payBill = (urlParam, bill) => {


}