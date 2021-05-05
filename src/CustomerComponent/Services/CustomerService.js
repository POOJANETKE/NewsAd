import axios from 'axios';

const CUSTOMER_API_BASE_URL = "http://localhost:8080/news";

class CustomerService {

    createCustomer(registerUser) {
        return axios.post(CUSTOMER_API_BASE_URL + '/user', registerUser);
    }

    getCustomer(emailId,password){
        return axios.get(CUSTOMER_API_BASE_URL+'/customer'+emailId+'/'+password)
    }

    updateUser(user) {
        return axios.patch(CUSTOMER_API_BASE_URL + '/updateUser', user)
    }
   
}
export default new CustomerService()