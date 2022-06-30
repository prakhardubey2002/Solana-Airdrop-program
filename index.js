const {
    Connection,//package for intialising connection to devenet and testnet
    PublicKey,//decrepyter for generated public key
    clusterApiUrl,//provide url of devnet for connection package
    Keypair,//for itialisinh wallet
    LAMPORTS_PER_SOL//lamports are fraction of sol ,1000000000lamport = 1 SOL
} = require("@solana/web3.js")
const wallet = new Keypair()
const publicKey = new PublicKey(wallet._keypair.publicKey);
const secretKey = wallet._keypair.secretKey;

// console.log(publicKey);
// console.log(secretKey);
const getWalletBalance = async () => {
    try {
        const connection = new Connection(clusterApiUrl('devnet'),'confirmed');//connection to devenet intialised
        const WalletBalance= await connection.getBalance(publicKey);
        console.log(`Wallet balance is ${WalletBalance}`);
    } catch (err) {
        console.error(err)//error thrown to console if any
    }
}
const main= async () =>{
    await getWalletBalance()
}
main();
