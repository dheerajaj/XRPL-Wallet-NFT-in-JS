// const readline = require('readline');
// const xrpl = require("xrpl");
// const Wallet = xrpl.Wallet;
// const Client = xrpl.Client;
// const convertStringToHex = xrpl.convertStringToHex;

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// async function mintNFT(seed) {
//   try {
//     let wallet = Wallet.fromSeed(seed);
//     let client = new Client("wss://s.altnet.rippletest.net/");
//     wallet.sign;
//     await client.connect();
//     let nftMint = {
//       Account: wallet.classicAddress,
//       NFTokenTaxon: 1,
//       TransactionType: "NFTokenMint",
//       // URI: convertStringToHex(uri),
//     };
//     let signedTrx = wallet.sign(nftMint);
//     console.log(signedTrx);
//     let submittedTrx = await client.submit(nftMint, {
//       autofill: true,
//       wallet: wallet,
//     });
//     console.log(submittedTrx);
//   } catch (err) {    console.log(err);
//   }
// }

// rl.question("Enter your XRPL wallet seed: ", (seed) =>
 
//   // rl.question("Enter the URI for the NFT: ", (uri) => 
//   {
//     rl.close();
//     mintNFT(seed);
//   });

//  const xrpl = require("xrpl");
const Wallet = xrpl.Wallet;
 const Client = xrpl.Client;
document.addEventListener("DOMContentLoaded", () => {
  const seedInput = document.getElementById("seed");
  const mintButton = document.getElementById("mintButton");
  const transactionDetails = document.getElementById("transactionDetails");

  mintButton.addEventListener("click", async () => {
    const seed = seedInput.value; // Get the value of the input field

    if (!seed) {
      alert("Please enter a valid XRPL wallet seed.");
      return;
    }

    try {
      // Call the mintNFT function with the entered seed
      await mintNFT(seed);
    } catch (err) {
      console.log(err);
      // Handle errors here and update the UI accordingly
    }
  });

  async function mintNFT(seed) {
    try {
      let wallet = Wallet.fromSeed(seed);
      let client = new Client("wss://s.altnet.rippletest.net/");

      // Your XRPL NFT minting logic starts here
      // For example:
      let nftMint = {
        Account: wallet.classicAddress,
        NFTokenTaxon: 1,
        TransactionType: "NFTokenMint",
        // URI: convertStringToHex(uri),
      };

      // Sign the transaction
      let signedTrx = wallet.sign(nftMint);
      console.log(signedTrx);
      transactionDetails.textContent = JSON.stringify(signedTrx, null, 2);

      // Submit the transaction to the XRPL
      let submittedTrx = await client.submit(nftMint, {
        autofill: true,
        wallet: wallet,
      });

      console.log(submittedTrx);

      // Update the UI with transaction details
      transactionDetails.textContent = JSON.stringify(submittedTrx, null, 2);
      // Your XRPL NFT minting logic ends here
    } catch (err) {
      console.log(err);
      // Handle errors here and update the UI accordingly
    }
  }
});
