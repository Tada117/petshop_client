import axios from "axios";
import { CF_ROUTE_USER, REGISTER } from "../config/route";

function register(user) {
  return axios.post(CF_ROUTE_USER.REGISTER, user).then((response) => {
    return response.data;
  });
}
