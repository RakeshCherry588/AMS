import axios from "axios";


const REST_API_BASE_URL = 'https://localhost:8080/api/employee'


export const listEmpoloyees = () => axios.get(REST_API_BASE_URL,);