import { DOMAIN_JIRABUG, TOKEN } from "../util/setting/config"
import { Axios } from "axios"


export const jiraBugsCallApi = { 
    signinJiraBugs: (userLogin) => {
       return Axios({
            url:`${DOMAIN_JIRABUG}/Users/signin`,
            method:'POST',
            data: userLogin
        }) 
    },
    

}