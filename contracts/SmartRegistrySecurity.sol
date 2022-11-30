// SPDX-License-Identifier: MIT
pragma solidity ^0.5.16;
contract SmartRegistrySecurity{
	struct CONTACT{
	String phone ;
	String email;
	}
	struct provider{
		String name;
		String key;
		String domain;
		CONTACT contact;
	}
	
	// Store provider 
        mapping(name => provider) public providers;

function SignIn (String Name, String KEY, String Domain, CONTACT contact) private {
        providerCount ++;
        provider memory p = providers[name];
		p.name = Name;
		p.key = KEY;
		p.domain = Domain;
		p.CONTACT = contact;
		providers[nom] = p;
    }

function logIn(String key)private{
	provider memory p = providers[name];
	if (p.key== address(0)) {
		//passer a la page web SRS
}else{
	//passer a la page SignIn
}
}}