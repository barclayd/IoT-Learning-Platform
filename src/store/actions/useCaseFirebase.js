import * as actionTypes from './actionTypes';

export const fetchUseCaseDataSuccess = (data) => {
    return {
        type: actionTypes.FETCH_USECASE_DATA_SUCCESS,
        data: data
    };
};

export const fetchUseCaseDataFailed = (error) => {
    return {
        type: actionTypes.FETCH_USECASE_DATA_FAILED,
        error: error
    };
};

export const fetchUseCaseDataStart = () => {
    return {
        type: actionTypes.FETCH_USECASE_DATA_START
    }
};

export const fetchUseCaseData = () => {
    return {
        type: actionTypes.INIT_FETCH_USECASE_DATA
    }
};

export const submitSettingsSuccess = (data) => {
    return {
        type: actionTypes.SUBMIT_SETTINGS_SUCCESS,
        data: data
    };
};

export const submitSettingsFail = (error) => {
    return {
        type: actionTypes.SUBMIT_SETTINGS_FAIL,
        error: error
    };
};

export const submitSettingsStart = () => {
    return {
        type: actionTypes.SUBMIT_SETTINGS_START
    }
};

export const submitSettingsInit = () => {
    return {
        type: actionTypes.SUBMIT_SETTINGS_INIT
    }
};

export const submitSettings = (useCaseId, data) => {
    return {
        type: actionTypes.INIT_SUBMIT_SETTINGS,
        data: data,
        useCaseId: useCaseId
    }
};


export const updateUseCaseDataSuccess = (data) => {
    return {
        type: actionTypes.UPDATE_USECASE_SUCCESS,
        data
    };
};

export const updateUseCaseDataFailed = (error) => {
    return {
        type: actionTypes.UPDATE_USECASE_FAILED,
        error: error
    };
};

export const updateUseCaseDataStart = () => {
    return {
        type: actionTypes.UPDATE_USECASE_START
    }
};

export const updateUseCaseData = (data) => {
    return {
        type: actionTypes.INIT_UPDATE_USECASE,
        data: data
    }
};

export const deleteUseCaseSuccess = (useCase) => {
    return {
        type: actionTypes.DELETE_USECASE_SUCCESS,
        useCase: useCase
    };
};

export const deleteUseCaseFailed = (error) => {
    return {
        type: actionTypes.DELETE_USECASE_FAIL,
        error: error
    };
};

export const deleteUseCaseStart = () => {
    return {
        type: actionTypes.DELETE_USECASE_START
    }
};

export const deleteUseCase = (id, useCase) => {
    return {
        type: actionTypes.INIT_DELETE_USECASE,
        id: id,
        useCase: useCase
    }
};
