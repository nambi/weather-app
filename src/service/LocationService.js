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
    filterCities = (inputValue) => {
        if (inputValue) {
            let selectedValue = inputValue.toLowerCase();
            return Model.AllUSCities.filter(i => {
                let filtered = i.city.toLowerCase().includes(selectedValue) || i.zip.toLowerCase().includes(selectedValue);
                return filtered;
            }
            );
        }
    }

}

export default LocationService;