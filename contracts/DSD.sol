// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract DSD {
    struct Description {
        address provider;
        string name;
        string description;
        string category;
        string security;
        string legal;
        uint gasConsumption;
    }

    event Log(string message);

    mapping(uint => Description) public Descriptions;
    uint public descriptionCount;

    struct Provider {
        string username;
        string password;
        bool loggedIn;
    }

    mapping(address => Provider) public providers;
    mapping(address => bool) public consumers;

    modifier onlyProvider() {
        require(bytes(providers[msg.sender].username).length != 0, "Only providers can access this function.");
        _;
    }

    function authenticate(string memory username, string memory password) public view returns(bool) {
        Provider memory provider = providers[msg.sender];
        return (keccak256(bytes(provider.password)) == keccak256(bytes(password))&& keccak256(bytes(provider.username)) == keccak256(bytes(username)));
    }

    function registerProvider(string memory username, string memory password) public {
        require(bytes(providers[msg.sender].username).length == 0, "Provider is already registered.");
        providers[msg.sender] = Provider(username, password, false);
    }

    function signIn(string memory password, address key) public {
        require(authenticate(providers[key].username, password), "Incorrect password.");
        providers[key].loggedIn = true;
    }

    function logIn(address publicKey, string memory password)  public view{
        //address providerAddress = msg.sender;
        Provider storage provider = providers[publicKey];
        require(provider.loggedIn, "Provider is not signed in.");
        require(authenticate(provider.username, password), "Incorrect password.");
    }
       function logOut() public {
        providers[msg.sender].loggedIn = false;
    }

    function PublishDesc(
        string memory _name,
        string memory _description,
        string memory _category,
        string memory _security,
        string memory _legal,
        uint _gasConsumption
    ) public onlyProvider payable {
        address providerAddress = msg.sender;
        Provider storage provider = providers[providerAddress];
        descriptionCount++;
        Descriptions[descriptionCount] = Description(
            providerAddress,
            _name,
            _description,
            _category,
            _security,
            _legal,
            _gasConsumption
        );
        require(provider.loggedIn, "Provider is not signed in.");
        require(authenticate(provider.username, provider.password), "Incorrect password.");
    }

    function getDescription(uint _descriptionId) public view returns (
        address provider,
        string memory name,
        string memory description,
        string memory category,
        string memory security,
        string memory legal,
        uint gasConsumption
    ) {
        Description memory desc = Descriptions[_descriptionId];
        return (
            desc.provider,
            desc.name,
            desc.description,
            desc.category,
            desc.security,
            desc.legal,
            desc.gasConsumption
        );
    }

     function SearchForAllDescription(
        string memory _category,
        string memory _security,
        string memory _legal,
        uint _gasConsumption
    ) public view returns (Description[] memory) {
        uint count = 0;

        // Count the number of matching descriptions
        for (uint i = 1; i <= descriptionCount; i++) {
            Description memory desc = Descriptions[i];
            if (
                keccak256(abi.encodePacked(desc.category)) == keccak256(abi.encodePacked(_category)) &&
                keccak256(abi.encodePacked(desc.security)) == keccak256(abi.encodePacked(_security)) &&
                keccak256(abi.encodePacked(desc.legal)) == keccak256(abi.encodePacked(_legal)) &&
                desc.gasConsumption == _gasConsumption
            ) {
                count++;
            }
        }

        // Create an array to store the matching descriptions
        Description[] memory descriptionList = new Description[](count);

        // Populate the array with the matching descriptions
        uint index = 0;
        for (uint i = 1; i <= descriptionCount; i++) {
            Description memory desc = Descriptions[i];
            if (
                //keccak256(abi.encodePacked(desc.name)) == keccak256(abi.encodePacked(_name)) &&
               //keccak256(abi.encodePacked(desc.description)) == keccak256(abi.encodePacked(_description)) &&
                keccak256(abi.encodePacked(desc.category)) == keccak256(abi.encodePacked(_category)) &&
                keccak256(abi.encodePacked(desc.security)) == keccak256(abi.encodePacked(_security)) &&
                keccak256(abi.encodePacked(desc.legal)) == keccak256(abi.encodePacked(_legal)) &&
                desc.gasConsumption == _gasConsumption
            ) {
                descriptionList[index] = desc;
                index++;
            }
        }

        return descriptionList;
    }
      function searchByProvider(address _providerAddress) public view returns (Description[] memory) {
        uint count = 0;

        // Count the number of descriptions by the provider address
        for (uint i = 1; i <= descriptionCount; i++) {
            if (Descriptions[i].provider == _providerAddress) {
                count++;
            }
        }

        // Create an array to store the descriptions
        Description[] memory descriptionList = new Description[](count);

        // Populate the array with the descriptions by the provider address
        uint index = 0;
        for (uint i = 1; i <= descriptionCount; i++) {
            if (Descriptions[i].provider == _providerAddress) {
                descriptionList[index] = Descriptions[i];
                index++;
            }
        }

        return descriptionList;
    }
}
