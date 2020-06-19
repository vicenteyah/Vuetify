import axios from 'axios'

const API_URL = 'http://localhost:8080/api/JobExchanges/'

class jobService {
    createJobExchange(jobexchange){
        return axios.post(API_URL + 'jobexchanges',{
            name: jobexchange.name,
            age: jobexchange.age,
            gender:jobexchange.gender,
            phone: jobexchange.phone,
            occupation: jobexchange.occupation,
            jobname:jobexchange.jobname
        })
    }
}

export default new jobService();