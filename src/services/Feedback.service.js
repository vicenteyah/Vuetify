import axios from 'axios'
const API_URL = 'http://localhost:8080/api/Feedback/';

class FeedbacksService {
    createFeedbacks(feedback){
        return axios.post(API_URL + 'feedbacks',{
            completename:feedback.completename,
            email: feedback.email,
            phone: feedback.phone,
            store: feedback.store,
            message: feedback.message
        })
    }
}
export default new FeedbacksService();