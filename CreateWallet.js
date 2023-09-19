const { ECDSA, Wallet, Client } = require('xrpl');

//TO create a Wallet
async function createWallet() {
    let newWallet = Wallet.generate(ECDSA.ed25519);
    console.log(newWallet);
}

//Funding Wallet

async function fundWallet() {
    let wallet = Wallet.fromSeed("sEd76n72jjBPkNB65E3pMKbDPiMEXi3");
    let xrplClient = new Client("wss://s.altnet.rippletest.net:51233"); // Use wss instead of was for WebSocket connection
    await xrplClient.connect();
    console.log("Are we connected? " + xrplClient.isConnected());
    let result = await xrplClient.fundWallet(wallet);
    console.log(result);
}
createWallet();

fundWallet();
