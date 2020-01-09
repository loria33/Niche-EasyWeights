

const CommonHelper =  {

	TrimStrings(str) {
		return str.trim();
    },

	getAlert(){
		alert('asdasdasd');
	},
	groupBy(objectArray, property) {
		return objectArray.reduce(function (acc, obj) {
			var key = obj[property];
			
			if (!acc[key]) {
				acc[key] = [];
			}
			acc[key].push(obj.featureKey);
			return acc;
		}, {});
	},
	jsUcfirst(string) 
	{
			return string.charAt(0).toUpperCase() + string.slice(1);
	},
	phonenumber(inputtxt)
	{
  			if(inputtxt.length == 10 && /^\d+$/.test(inputtxt))
        {
      		return true;
        }
      	else
        {
        	return false;
        }
	},
	isDigits(inputtxt,mode)
	{
				
  			if(inputtxt.length == (mode=='p'?inputtxt.length:5) && /^\d+$/.test(inputtxt) && inputtxt.length < 15) 
        {
      		return true;
        }
      	else
        {
					
        	return false;
        }
	},
	hasSpecialCharachters(inputtxt)
	{

		var format = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;

				if(inputtxt.length > 0) {
				
					if(format.test(inputtxt))
					{
					  return false;
					}
					else
					{
						return true;
					}
				}
				else 
					return false;
	},
	getMainColor() {
			return "#9e1d22";
	},
}
export default CommonHelper;




