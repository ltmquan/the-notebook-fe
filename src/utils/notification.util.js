import { status } from "../constants/api-response.constant";

class NotificationUtil {
  generateMessageFromResponse(response) {
    const prefix = response.status === status.SUCCESS ? 'Sucessfully able to' : 'Failed to';
    const action = response.action;
    const entity = response.entityName;

    return `${prefix} ${action} ${entity}`;
  }
}

export default new NotificationUtil();