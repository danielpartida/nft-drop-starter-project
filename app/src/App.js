import React, { useEffect, useState } from 'react';
import './App.css';
import twitterLogo from './assets/twitter-logo.svg';
import CandyMachine from './CandyMachine';

// Constants
const TWITTER_HANDLE = 'danielpartidag';
const TWITTER_LINK = `https://twitter.com/${TWITTER_HANDLE}`;

const App = () => {

  // States
  const [walletAddress, setWalletAddres] = useState(null);

  // Actions
  const checkIfWalletIsConnected = async () => {
    try {
      const { solana } = window;
      // check if phantom wallet is connected
      if (solana && solana.isPhantom) {
        console.log("Nice! 👻 wallet is connected");
        const response = await solana.connect({ onlyIfTrusted: true });
        console.log(
          "Connected with public 🔑:",
          response.publicKey.toString()
        );
        // set state walletAddress
        setWalletAddres(response.publicKey.toString());
      } else {
        alert("Solana object not found! Get a 👻 wallet https://phantom.app/download");
      }
    } catch (error) {
      console.error("Ups, we could not connect to Phantom wallet", error);
    }
  };

  const connectWallet = async () => {
    const { solana } = window;

    if (solana) {
      const response = await solana.connect();
      const publicKey = response.publicKey.toString()
      console.log("Connected with public 🔑", publicKey);
        setWalletAddres(publicKey)
    }
  };

  const renderNotConnectedContainer = () => {
    return (
      <button
        className='cta-button connect-wallet-button'
        onClick={connectWallet}
      >
      Connect Wallet
      </button>
    )
  };

  // Check once (call checkIfWalletIsConnected) once the page loads
  useEffect(() => {
    const onLoad = async () => {
      await checkIfWalletIsConnected();
    };
    window.addEventListener("load", onLoad);
    return () => window.removeEventListener("load", onLoad);
  }, []);

  return (
    <div className="App">
      <div className="container">
        <div className="header-container">
          <p className="header">🍭 Candy Drop</p>
          <p className="sub-text">NFT drop machine with fair mint</p>
          {!walletAddress && renderNotConnectedContainer()}
        </div>
        {/* Check for walletAddress and then pass in walletAddress */}
        {walletAddress && <CandyMachine walletAddress={window.solana}/>}
        <div className="footer-container">
          <img alt="Twitter Logo" className="twitter-logo" src={twitterLogo} />
          <a
            className="footer-text"
            href={TWITTER_LINK}
            target="_blank"
            rel="noreferrer"
          >{`built by @${TWITTER_HANDLE}`}</a>
        </div>
      </div>
    </div>
  );
};

export default App;