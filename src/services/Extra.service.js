import axios from 'axios'

const API_URL = 'http://localhost:8080/api/Extra/'

class extraService {
    getExtra(){
        return axios.get(API_URL + 'extras')
    }
    getAExtra(id) {
        return axios.get(API_URL + 'extras/'+id)
    }
    createExtra(extra){
        return axios.post(API_URL + 'extras',{
            imgurl: extra.imgurl,
            extraName: extra.extraName,
            price: extra.price
        })
    }
    deleteExtra(id){
        return axios.delete(API_URL + 'extras/' + id)
    }
    updateExtra(extra,id){
        return axios.put(API_URL + 'extras/' + id,{
            imgurl: extra.imgurl,
            extraName: extra.extraName,
            price: extra.price
        })
    }
}

export default new extraService();