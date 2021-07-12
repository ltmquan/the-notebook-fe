import { BASE_URL, endpoints } from "../constants/url.constant";
import serviceUtil from "../utils/service.util";
import authHeader from "./auth-header";

const NOTE_URL = BASE_URL + endpoints.NOTE;

class NoteService {
  getById(id) {
    return serviceUtil.handleGetResponse(NOTE_URL + '/' + id, authHeader());
  }

  getByNotebookId(notebookId) {
    return serviceUtil.handleGetResponse(NOTE_URL + '/notebook/' + notebookId, authHeader());
  }

  create(note) {
    return serviceUtil.handlePostResponse(NOTE_URL, note, authHeader());
  }

  update(note) {
    return serviceUtil.handlePutResponse(NOTE_URL, note, authHeader());
  }

  deleteById(id) {
    return serviceUtil.handleDeleteResponse(NOTE_URL + '/' + id, authHeader());
  }
}

export default new NoteService();