import authHeader from './auth-header';
import { BASE_URL, endpoints } from "../constants/url.constant";
import { status } from '../constants/api-response.constant';
import axios from 'axios';
import requestHandler from '../utils/request.handler';

const USER_URL = BASE_URL + endpoints.USER;

class UserService {
  logout() {
    localStorage.removeItem('user');
    return requestHandler.sendGetRequest(USER_URL + '/logout', authHeader());
  }

  update(user) {
    return axios
      .put(USER_URL, user, { headers: authHeader() })
      .then(
        response => {
          if (!response.data.status) {
            localStorage.setItem('user', JSON.stringify({
              ...JSON.parse(localStorage.getItem('user')),
              ...response.data
            }));
            return {
              status: status.SUCCESS,
              action: 'update',
              entity: 'user'
            }
          }

          return response.data;
        }
      )
  }

  changeCredentials(request) {
    return requestHandler.sendPutRequest(USER_URL + '/credentials', request, authHeader());
  }

  delete() {
    return requestHandler.sendDeleteRequest(USER_URL, authHeader());
  }
}

export default new UserService();