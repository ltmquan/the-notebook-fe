import { BASE_URL, endpoints } from "../constants/url.constant";
import serviceUtil from "../utils/service.util";
import authHeader from "./auth-header";

const FLASHCARD_URL = BASE_URL + endpoints.FLASHCARD;

class FlashcardService {
  getById(id) {
    return serviceUtil.handleGetResponse(FLASHCARD_URL + '/' + id, authHeader());
  }

  getByNoteId(noteId) {
    return serviceUtil.handleGetResponse(FLASHCARD_URL + '/note/' + noteId, authHeader());
  }

  create(flashcard) {
    return serviceUtil.handlePostResponse(FLASHCARD_URL, flashcard, authHeader());
  }

  update(flashcard) {
    return serviceUtil.handlePutResponse(FLASHCARD_URL, flashcard, authHeader());
  }

  deleteById(id) {
    return serviceUtil.handleDeleteResponse(FLASHCARD_URL + '/' + id, authHeader());
  }
}

export default new FlashcardService();