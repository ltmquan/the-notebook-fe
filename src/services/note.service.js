import { BASE_URL, endpoints } from "../constants/url.constant";
import requestHandler from "../utils/request.handler";
import authHeader from "./auth-header";

const NOTE_URL = BASE_URL + endpoints.NOTE;

class NoteService {
  getById(id) {
    return requestHandler.sendGetRequest(NOTE_URL + '/' + id, authHeader());
  }

  getByNotebookId(notebookId) {
    return requestHandler.sendGetRequest(NOTE_URL + '/notebook/' + notebookId, authHeader());
  }

  create(note) {
    return requestHandler.sendPostRequest(NOTE_URL, note, authHeader());
  }

  update(note) {
    return requestHandler.sendPutRequest(NOTE_URL, note, authHeader());
  }

  deleteById(id) {
    return requestHandler.sendDeleteRequest(NOTE_URL + '/' + id, authHeader());
  }
}

export default new NoteService();