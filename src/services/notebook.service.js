import { BASE_URL, endpoints } from "../constants/url.constant";
import authHeader from "./auth-header";
import serviceUtil from "../utils/service.util";

const NOTEBOOK_URL = BASE_URL + endpoints.NOTEBOOK;

class NotebookService {
  getById(id) {
    return serviceUtil.handleGetResponse(NOTEBOOK_URL + '/' + id, authHeader());
  }

  getByCurrentUser() {
    return serviceUtil.handleGetResponse(NOTEBOOK_URL + '/user', authHeader());
  }

  create(notebook) {
    return serviceUtil.handlePostResponse(NOTEBOOK_URL, notebook, authHeader());
  }

  update(notebook) {
    return serviceUtil.handlePutResponse(NOTEBOOK_URL, notebook, authHeader());
  }

  deleteById(id) {
    return serviceUtil.handleDeleteResponse(NOTEBOOK_URL + '/' + id, authHeader());
  }
}

export default new NotebookService();