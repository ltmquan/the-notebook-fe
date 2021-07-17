import axios from "axios";
import { status } from "../constants/api-response.constant";
import { BASE_URL, endpoints } from "../constants/url.constant";
import requestHandler from "../utils/request.handler";

const AUTH_URL = BASE_URL + endpoints.AUTH;

class AuthService {
  login(user) {
    return axios
      .post(AUTH_URL + '/signin', user)
      .then(
        response => {
          if (response.data.accessToken) {
            localStorage.setItem('user', JSON.stringify(response.data));

            return {
              status: status.SUCCESS,
              action: 'log in',
              entityName: 'user'
            }
          }

          return response.data;
        }
      )
  }

  register(user) {
    return requestHandler.sendPostRequest(AUTH_URL + '/signup', user, {});
  }

  sendResetPasswordEmail(email) {
    return requestHandler.sendPostRequest(AUTH_URL + '/forgot-password/email', email, {});
  }

  resetPasswordWithOtp(request) {
    return requestHandler.sendPostRequest(AUTH_URL + '/forgot-password/otp', request, {});
  }
}

export default new AuthService();