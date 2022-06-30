const {
    Connection,//package for intialising connection to devenet and testnet
    PublicKey,//decrepyter for generated public key
    clusterApiUrl,//package for sending and recieving sol and lamports
    Keypair,//for itialisinh wallet
    LAMPORTS_PER_SOL//lamports are fraction of sol ,1000000000lamport = 1 SOL
} = require("@solana/web3.js")
const wallet= new Keypair()
const publicKey= new PublicKey(wallet._keypair.publicKey) ;
const secretKey=wallet._keypair.secretKey;

console.log(publicKey);
console.log(secretKey);
