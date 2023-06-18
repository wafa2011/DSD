import { useState, useEffect } from "react";
import "./App.css";
import WithSubnavigation from "./Navbar/Navbar";
import PublishDescription from "./pages/PublishDescription";
import GetDescription from "./pages/GetDescription";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import { ethers } from "ethers";
import dsdContract from "./smartContract/dsdContract.json";

function App() {
  const [displayedPage, setDisplayedPage] = useState(0);

  const [account, setAccount] = useState("");
  const [contract, setContract] = useState();
  const [userConnected, setUserConnected] = useState(true);
  const userStatus = localStorage.getItem("connected");
  const { ethereum } = window;
  const connectMetamask = async () => {
    if (window.ethereum !== "undefined") {
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      setAccount(accounts[0]);
    }
  };
  const connectContract = async () => {
    const Address = "0xe3e47b9762ec2e8bed7a44d8d8b6fd59dfe0ed5f";
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const newContract = new ethers.Contract(Address, dsdContract, signer);
    setContract(newContract);
  };

  useEffect(() => {
    connectMetamask();
  }, []);
  useEffect(() => {
    account && connectContract();
  }, [account]);

  useEffect(() => {
    userStatus && setUserConnected(true);
  }, [userStatus]);
  const currentCompoenent = () => {
    switch (displayedPage) {
      case 0:
        return <PublishDescription contract={contract} />;
      case 1:
        return <GetDescription contract={contract} />;
      case 2:
        return (
          <SignIn contract={contract} setUserConnected={setUserConnected} />
        );
      case 3:
        return <SignUp contract={contract} />;
      default:
        <PublishDescription contract={contract} />;
    }
  };
  return (
    <>
      <WithSubnavigation
        setDisplayedPage={setDisplayedPage}
        contract={contract}
        userConnected={userConnected}
        setUserConnected={setUserConnected}
      />
      {currentCompoenent()}
    </>
  );
}

export default App;
