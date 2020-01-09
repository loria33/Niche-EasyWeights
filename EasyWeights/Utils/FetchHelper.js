import Config from '../Consts/Config';
import configureStore from '../store/configurestore';
import * as GlobalActionTypes from '../Consts/GlobalActionTypes';
import _ from 'lodash';

const store = configureStore();

const FetchHelper = {
    async execute(methodName, dynamicUrlData, bodyData) {
        let methodObject = Config.methods[methodName];
        let headers = {
        };

        if (methodObject.isAuthenticated)
            headers['Authorization'] = 'Bearer ' + store.getState().auth.accToken;

        if (methodObject.jsonMethod)
            headers['Content-Type'] = 'application/json';

        if (methodObject.showLoader)
            store.dispatch(GlobalActionTypes.AJAX_BEGIN_LOADER);

        let request = {
            method: methodObject.verb,
            headers: headers,
            cache: 'default',
            mode: 'cors'
        }
       
        // check for parameters in url template
        let parsedUrl = methodObject.suffixUrl;
        let regex = new RegExp('\{(.*?)\}');
        _.each(dynamicUrlData,(item)=> {
            parsedUrl = parsedUrl.replace(regex,(pattern,val)=> {
                return dynamicUrlData[val];
            });
        });

        let url = Config.baseUrl + parsedUrl;
        if (methodObject.verb == "POST" || methodObject.verb == "PUT")
            request.body = JSON.stringify(bodyData);

        try {
            return await fetch(url, request).then(response => {
             
                if (response.status >= 200 && response.status < 300) {
                    console.log(url + ' ...200< 300... ' + request );
                    if(response.status == 204)
                        return response;
                    else
                        return (response.json());
                }
                if (response.status = 500) {
                    console.log(url + ' 500 ' + request );
                    Promise.reject("server error");
                    // handler global error
                }
                if (response.status = 401) {
                    console.log(url + ' .... 401 ' + request );
                    Promise.reject("not authenticated");
                    // handle not authenticated
                }
            }).then (response => {
                if (methodObject.isFlatResponse) {
                    return response;
                } else return response.body;
            }).catch(error => {
                console.log(url + ' Error....... ' + error );
                Promise.reject(error);
            });
        }
        catch (error) {
            // add report to AppCenter analytics // TODO
            Promise.reject(error);
        }
    }
}

export default FetchHelper;