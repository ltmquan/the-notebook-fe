import { status } from "../constants/api-response.constant";
import notificationUtil from "./notification.util";

class ResponseHandler {

  // GET
  handleGetResponse(store, response, successCallback = (param) => {}, failureCallback = (param) => {}) {
    if (response.status && response.status === status.FAILURE) {
      store.dispatch('notification/show', {
        type: response.status,
        text: notificationUtil.generateMessageFromResponse(response)
      });
      failureCallback(response);
    } else {
      store.dispatch('notification/show', {
        type: status.SUCCESS,
        text: 'Successfully able to retrieve requested data'
      })
      successCallback(response);
    }
  }

  // POST
  handlePostResponse(store, response, successCallback = (param) => {}, failureCallback = (param) => {}) {
    store.dispatch('notification/show', {
      type: response.status,
      text: notificationUtil.generateMessageFromResponse(response)
    });

    if (response.status === status.SUCCESS) successCallback(response);
    else failureCallback(response);
  }

  // PUT
  handlePutResponse(store, response, successCallback = (param) => {}, failureCallback = (param) => {}) {
    store.dispatch('notification/show', {
      type: response.status,
      text: notificationUtil.generateMessageFromResponse(response)
    });

    if (response.status === status.SUCCESS) successCallback(response);
    else failureCallback(response);
  }

  // POST
  handleDeleteResponse(store, response, successCallback = (param) => {}, failureCallback = (param) => {}) {
    store.dispatch('notification/show', {
      type: response.status,
      text: notificationUtil.generateMessageFromResponse(response)
    });

    if (response.status === status.SUCCESS) successCallback(response);
    else failureCallback(response);
  }
}

export default new ResponseHandler();