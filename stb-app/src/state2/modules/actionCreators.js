import * as actionTypes from './actionTypes';

export const increment = () => {
    return {
        type: actionTypes.INCREMENT
    }
};

export const getList = () => {
    return {
        type: actionTypes.GETLIST
    }
};
export const getById = (id) => {
    return {
        type: actionTypes.GETBYID,
        id:id
    }
};