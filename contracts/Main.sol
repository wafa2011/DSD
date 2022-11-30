// SPDX-License-Identifier: MIT
pragma solidity ^0.5.16;
import "./SmartRegistryService.sol";
import "./SmartRegistryClient.sol";
import "./SmartRegistryData.sol";
import "./SmartRegistrySecurity.sol";

contract Main{
    constructor () public{
        SmartRegistryData srd = new SmartRegistryData();
        SmartRegistrySecurity srsec = new SmartRegistrySecurity();
		SmartRegistryClient src = new SmartRegistryClient();
        SmartRegistryService srs = new SmartRegistryService(srd);
}
}