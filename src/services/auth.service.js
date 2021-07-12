import axios from "axios";
import { BASE_URL, endpoints } from "../constants/url.constant";
import serviceUtil from "../utils/service.util";

const AUTH_URL = BASE_URL + endpoints.AUTH;

class AuthService {
  login(user) {
    return axios
      .post(AUTH_URL + '/signin', user)
      .then(
        response => {
          if (response.data.accessToken) {
            localStorage.setItem('user', JSON.stringify(response.data));
          }

          return response.data;
        }
      )
      .catch(
        error => {
          console.log(error);
        }
      );
  }

  register(user) {
    console.log(user);

    return serviceUtil.handlePostResponse(AUTH_URL + '/signup', user, {});
  }
}

export default new AuthService();