import { BASE_URL, endpoints } from "../constants/url.constant";
import requestHandler from "../utils/request.handler";
import authHeader from "./auth-header";

const NOTE_TYPE_URL = BASE_URL + endpoints.NOTE_TYPE;

class NoteTypeService {
  getById(id) {
    return requestHandler.sendGetRequest(NOTE_TYPE_URL + '/' + id, authHeader());
  }

  getByCurrentUser() {
    return requestHandler.sendGetRequest(NOTE_TYPE_URL + '/user', authHeader());
  }

  create(noteType) {
    return requestHandler.sendPostRequest(NOTE_TYPE_URL, noteType, authHeader());
  }

  update(noteType) {
    return requestHandler.sendPutRequest(NOTE_TYPE_URL, noteType, authHeader());
  }

  deleteById(id) {
    return requestHandler.sendDeleteRequest(NOTE_TYPE_URL + '/' + id, authHeader());
  }
}

export default new NoteTypeService();