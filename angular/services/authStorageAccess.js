function authStorageAccess() {
    /*
     * setData converts the given data into json string,
     * and stores in the localStorage with the key.
     */
    
    this.setData = function(key, value) {
        if (typeof(Storage) !== "undefined") {
        	var str = '';
            if(value.length === 0)
                localStorage.removeItem(key);
    		else{
                str = JSON.stringify(value);
                localStorage.setItem(key, str);
            }
        }
    };
    /*
     * getData gets the string and decrypts if needed, and returns the object.
     */
    this.getData = function(key) {
        if (typeof(Storage) !== "undefined") {
        	var str = localStorage.getItem(key);
        	if(str){
	        	return JSON.parse(str);
        	}
        	return '';
        }
        return null;
    }
}

angular.module('myApp').service('authStorageAccess', authStorageAccess);
