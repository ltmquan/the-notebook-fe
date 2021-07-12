import authHeader from './auth-header';
import { BASE_URL, endpoints } from "../constants/url.constant";
import serviceUtil from "../utils/service.util";
import { status } from '../constants/api-response.constant';
import axios from 'axios';

const USER_URL = BASE_URL + endpoints.USER;

class UserService {
  logout() {
    return axios
      .get(USER_URL + '/logout', { headers: authHeader() })
      .then(
        response => {
          if (response.data.status === status.SUCCESS) {         
            console.log(response.data);
          }

          return response.data;
        }
      )
      .catch(
        error => {
          console.log(error);
        }
      ).then(
        () => {
          localStorage.removeItem('user');
        }
      )
  }

  update(user) {
    return axios
      .put(USER_URL, user, { headers: authHeader() })
      .then(
        response => {
          if (response.data) {
            localStorage.setItem('user', JSON.stringify({
              ...JSON.parse(localStorage.getItem('user')),
              ...response.data
            }));
          }
        }
      ).catch(
        error => {
          console.log(error);
        }
      )
  }

  changeCredentials(request) {
    return serviceUtil.handlePutResponse(USER_URL + '/credentials', request, authHeader());
  }

  delete() {
    return serviceUtil.handleDeleteResponse(USER_URL, authHeader());
  }
}

export default new UserService();