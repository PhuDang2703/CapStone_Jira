import { all } from "redux-saga/effects";
import * as JiraBugs from '../sagas/JiraBugs/UserJiraBugsSaga'

export function* rootSaga() {

    yield all([
      //Nghiệp vụ theo dõi các action saga todolist
     
      
      //Nghiệp vụ cyberbugs .... ,
      JiraBugs.theoDoiSignin(),
     
  
    ])
  
  }