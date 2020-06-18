import axios from 'axios'

const API_URL = 'http://localhost:8080/api/Additional/'

class additionalService {
    getAdditional(){
        return axios.get(API_URL + 'additionals')
    }
    getAnAdditional(id){
        return axios.get(API_URL + 'additionals/' + id)
    }
}

export default new additionalService()