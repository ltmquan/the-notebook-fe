import { BASE_URL, endpoints } from "../constants/url.constant";
import serviceUtil from "../utils/service.util";
import authHeader from "./auth-header";

const NOTE_TYPE_URL = BASE_URL + endpoints.NOTE_TYPE;

class NoteTypeService {
  getById(id) {
    return serviceUtil.handleGetResponse(NOTE_TYPE_URL + '/' + id, authHeader());
  }

  getByCurrentUser() {
    return serviceUtil.handleGetResponse(NOTE_TYPE_URL + '/user', authHeader());
  }

  create(noteType) {
    return serviceUtil.handlePostResponse(NOTE_TYPE_URL, noteType, authHeader());
  }

  update(noteType) {
    return serviceUtil.handlePutResponse(NOTE_TYPE_URL, noteType, authHeader());
  }

  deleteById(id) {
    return serviceUtil.handleDeleteResponse(NOTE_TYPE_URL + '/' + id, authHeader());
  }
}

export default new NoteTypeService();