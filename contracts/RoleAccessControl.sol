// SPDX-License-Identifier: MIT
pragma solidity ^0.5.16;
contract RoleAccessControl{
    struct user{
        address id;
        bool read;
        bool write;
        bool delet;
    }
    mapping(uint=>user) providers;
}