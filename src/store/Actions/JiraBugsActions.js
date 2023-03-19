import { USER_SIGNIN_API } from "../types/Jirabugs/JirabugsConstant"



export const signinJirabugAction = (email, password, navigate) => {
    return {
        type: USER_SIGNIN_API,
        userLogin: {
            email: email,
            password: password,
            navigate
        }
    }
}