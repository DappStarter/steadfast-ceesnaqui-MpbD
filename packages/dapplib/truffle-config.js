require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict permit flame silver gravity rifle spawn property grace clog swear seek'; 
let testAccounts = [
"0x3aeeffc53cf92ef18623710aec1a6dc3ecc986e7b7ad0b30af22332aed8100b1",
"0x65d9b0bcb0822fbe51d689d3cc26a034029f1714f749736b28bf3c4a8a61eff7",
"0xb897c02afb4e9648eae49d19a3621830b3a9a1aea7bccf79c4e5edcddc5d645b",
"0x18503a069f1be0424b8056c40ace12afbbd507616b7a23483c4c6ebda8ba0686",
"0x7f84f991a5624b37b3a2ccf657ca9d59106a981b8b6325f63492e0146e4187f9",
"0x1a104ec3b58bbdc598895a9ed0361a4cfb67b7cfbda6f11eca6580de91cee5f4",
"0xf9d38e30f158d688b6316fd78becff482d3e60b0bf63d2d6daf28157b93bdd64",
"0xd56945ac05db4c4469f0ce61f52511b8362212ec32aa86af29cbe3b85da41ce2",
"0xf541abc9773bebe412d57a1eb67ae20f8aa6cbd4d043264943dd444ad96d35a0",
"0xc3d0dc7b8254bedbc567ed8ccdd821f52fa2cdf2056874113fe1abb030bfdeac"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


