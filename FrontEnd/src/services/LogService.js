import axios from 'axios';

const LOG_API_BASE_URL = "http://localhost:8080/api/v1/logs";

class LogService {

    getLogs() {


        return axios.get(LOG_API_BASE_URL);
    }



}
export default new LogService()