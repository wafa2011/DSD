// SPDX-License-Identifier: MIT
pragma solidity ^0.5.16;


interface providerActionsInterface{
function PublishDesc(uint ContractDescription, address provider) external  ;
function UpdateDesc(uint ContractDescription, address provider) external ;
function DestroyDesc(address contractadr) external;
function contratDetails(string calldata nom)  external view returns(address, uint16);

}