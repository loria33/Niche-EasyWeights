
import AsyncStorage from '@react-native-community/async-storage';


let instance = null;

const keys = {
    ACCKEY: 'acckey',
};

class PersistantStorage {

    async saveItem(key,value) {
        try {
           return await AsyncStorage.setItem(key, value,
            ((res) => {
            //    console.log('succeess: ' +  key + ' ' + value);
                return value
            }),((res) => {
                //fail
            //    console.log('fail: ' +  key + ' ' + value)
            }))
          } catch (e) {
            console.log('Error saving item: ' +  key + ' ' + value)
          }

          
    }

   

    static create() {
        try {
            if (instance == null) {
                instance = new PersistantStorage();
            }
            return instance;
        }
        catch (e) {

        }
    }

    async clearItem(key) {
        await AsyncStorage.removeItem(key)
            .then(x => {
                }).catch(x => { }); 
    }

    async loadAccessToken() {
       return await AsyncStorage.getItem(keys.ACCKEY)
            .then(ret => {
                return ret;
            }).catch(err => {
                switch(err.name) {
                    case 'NotFoundError':
                    case 'Error':
                        return null;
                        break;
                }
            });
    }

    async initAppPersist() {
        try {
            return await Promise.all([this.loadAccessToken()])
                 .then((promisesList) => {
                  
                    let token = null;
                   
                  
                    if (promisesList[0])
                        token = promisesList[0]
                    else
                        token = '0'

                    return {
                        token: token,
                    };
                });

        } catch (e) {

        }

    }
}
export default PersistantStorage;