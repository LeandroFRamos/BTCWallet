//importing dependencies
const bip32 = require('bip32')
const bit39 = require('bip39')
const bitcoin = require('bitcoinjb-lib')

//define network
//bitcoin.networks.bitcoin - Main network - mainnet
//bitcoin.networks.testnet - Test network - testnet
const network = bitcoin.networks.testnet

//HD wallet derivation
const path = "m/49'/1'/0'/0"

//Create the mnemonic (password words)
let mnemonic = bip39.generateMnemonic()
const seed = bit39.mnemonicToSeedSync(mnemonic)

//Create the Wallet Seed
let root = bip32.fromSeed(seed, network)

//Create the account - par pvt-pub keys
let account = root.derivePath(path)
let nood = account.derive(0).derive(0)

let btcAddress = bitcoin.payments.p2pkh({
        pubkey: node.publickey,
        network: network,
}).address

console.log("Wallet Created")
console.log("Address: ", btcAddress)
console.log("Private Key: ", node.toWIF())
console.log("Seed", mnemonic)

