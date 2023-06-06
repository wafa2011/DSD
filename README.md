# DSR-PLATFORM : Overview
A Distributed Smart Registry on the Blockchain For UDL-SC smart contracts descriptions. 
# UDL-SC smart contracts descriptions
 The UDL-SC smart contracts descriptions luangage is an extension of the USDL for service description on the web. the UDL-SC provides a comprehensive and rich description of smart contract that covers functional and non-functional parameters. The UDL-SC covers functional properties such as the interface of the contract. As well aswe enriched it with non-functional properties such as QoS,legal, and security meta-data. These metadata are important to integrate since they minimize the ambiguity and the im-precision of the smart contract.
(PDF) Towards a Uniform Description Language for Smart Contract. Available from: https://www.researchgate.net/publication/355945388_Towards_a_Uniform_Description_Language_for_Smart_Contract [accessed Jan 30 2023].
#Here are the steps to download, replicate, and use our DSD
# 1) Device Configuration 
1.  Node.js installation  if you have node already installed by going to your terminal and typing:
--  $ node -v
2. Truffle Framework,
which allows us to build decentralized applications on the Ethereum blockchain.
It provides a suite of tools that allow us to write smart contacts with the
Solidity programming language. It also enables us to test our smart con-
tracts and deploy them to the blockchain. It also gives us a place to
develop our client-side application.
You can install Truffle with NPM in your command line like this:
$ npm install -g truffle
3. Install  Ganache, a local in-memory blockchain.
You can install Ganache by downloading it from the Truffle Framework
website. It will give us 10 external accounts with addresses on our local
Ethereum blockchain. Each account is preloaded with 100 fake ether.
4. Insatall Metamask extension for Google Chrome. 

# 2) Clone or fork DSD-PROJECT
 --   git clone https://github.com/wafa2011/DSD.git
extract the contents of the ZIP file to your desired location. After that, explore the project.
# 3) Install dependencies
-- cd ethereum-boilerplate
-- yarn DSD
# 4) Configuring the  polygon L2 side chain, we get test MATIC tokens for the test
• Step 1: Copy the ERC-20 wallet address from the MetaMask extension.
• Step 2: Access the following website: https://faucet.matic.network/
• Step 3: Select token: MATIC Token
• Step 4: Paste your ERC-20 wallet address
• Step 5: Click submit and then click confirm.
• Step 6: If the transfer is not successful on the first attempt, click confirm
again or if required multiple times to make sure it is successful.
# 5) Run the DSD 
-- yarn start
# 6) Testing
To run tests, navigate to /test/DSD and run: truffle test
# 7) Deployoment to Ethereum network and Verification

