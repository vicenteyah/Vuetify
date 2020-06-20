import axios from 'axios'

const API_URL = 'http://localhost:8080/api/PersonalData/'

class personalService {
    getPersonalData(userId){
        return axios.get(API_URL + 'personaldata/'+userId)
    }
    completePersonalData(personalData){
       return axios.post(API_URL + 'personaldata',{
            userId: personalData.userId,
            nameData: personalData.nameData,
            addressData: personalData.addressData,
            phoneData: personalData.phoneData,
            paymentMeth: personalData.paymentMeth
        })
    }
    updatePersonalData(modify,usrId){
       return axios.put(API_URL + 'personaldata/' +usrId,{
          nameData: modify.nameData,
          addressData: modify.addressData,
          phoneData: modify.phoneData,
          paymentMeth: modify.paymentMeth
       })
    }
}

export default new personalService();