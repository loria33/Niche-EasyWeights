

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
			// grey - #a1a1a1
			//blue - #0173a2
	},
	calculateMessageType(C,E,S,myOrgFets,myAllowedFets) {
			let num  = 0;
		
			requestAlertTypes=[];
			const EX = '00000000-0000-0000-0000-000000000000'

			if(E != '#00adee' && C != '#00adee' && S != '#00adee')
				return requestAlertTypes
				
			if(E == '#00adee')
			{
				myAllowedFets.SendEmailMessage && myOrgFets.SendEmailMessage?requestAlertTypes.push(myAllowedFets.SendEmailMessage[0].toString()):requestAlertTypes.push(EX)
			}
			else {
				requestAlertTypes.push(EX)
			}
			if(C == '#00adee')
			{
				myAllowedFets.SendPushMessage  && myOrgFets.SendPushMessage?requestAlertTypes.push(myAllowedFets.SendPushMessage[0].toString()):requestAlertTypes.push(EX)
			}
			else {
				requestAlertTypes.push(EX)
			}
			
			if(S == '#00adee')
			{
				myAllowedFets.SendSmsMessage && myOrgFets.SendSmsMessage?requestAlertTypes.push(myAllowedFets.SendSmsMessage[0].toString()):requestAlertTypes.push(EX)
			}
			else {
				requestAlertTypes.push(EX)
			}

			return requestAlertTypes;
	},

	calculateFetsType(p,s,e,myOrgFets) {
		let num  = 0;
		
			fetsTypes=[];
			const EX = '00000000-0000-0000-0000-000000000000'

			if(p == false && s == false &&  e == false)
				return fetsTypes

			else {
					if(p)
					{
						fetsTypes.push(myOrgFets.ReceivePush[0].toString());
					}
					else {
						fetsTypes.push(EX)
					}
					if(s)
					{
						fetsTypes.push(myOrgFets.ReceiveSms[0].toString());
					}
					else {
						fetsTypes.push(EX)
					}
					if(e)
					{
						fetsTypes.push(myOrgFets.ReceiveEmail[0].toString());
					}
					else {
						fetsTypes.push(EX)
					}
			}
			return fetsTypes;

	},
	messageVia(C,E,S,align) {
		let num  = 0;
	
		messageVia=[];
		const EX = '0'

		if(E != '#00adee' && C != '#00adee' && S != '#00adee')
			return  '';
		
		if(E == '#00adee')
		{
			messageVia.push(align=='left'?'Email':'מייל')
		}
		if(C == '#00adee')
		{
			messageVia.push(align=='left'?'Push Notification':'תשגורת')	
		}
		if(S == '#00adee')
		{
			messageVia.push(align=='left'?'SMS':'הודעה')	
		}
	
		return messageVia.toString();
},
}
export default CommonHelper;




