import * as actionTypes from './actionTypes';
import axios from '../../shared/axios-instance';

export const fetchDataSuccess = (data) => {
    return {
        type: actionTypes.FETCH_DATA_SUCCESS,
        historicData: data
    };
};

export const fetchDataFailed = (error) => {
    return {
        type: actionTypes.FETCH_DATA_FAILED,
        error: error
    };
};

export const fetchDataStart = () => {
    return {
        type: actionTypes.FETCH_DATA_START
    }
};

export const fetchData = () => {
    return dispatch => {
        dispatch(fetchDataStart());
        axios.get('/test.json')
            .then(response => {
                const fetchedData = [];
                for (let key in response.data) {
                    fetchedData.push({
                        ...response.data[key],
                        id: key
                    });
                }
                dispatch(fetchDataSuccess(fetchedData));
            })
            .catch(err => {
                dispatch(fetchDataFailed(err))
            })
    }
};
