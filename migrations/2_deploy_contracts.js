const SmartRegistrySecurity = artifacts.require("SmartRegistrySecurity");

module.exports = function(deployer) {
  deployer.deploy(SmartRegistrySecurity);
};