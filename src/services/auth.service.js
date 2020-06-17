import axios from 'axios';

const API_URL = 'http://localhost:8080/api/auth/';

class AuthService {
    login(user) {
    return axios
      .post(API_URL + 'signin', {
        username: user.username,
        password: user.password
      })
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem('user', JSON.stringify(response.data));
          localStorage.setItem('id',JSON.stringify(response.data.id))
        }

        return response.data;
      });
   }

  logout() {
    localStorage.removeItem('user')
    localStorage.removeItem("itemsArray")
    localStorage.removeItem("purchases")
    localStorage.removeItem("id")
  }

  register(user) {
    return axios.post(API_URL + 'signup', {
      username: user.username,
      email: user.email,
      password: user.password
    });
  }
}

export default new AuthService();