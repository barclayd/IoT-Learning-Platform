import * as actionTypes from "./actionTypes";

export const postMessageSuccess = (data) => {
    return {
        type: actionTypes.POST_MESSAGE_SUCCESS,
        data
    };
};

export const postMessageFailed = (error) => {
    return {
        type: actionTypes.POST_MESSAGE_FAILED,
        error: error
    };
};

export const postMessageStart = () => {
    return {
        type: actionTypes.POST_MESSAGE_START
    }
};

export const postMessage = (useCaseId, messageId, message) => {
    return {
        type: actionTypes.INIT_POST_MESSAGE,
        useCaseId,
        messageId,
        message
    }
};
