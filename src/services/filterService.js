import axios from 'axios';

export default class FilterService {
        getJsonData() {      
        return axios.get(`${process.env.PUBLIC_URL}/listing/listings.json`) 
            .then(res => {
                
            return res.data;
            }).catch(err => {
                console.log('xxxxxxxxx xxxxxxxxxxxxx error ' + err);
            });
    }

}
