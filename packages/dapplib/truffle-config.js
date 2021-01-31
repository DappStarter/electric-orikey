require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace glimpse flee trophy charge ranch remember unusual harvest forest furnace gauge'; 
let testAccounts = [
"0xf5dc9f47a48cb457ba9d8e442a9ceb866b6f71dea012f80b2c83184602b911c0",
"0x74e79975813883d5cce04aded67e0572959251539bc0fd5ef445425436d51580",
"0x82e89611035c002dc8ceefe54dcf0e52191796062a6393f1150f73a35290c316",
"0x1fc35dd43368177bb70a17094dd134000d60f1dc3299a501bcbfa08a1bf9fd4d",
"0xceb3a540e132866759febfb626375444b52c252b32176aee45bbaec3fd96bb26",
"0x306830d1e630633e8fa6ebef4790e0dac8108f911abdf33dcafae8c83bcaf1f5",
"0xc9c4a80161cff3741d06ab1a88f195e97bf5c6aed7b0b8807215e98784680230",
"0x7d706189d8a5b7f9a6e03ba2d131e979795d431273c4f0db6e5df530ad8e1ab9",
"0xee1a7dc7088946fec239d29d72ed9259e6570a398d422284afccdc7ebd34f4ab",
"0xfc6b0fdfe5b7b539878e6d0d877b8bb643d3d3ee8f788eef08e9d510991f3b69"
]; 
let rpcUri = 'https://rpc-mumbai.matic.today';
let wsUri = 'wss://ws-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: rpcUri,
            wsUri: wsUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                rpcUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
