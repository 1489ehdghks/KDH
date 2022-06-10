import { handleActions } from "redux-actions";
import * as api from '../lib/api';

const GET_POST = 'sample/GET_POST';
const GET_POST_SUCCESS = 'sample/GET_POST_SUCCESS';
const GET_POST_FAILURE = 'sample/GET_POST_FAILURE';


const GET_USER = 'sample/GET_USER';
const GET_USER_SUCCESS = 'sample/GET_USER_SUCCESS';
const GET_USER_FAILRUE = 'sample/GET_USER_FAILRUE';

export const getPost = id => async dispatch=>{
    dispatch({type : GET_POST});
    try{
        const response= await api.getPost(id);
        dispatch({
            type : GET_POST_SUCCESS,
            payload : response.data
        }); //요청 성공
    }catch (e){
        dispatch({
            type : GET_POST_FAILURE,
            payload : e,
            error : true
        }); //에러발생
        throw e; //에러조회
    }
};

export const getUser = () => async dispatch=>{
    dispatch({type : GET_USER});
    try{
        const response= await api.getUser();
        dispatch({
            type : GET_USER_SUCCESS,
            payload : response.data
        });
    }catch (e){
        dispatch({
            type : GET_USER_FAILRUE,
            payload : e,
            error : true
        });
        throw e;
    }
};

const initialState = {
    loading : {
        getPost : false,
        GET_USER : false
    },
    post : null,
    users : null
};

const sample = handleActions({
    [GET_POST] : state =>({
        ...state,
        loading :{
            ...state.loading,
            GET_POST: true  //요청 시작
        }
    }),

    [GET_POST_SUCCESS] : (state,action) =>({
        ...state,
        loading : {
            ...state.loading,
            GET_POST : false //요청 완료
        },
        post: action.payload
    }),

    [GET_POST_FAILURE] : (state,action) =>({
        ...state,
        loading : {
            ...state.loading,
            GET_POST : false
        }
    }),

    [GET_USER] : state =>({
        ...state,
        loading :{
            ...state.loading,
            GET_USER: true  //요청 시작
        }
    }),

    [GET_USER_SUCCESS] : (state,action) =>({
        ...state,
        loading : {
            ...state.loading,
            GET_USER : false //요청 완료
        },
        users : action.payload
    }),

    [GET_USER_FAILRUE] : (state,action) =>({
        ...state,
        loading : {
            ...state.loading,
            GET_USER : false
        }
    }),
    },
    initialState
);

export default sample;