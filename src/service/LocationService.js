import Service from './Service';
import Model from './Model';

class LocationService extends Service {

    getZipCities() {
        return Model.USZip;
    }
    getDefaultZipCity() {
        let defaultCity = {
            zip: '08520',
            city: 'East Windsor',
            state_id: 'NJ'
        };

        return defaultCity;
    }

}

export default LocationService;