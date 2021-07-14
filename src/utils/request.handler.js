import axios from "axios";

class RequestHandler {
  sendGetRequest(url, headers) {
    return axios
      .get(url, { headers: headers })
      .then(
        response => {
          return response.data;
        }
      )
  }

  sendPostRequest(url, data, headers) {
    return axios
      .post(url, data, { headers: headers })
      .then(
        response => {
          return response.data;
        }
      )
  }

  sendPutRequest(url, data, headers) {
    return axios
      .put(url, data, { headers: headers })
      .then(
        response => {
          return response.data;
        }
      )
  }

  sendDeleteRequest(url, headers) {
    return axios
      .delete(url, { headers: headers })
      .then(
        response => {
          return response.data;
        }
      )
  }
}

export default new RequestHandler();