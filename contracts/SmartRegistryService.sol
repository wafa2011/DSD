// SPDX-License-Identifier: MIT
pragma solidity ^0.5.16;
import "./providerActionsInterface.sol";
import "./SmartRegistryData.sol";

contract SmartRegistryService is providerActionsInterface{
   address contractAdresse;
	address proprietaire;
   SmartRegistryData.SCDATA[]  SRD;
     event DescriptionPublished(string _msg);
		event DescriptionUpdated (string _msg);
		event NotExist (string _msg);
		event Deleted (string _msg);
	constructor (SmartRegistryData srd) public{
		proprietaire = msg.sender;
        SRD = srd.getsrd();
      }

modifier ProviderOnly() {
		require(msg.sender == proprietaire);
      _;
	}


function PublishDesc(string memory ContractDescription, address provider) public ProviderOnly  payable{
      SRD[providerAdress] = ContractDescription;
		emit DescriptionPublished(" smart contract published successfully!");
}
    


}