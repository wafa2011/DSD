// SPDX-License-Identifier: MIT
pragma experimental ABIEncoderV2;
import "./RoleAccessControl.sol";
contract SmartRegistryData{
    constructor () public{
		RoleAccessControl rs = new RoleAccessControl();
}
uint descriptionNumber = 50000;
SCDATA[]  public descriptions = new SCDATA[](descriptionNumber);
struct provider{
	string id ;
	string role;
	string publicKey;
   // rs.user providerRole;

}
// Store provider 
        mapping(uint => provider) public providers;
 //BusnissPerspective       
struct BusnissPerspective {
			string adress;
			string creationDate;
			string UpdateDate;
			string typeB;
			string category ;
			string abiB ;
			string bin; 
			string discription ;
			string usedCompiler ;
			string usedRessources ;
			string userInterface ; 
			string FutureUserTupe;
			string provideradress;
			string consumerProfileadress;
		    qosCharacteristics qoschara;
		}
		struct qosCharacteristics{
			//serviceLevel 
			 string latency;
			 string gazConsumation;
			//pricing 
			string token;
			string price;
			//securityn 
			string signed; 
			string tested; 
			string deployed;
			//legal 
			string legalname; 
			string legaltype;
		}
	
//TechnicalPerspective	
    struct TechnicalPerspective {
			string typeP;
			string name; 
			string currency;
			string consenssus;
			string metadaExchangeProtocl;
			address Contractadd;
        }
   
    struct FunctinputOutput{
        string name;
        string t;
    }
     struct eventOutput{
        string name;
        string t;
        bool is_indexed;
    }
    mapping(string => eventOutput) public eventOutputs;
    mapping(string => FunctinputOutput) public FunctinputOutputs;
    FunctinputOutput[] public FunctinputOutputlist;
    eventOutput[] public eventOutputList;

     struct eventContract{
        string name;
        string description;
        string evnttype;
        eventOutput[] eventOutputList;
    }
    struct funtionContract{
        string name;
        string description;
        string Functype;
        string scope;
        FunctinputOutput[] FunctinputOutputList;

    }
    mapping(string => eventContract) public events;
    mapping(string => funtionContract) public functions;
    eventContract[] public eventsList;
    funtionContract[] public functionsList;

//OperationalPerspective
struct OperationalPerspective {
    eventContract[] eventsList;
    funtionContract[] functionsList;   
}

// Model a smart contract description
    struct SCDATA{
      uint id;
	  OperationalPerspective op;
      TechnicalPerspective  tp;
      BusnissPerspective  bp;
}	
	// Store smartcontractdisc that have published
   // mapping(uint => SCD) public smartcontractdiscs;
 mapping(uint => SCDATA)  SCDdATAS;

function getsrd()public returns ( SCDATA[] memory){
	uint i =0;
	SCDATA[] memory descriptions = new SCDATA[](descriptionNumber);
    for (i; i<descriptionNumber; i++) {
    SCDATA storage scdata = SCDdATAS[i];
	descriptions[i] = scdata;
     }
 
 return  descriptions;
}
function getname(uint i) public returns(string memory){
return descriptions[i].tp.name;
}
}