"use strict";

let memjs = require("memjs").Client;

let mjs = memjs.create();

exports.getMemcachierKey = (slackUserId, callback) => {
	/*mjs.get(slackUserId, function(err, oauth2Token){
		if( oauth2Token ) {
			callback()
		} else {

		}
	});*/
}

exports.setMemcachierKey = (slackUserId, oauth2Token) => {
	/*mjs.set(slackUserId, JSON.stringify(oauth2Token), function(err) {
		if(err) {
			console.log('err', err);
		} 
	});*/
}