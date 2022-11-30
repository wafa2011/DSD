// SPDX-License-Identifier: MIT
pragma solidity ^0.5.16;


interface requestActionsInterface  {
	   function searchDesc(string calldata category,string calldata security,string calldata legal,uint gas) external view returns(address[] memory);

	  
}