/*----init----*/
var isMobileEnvironment = /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|OperaMini/i.test(navigator.userAgent);
var userAgentTablet = navigator.userAgent.toLowerCase();
if (isMobileEnvironment && (userAgentTablet.search("android") > -1) && !(userAgentTablet.search("mobile") > -1)){
	isMobileEnvironment=false;
}
userAgent = window.navigator.userAgent.toLowerCase();
safari = /safari/.test( userAgent );
ios = /iphone|ipod|ipad/.test( userAgent );
ipad = /ipad/.test( userAgent );
//PARA APP TABLES ANDROID = VERSION MOVIL
if( userAgent.search("Mozilla/5.0 (Linux; U; Android 4.0.4; es-es; GT-P7510 Build/IMM76D) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Safari/534.30") > -1 ) {
	isMobileEnvironment=false;
}