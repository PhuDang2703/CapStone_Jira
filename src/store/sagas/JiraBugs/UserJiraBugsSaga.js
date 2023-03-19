import { useNavigate } from 'react-router-dom';
import { call, delay, takeLatest, put } from 'redux-saga/effects';
import { jiraBugsCallApi } from "../../../callApi/JirabugsCallApi";
import { STATUS_CODE, TOKEN, USER_LOGIN } from "../../../util/setting/config";
import { USER_SIGNIN_API, USLOGIN } from '../../types/Jirabugs/JirabugsConstant';
import {DISPLAY_LOADING, HIDE_LOADING} from '../../types/LoadingConst'


//Quản lý các action saga(là action return lại function giống trong thunk và khác với action redux bthg)
function* signinSaga(action, navigate) {
    console.log(action);
    yield put({
        type: DISPLAY_LOADING
    })
    yield delay(500);

    //Gọi api 
    try {
        const { data, status } = yield call(() => jiraBugsCallApi.signinJiraBugs(action.userLogin));

        //Lưu vào localstorage khi đăng nhập thành công
        localStorage.setItem(TOKEN, data.content.accessToken);
        localStorage.setItem(USER_LOGIN, JSON.stringify(data.content));


        yield put({
            type: USLOGIN,
            userLogin: data.content
        })

        navigate('/home');

    } catch (err) {
        console.log(err.response.data)
    }


    yield put({
        type: HIDE_LOADING
    })

}

export function* theoDoiSignin() {
    yield takeLatest(USER_SIGNIN_API, signinSaga);
}