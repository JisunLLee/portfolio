import axios from 'axios';
import { Response } from './response_servise';

class NotionService {
    constructor(){
        this.connect = axios.create({
            baseURL:process.env.REACT_APP_SERVER_URL,
          });;
        this.response = Response();
    }

    async get(main_url, sub_url, type) {
        const response = await this.connect({method:'get', url:`/notion/${main_url}/${sub_url}`})
                                        .catch(error=>{
                                            console.log(`get Notion ${main_url} Error`,error)
                                            return error.response && error.response;
                                        })
        console.log(type, response)
        if(!response) return this.response.serverError({act:`노션 ${main_url} ${type} 정보`});
        if(response.status === 200) return this.response.success(response.status, response.data, `노션 ${main_url} ${type} 정보`)
        if(response.status === 403) return this.response.fail(response.status, response.data, `노션 ${main_url} ${type} 정보`)
        return this.response.fail({...response.data, act:`이력서 ${main_url} ${type} 정보`});
    }
}

export default NotionService;