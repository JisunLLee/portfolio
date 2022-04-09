import { Response } from "./response_servise";

class UserDB {
    constructor(httpClient){
        this.connect = httpClient;
        this.Response = Response();
    }

    async signUp(user) {
        console.log("signUp user", user)
        const response = await this.connect({method:'post', url:'/users/', data: user})
                                        .catch(error=>{
                                            console.log("signUp Error",error)
                                            return error.response && error.response;
                                        })
        console.log("response:", response);
        if(!response) return this.Response.serverError({});
        if(response.status === 202) return this.Response.success(response.status, {...response.data.items[0],firebaseToken: user.firebaseToken, platformToken: user.platformToken, platformAuthToken: user.platformAuthToken}, "로그인")
        if(response.status === 201) return this.Response.success(response.status, user, "회원가입")
        if(response.status === 403) return this.Response.fail(response.status, response.data, "로그인")
        return this.Response.fail({...response.data, act:"회원가입/로그인"});
    }
    async secesstion(user) {
        const response = await this.connect({method:'delete', url:'/users/', data: user})
                                        .catch(error=>{
                                            console.log("secesstion Error",error)
                                            return error.response && error.response;
                                        })
        if(!response) return this.Response.serverError({act:"회원탈퇴"});
        return this.Response.success(200, response, "회원탈퇴");
    }
    async reSignUp(user) {
        const response = await this.connect({method:'post', url:'/users/resign', data: user})
        .catch(error=>{
            console.log("reSignUp Error",error)
            return error.response && error.response;
        })
        if(!response) return this.Response.serverError({act:"재 회원가입"});
        if(response.status === 201) return this.Response.success(response.status, user, "재 회원가입")
        return this.Response.fail({...response.data, act:"재 회원가입"});
    }
}

export default UserDB;