import * as actionTypes from './actionTypes';
import axios from 'axios';

export const getTheorySynch=(data)=>{
    return {
        type: actionTypes.GETTHEORY,
        data:data
    }
}

export const getTheory = (id_contentblock) => {
    return (dispatch)=>{
       
        return axios.post('https://stb-app-core.herokuapp.com/theory/get/', {id_contentblock:id_contentblock})
        .then(response => {
            dispatch(getTheorySynch(response.data.result));
        }).catch(error => {
            throw(error);
        });
    }
};

export const saveTheory = (id_contentblock,text) => {
    return (dispatch)=>{
       
        return axios.post('https://stb-app-core.herokuapp.com/theory/save/', {id_contentblock:id_contentblock,text:text})
        .then(response => {
            dispatch(saveTheorySynch(response.data.result));
        }).catch(error => {
            throw(error);
        });
    }
};

export const updateTheory = (id_theory,text) => {
    return (dispatch)=>{
       
        return axios.post('https://stb-app-core.herokuapp.com/theory/save/', {id:id_theory,text:text})
        .then(response => {
            dispatch(saveTheorySynch(response.data.result));
        }).catch(error => {
            throw(error);
        });
    }
};

export const saveTheorySynch=(data)=>{
    return {
        type: actionTypes.SAVETHEORY,
        data:data
    }
}