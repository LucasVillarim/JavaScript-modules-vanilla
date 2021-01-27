import baseURL from './baseURL.js';

const login = localStorage.getItem('login');
const token = localStorage.getItem('@token');
const defaultHeaders = {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': token 
        }
      }

export const getAccountInfo = async (urlParam) => {
  const response = await axios.get(`${baseURL}${urlParam}${login}`, defaultHeaders)
  console.log({"getAccountInfo": response.data});
  return response.data;
}

export const getAccountDashBoard = async (urlParam) => {
  const response = await axios.get(`${baseURL}${urlParam}${login}`, defaultHeaders);
  console.log({"getAccountDashBoard": response.data});
  return response.data;
}

export const payBill = (urlParam, bill) => {


}