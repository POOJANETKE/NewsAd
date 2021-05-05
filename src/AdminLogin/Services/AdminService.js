import axios from 'axios';

const USER_API_BASE_URL = "http://localhost:8080/login";

class AdminService {


   

    getAdmin(emailId,password){
        return axios.get(USER_API_BASE_URL+"/admin/"+emailId+"/"+password);
    }

   


}

export default new AdminService();

