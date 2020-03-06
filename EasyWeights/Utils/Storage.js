
import AsyncStorage from '@react-native-community/async-storage';


let instance = null;

const keys = {
    ACCKEY: 'acckey',
    FBKEY: 'fbKey',
    DVICEKEY: 'dvkey',
    FBREG: 'fbreg',
    ACTIVECOMP: 'actComp',
    CURRENTPEOPLE:'currPeople',
    CURRENTCONTACTPEOPLE:'currContactPeople'
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

    clearOnLogout() {
        this.clearItem(keys.ACCKEY);
        this.clearItem(keys.ACTIVECOMP);
    }

    async clearOnSwitchComp() {
        this.clearItem(keys.CURRENTPEOPLE);
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

    async saveAuthData(token) {       
        await this.saveItem(keys.ACCKEY,token);
    }

    async createOrg(org,key) {
        try {
            await AsyncStorage.setItem(key, JSON.stringify(org))
          } catch (e) {
          //  console.log('Error saving item: ' +  key + ' ' + value)
          }
    }

    async initAppPersist() {
        try {
           // alert('PersistantStorage:87')
            return await Promise.all([this.loadAccessToken(),this.loadFBToken(),this.loadFBRegisterSucceed(),this.loadDevID(),this.loadActiveComp()])
                 .then((promisesList) => {
                  
                    let token = null;
                    let fbToken = null;
                    let fbRegSucce = null;
                    let devid = null;
                    let active = null;

                  
                    if (promisesList[0])
                        token = promisesList[0]
                    else
                        token = '0'

                    if(promisesList[1])
                        fbToken = promisesList[1]
                    else    
                        fbToken= '0'
                     
                    if(promisesList[2])
                        fbreg = promisesList[2]
                    else    
                        fbreg= '0'
                    
                    if(promisesList[3])
                        devid = promisesList[3]
                    else    
                        devid= '0'
                    if(promisesList[4]){
                        active = promisesList[4]
                    }
                    else    
                        active= '0'
                    
                    

                    return {
                        token: token,
                        fbToken:fbToken,
                        fbreg:fbreg,
                        devid:devid,
                        active:active,
                    };
                });

        } catch (e) {

        }

    }

    async loadFBToken() {
        return await AsyncStorage.getItem(keys.FBKEY)
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
     async saveFBData(fbToken) {
        await this.saveItem(keys.FBKEY,fbToken);
    }

    async loadDevID() {
        return await AsyncStorage.getItem(keys.DVICEKEY)
             .then(ret => {
                 return ret;
             }).catch(err => {
                 switch(err.name) {
                     case 'NotFoundError':
                     case 'NotFoundError':
                     case 'Error':
                         return null;
                         break;
                 }
             });
     }

     async saveDevID(token) {
        await this.saveItem(keys.DVICEKEY,token);
    }

    async loadActiveComp() {
      
        return await AsyncStorage.getItem(keys.ACTIVECOMP)
             .then(async ret => {  
                if(ret)   
                    return await AsyncStorage.getItem(ret)
                else
                    return 0;
                })
                .then(ret => {
                    return JSON.parse(ret);
                }).catch(err => {
                    switch(err.name) {
                        case 'NotFoundError':
                        case 'Error':
                            return null;
                            break;
                    }
                });
     }

     async checkActiveComp(compName) {
        return await AsyncStorage.getItem(compName.toLowerCase())
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

    async saveActiveComp(active) {
        await this.saveItem(keys.ACTIVECOMP,active.toLowerCase());
    }

    async loadFBRegisterSucceed() {
        return await AsyncStorage.getItem(keys.FBREG)
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

     async saveFBRegisterSucceed(fbreg) {
        await this.saveItem(keys.FBREG,fbreg);
    }

    //callerID//
    async saveNum(person) {
        let stringToSave = person.name + 'XX' + person.rowkey + 'XX' +  person.number + 'XX' + person.imgUrl 
        await this.saveItem(person.number,stringToSave);
    }

    async checkNumExists(number) {
        return await AsyncStorage.getItem(number)
        .then(ret => {
            if(ret != null)
                return ret;
            else    
                return '-1'
        }).catch(err => {
            switch(err.name) {
                case 'NotFoundError':
                case 'Error':
                    return null;
                    break;
            }
        });
     }


     async getRecentUsers() {
        return await AsyncStorage.getItem(keys.CURRENTPEOPLE)
        .then(req => {
           return req
        })
        .catch((error) => {
          //  console.log('error!')
        }
        );
     }

     async setCurrentRecent(arr) {
       return await this.saveItem(keys.CURRENTPEOPLE , JSON.stringify(arr)).then(res => {
       })
     }
     async setContactCurrentRecent(arr) {
        return await this.saveItem(keys.CURRENTCONTACTPEOPLE , JSON.stringify(arr)).then(res => {
        })
      }

     async getRecentContactUsers() {
        
        return await AsyncStorage.getItem(keys.CURRENTCONTACTPEOPLE)
        .then(req => {
           return req
        })
        .catch((error) => {
         //   console.log('error!')
        }
        );
     }
     async setCurrentContactRecent(arr) {
        return await this.saveItem(keys.CURRENTCONTACTPEOPLE , JSON.stringify(arr)).then(res => {
        })
      }
}
export default PersistantStorage;