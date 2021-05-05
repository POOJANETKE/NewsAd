import axios from 'axios';

const CONTACT_API_BASE_URL = "http://localhost:8080/contact";

class ContactService {

    createIssue(details) {
        return axios.post(CONTACT_API_BASE_URL + '/user', details);
    }
}
export default new ContactService()