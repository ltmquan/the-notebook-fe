import { BASE_URL, endpoints } from "../constants/url.constant";
import requestHandler from "../utils/request.handler";
import authHeader from "./auth-header";

const FLASHCARD_URL = BASE_URL + endpoints.FLASHCARD;

class FlashcardService {
  getById(id) {
    return requestHandler.sendGetRequest(FLASHCARD_URL + '/' + id, authHeader());
  }

  getByNoteId(noteId) {
    return requestHandler.sendGetRequest(FLASHCARD_URL + '/note/' + noteId, authHeader());
  }

  create(flashcard) {
    return requestHandler.sendPostRequest(FLASHCARD_URL, flashcard, authHeader());
  }

  update(flashcard) {
    return requestHandler.sendPutRequest(FLASHCARD_URL, flashcard, authHeader());
  }

  deleteById(id) {
    return requestHandler.sendDeleteRequest(FLASHCARD_URL + '/' + id, authHeader());
  }
}

export default new FlashcardService();