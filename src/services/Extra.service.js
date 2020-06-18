import axios from 'axios'

const API_URL = 'http://localhost:8080/api/Extra/'

class extraService {
    getExtra(){
        return axios.get(API_URL + 'extras')
    }
    getAExtra(id) {
        return axios.get(API_URL + 'extras/'+id)
    }
}

export default new extraService();