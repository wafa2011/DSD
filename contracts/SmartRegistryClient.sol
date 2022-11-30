// SPDX-License-Identifier: MIT
pragma solidity ^0.5.16;
import "./requestActionsInterface.sol";
import "./SmartRegistryData.sol";
contract SmartRegistryClient is requestActionsInterface{
     SmartRegistryData.SCDATA[]  SRD;
	 address proprietaire;

	constructor (SmartRegistryData srd) public{
		proprietaire = msg.sender;
        SRD = srd.getsrd();
      }

function searchDesc(string calldata category,string calldata security,string calldata legal,uint gas) external view returns(address[] memory){
 address[] storage contracts = new address[](500);
 uint j=0;
 for(uint i = 0;i<10000;i++){
	 if (SRD[i].getname(i) == category){
	     if(filterBylegal(SRD[i])== true) {
			 if(filterBySecurity(SRD[i])==true){
				 if(filterbygas(gas)){
                          contracts[j]==SRD[i].addreess(i);
				 }
			 }

	}
 }}
 return contracts;
}

function filterBylegal(SmartRegistryData.SCDATA memory desc) public returns (bool){
	 if (desc[i].getlegalvalue(i) != ""){
	return true;
	 }else{
		 return false;
	 }
}
function filterBySecurity ()public returns (bool){
	 if (desc[i].getsecurityvalue(i) != ""){
	return true;
	 }else{
		 return false;
	 }
}
function filterbygas(uint value) public returns (bool){
	 if (desc[i].getgasvalue(i) == value){
	return true;
	 }else{
		 return false;
	 }
	
}
}