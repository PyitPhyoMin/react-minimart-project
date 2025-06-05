import axios from "axios";

// Changed the mock API base URL to a different endpoint[Min, 20250605]
const MOCK_API_BASE_URL = "https://6783cbfe8b6c7a1316f59f54.mockapi.io/api/";
//const MOCK_API_BASE_URL = "https://677be8e220824100c07b3800.mockapi.io/";
//Testing using with cors-anywhere.[Min]
/* const MOCK_API_BASE_URL = "https://cors-anywhere.herokuapp.com/https://677be8e220824100c07b3800.mockapi.io/"; */
const mockApi = axios.create({
  baseURL: MOCK_API_BASE_URL,
});
export default mockApi;
