import { cMax, cMin } from "../constants/constraint.constant";
import { vEquals, vMax, vNotEquals, vRequired, vSize } from "../constants/form-validations.constant";

class ValidationUtil {
  vName(value) {
    return vRequired(value) || vSize(value, cMin.NAME, cMax.NAME);
  }

  vUsername(value) {
    return vRequired(value) || vSize(value, cMin.USERNAME, cMax.USERNAME);
  }

  vPassword(value) {
    return vRequired(value) || vSize(value, cMin.PASSWORD, cMax.PASSWORD);
  }

  vConfirmPassword(value, target) {
    return vRequired(value) || vEquals(value, target);
  }

  vChangeCredentialsPassword(value, target) {
    return vSize(value, cMin.PASSWORD, cMax.PASSWORD) || vNotEquals(value, target);
  }

  vEmail(value) {
    return vRequired(value);
  }

  vNotebookName(value) {
    return vRequired(value) || vMax(value, cMax.NOTEBOOK_NAME);
  }

  vNotebookDescription(value) {
    return vMax(value, cMax.NOTEBOOK_DESCRIPTION);
  }

  vNoteName(value) {
    return vRequired(value) || vMax(value, cMax.NOTE_NAME);
  }

  vFlashcardTitle(value) {
    return vRequired(value) || vMax(value, cMax.FLASHCARD_TITLE);
  }
}

export default new ValidationUtil();