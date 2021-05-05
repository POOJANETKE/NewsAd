import axios from 'axios'

const ADMIN_URL ="http://localhost:8080/advertise";
const Product_URL="http://localhost:8080/advertise/viewAdvertisements"

class AdvertisementService {

    viewAdvertisements(){
        return axios.get(ADMIN_URL+'/viewAdvertisements');
    }

    viewCustomers(){
        return axios.get(ADMIN_URL+'/viewCustomers');
    }
    
    viewIssues(){
        return axios.get(ADMIN_URL+'/viewIssues');
    }
    getProductById(productId){
        return axios.get(Product_URL + '/' + productId);
    }

    deleteAdvertisement(productId){
        return axios.delete(Product_URL + '/' + productId);
    }

    addAdvertise(advertise){
        return axios.post(ADMIN_URL+'/register', advertise);
    }
    
    updateAdvertise(advertise,eid){
        return axios.put(ADMIN_URL + '/' + eid, advertise);
    }



}
export default new AdvertisementService()