import axios from "axios";
import { status } from "../constants/api-response.constant";

class ServiceUtil {
  handleGetResponse(url, headers) {
    return axios
      .get(url, { headers: headers })
      .then(
        response => {
          return response.data;
        }
      )
      .catch(
        error => {
          console.log(error);
        }
      );
  }

  handlePostResponse(url, data, headers) {
    return axios
      .post(url, data, { headers: headers })
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
      );
  }

  handlePutResponse(url, data, headers) {
    return axios
      .put(url, data, { headers: headers })
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
      );
  }

  handleDeleteResponse(url, headers) {
    return axios
      .delete(url, { headers: headers })
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
      );
  }
}

export default new ServiceUtil();