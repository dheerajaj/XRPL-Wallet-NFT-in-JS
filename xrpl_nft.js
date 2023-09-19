// const { Wallet, Client, AccountNFTs, NFTokenCreateOfferFlag } = require('xrpl');
// const { RippleAPI } = require('ripple-lib');


// const JSON_RPC_URL = 'wss://s.altnet.rippletest.net';

// (async () => {
//     try {

//         const seed = 'sEdTcpfZ5CVqm6sxc86ZVmhjsE4L3GM'; //Replace YOur Seed Here


//         if (seed === '') {
//             console.log('Please update the seed with a valid XRPL account seed.');
//             return;
//         }

//         // Connect to the XRPL testnet node using xrpl library
//         const client = new Client(JSON_RPC_URL);
//         await client.connect();

//         // Initialize wallet from seed using xrpl library
//         const wallet = Wallet.fromSeed(seed);
//         const address = wallet.classicAddress;

//         console.log(`Connected to Testnet as ${address}`);

//         // Query the account's NFTs using xrpl library
//         const accountNFTRequest = {
//             account: address,
//             command: 'account_nfts'
//         };

//         const accountNFTResponse = await client.request(accountNFTRequest);
//         const accountNFTs = (accountNFTResponse.result.account_nfts);

//         // console.log(`NFTs owned by ${address}:`, accountNFTs);

//         if (accountNFTs.length > 0) {
//             // Create a RippleAPI instance using ripple-lib
//             const rippleAPI = new RippleAPI({ server: 'wss://s.altnet.rippletest.net:51233' });
//             await rippleAPI.connect();
//             console.log('Connected to Ripple Testnet');
//             console.log(`NFTs owned by ${address}:`);
//             for (const nft of accountNFTs) {
//                 console.log(`\nNFT Metadata:
//                 Serial : ${nft.nft_serial}
//                     NFT ID: ${nft.NFTokenID}
//                     URI : ${nft.URI}

//                     `);
//                     //YOu can these fields also
//                     // Issuer: ${nft.Issuer}
//                     // NFT Taxon: ${nft.NFTokenTaxon}


//             }

//             await rippleAPI.disconnect();
//         } else {
//             console.log(`No NFTs found in the account.`);
//         }

//         await client.disconnect();
//     } catch (error) {
//         console.error('Error:', error);
//     }
// })();



// import { Client } from "./node_modules/xrpl/src/client";
//  const Client = require('xrpl')
document.addEventListener("DOMContentLoaded", function () {
    const viewNFTButton = document.getElementById("viewNFTButton");

    viewNFTButton.addEventListener("click", async function () {
        const seedInput = document.getElementById("seedInput").value;
       
       
        if (seedInput === '') {
            console.log('Please enter a valid XRPL account seed.');
            return;
        }

            try {
                const JSON_RPC_URL = 'wss://s.altnet.rippletest.net';
                const client = new Client(JSON_RPC_URL);
                await client.connect();
                const wallet = Wallet.fromSeed(seedInput);
                const address = wallet.classicAddress;

                console.log(`Connected to Testnet as ${address}`);

                const accountNFTRequest = {
                    account: address,
                    command: 'account_nfts'
                };

                const accountNFTResponse = await client.request(accountNFTRequest);
                const accountNFTs = (accountNFTResponse.result.account_nfts);

                if (accountNFTs.length > 0) {
                    const rippleAPI = new RippleAPI({ server: 'wss://s.altnet.rippletest.net:51233' });
                    await rippleAPI.connect();
                    console.log('Connected to Ripple Testnet');
                    console.log(`NFTs owned by ${address}:`);
                    for (const nft of accountNFTs) {
                        console.log(`\nNFT Metadata:
                    Serial : ${nft.nft_serial}
                        NFT ID: ${nft.NFTokenID}
                        URI : ${nft.URI}   `);
                        // You can include these fields as well
                        // Issuer: ${nft.Issuer}
                        // NFT Taxon: ${nft.NFTokenTaxon}
                    }

                    await rippleAPI.disconnect();
                } else {
                    console.log(`No NFTs found in the account.`);
                }

                await client.disconnect();
            } catch (error) {
                console.error('Error:', error);
            }
           
    });
});
