/**
 * Abstract service to create common utilities; 
 */
class Service {
    DEFAULT_UNITS = 'imperial';
    DEFAULT_COUNTRY = 'US';
    
    constructor(appContext) {
        this.app = appContext;
    }
    updateAppState(newState) {
        this.app.setState(newState);
    }

};

export default Service;