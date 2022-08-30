import { Response } from "./response_servise";
import axios from 'axios';
class TarotDB {
    constructor(){
        this.connect = axios.create({
            baseURL:process.env.REACT_APP_SERVER_URL,
          });;
        this.Response = Response();
    }

    async item(item) {
        const response = await this.connect({method:'get', url:`/tarot/dice/?item=${item}`})
                                        .catch(error=>{
                                            console.log("roll item Error",error)
                                            return error.response && error.response;
                                        })
        if(!response) return this.Response.serverError({act:"타로정보"});
        if(response.status === 200) return this.Response.success(response.status, response.data, "타로정보")
        if(response.status === 403) return this.Response.fail(response.status, response.data, "타로정보")
        return this.Response.fail({...response.data, act:"타로정보"});
    }
    async getTarotInfo(userId){
        const response = await this.connect({method:'get', url:`/tarot/user_tarot/?userId=${userId}`})
        .catch(error=>{
            return error.response && error.response;
        })
        // console.log('[TAROT_SERVICE][getTarotInfo] response:', response);
        if(!response) return this.Response.serverError({act:"[GET]타로 정보"});
        if(response.status === 200) return this.Response.success(response.status, response.data.items[0], "[GET]타로 정보")
        if(response.status === 404) return this.Response.fail(response.status, response.data, "신규");
        return this.Response.fail({...response.data, act:"[GET]타로 정보"});
    }
    async postTarotInfo({userId, photo, color}){
        const response = await this.connect({method:'post', url:`/tarot/user_tarot/`, data: {userId}})
        .catch(error=>{
            return error.response && error.response;
        })
        // console.log('[TAROT_SERVICE][postTarotInfo] response:', response);
        if(!response) return this.Response.serverError({act:"[POST]타로 정보"});
        if(response.status === 200) return this.Response.success(response.status, response.data.items[0], "[POST]타로 정보")
        if(response.status === 404) return this.Response.fail(response.status, response.data.items, "[POST]타로 정보")
        return this.Response.fail({...response.data, act:"[POST]타로 정보"});
    }
    async putTarotInfo(userId, item){
        const response = await this.connect({method:'put', url:`/tarot/user_tarot/`, data: {userId, item}})
        .catch(error=>{
            return error.response && error.response;
        })
        // console.log('[TAROT_SERVICE][putTarotInfo] response:', response);
        if(!response) return this.Response.serverError({act:"[GET]타로 정보"});
        if(response.status === 200) return this.Response.success(response.status, response.data.items[0], "[GET]타로 정보")
        if(response.status === 404) return this.Response.fail(response.status, response.data, "신규");
        return this.Response.fail({...response.data, act:"[GET]타로 정보"});
    }
}

export default TarotDB;