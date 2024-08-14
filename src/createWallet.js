// Importing dependencies
const bip32 = require('bip32')
const bip39 = require('bip39')
const bitcoin = require('bitcoinjs-lib')

// Define the network
// Bitcoin - main network - mainnet
// Testnet - test network - testnet
const network = bitcoin.networks.testnet

// HD wallet derivation path
const path = `m/49'/1'/0'/0`

// Creating the mnemonic for the seed (password phrases)
let mnemonic = bip39.generateMnemonic()
const seed = bip39.mnemonicToSeedSync(mnemonic)

// Creating the root of the HD wallet
let root = bip32.fromSeed(seed, network)

// Creating an account - pair of private-public keys
let account = root.derivePath(path)
let node = account.derive(0).derive(0)

let btcAddress = bitcoin.payments.p2pkh({
    pubkey: node.publicKey,
    network: network,
}).address

console.log("Wallet generated")
console.log("Address: ", btcAddress)
console.log("Private Key:", node.toWIF())
console.log("Seed:", mnemonic)
