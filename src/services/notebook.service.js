import { BASE_URL, endpoints } from "../constants/url.constant";
import authHeader from "./auth-header";
import requestHandler from "../utils/request.handler";

const NOTEBOOK_URL = BASE_URL + endpoints.NOTEBOOK;

class NotebookService {
  getById(id) {
    return requestHandler.sendGetRequest(NOTEBOOK_URL + '/' + id, authHeader());
  }

  getByCurrentUser() {
    return requestHandler.sendGetRequest(NOTEBOOK_URL + '/user', authHeader());
  }

  create(notebook) {
    return requestHandler.sendPostRequest(NOTEBOOK_URL, notebook, authHeader());
  }

  update(notebook) {
    return requestHandler.sendPutRequest(NOTEBOOK_URL, notebook, authHeader());
  }

  deleteById(id) {
    return requestHandler.sendDeleteRequest(NOTEBOOK_URL + '/' + id, authHeader());
  }
}

export default new NotebookService();