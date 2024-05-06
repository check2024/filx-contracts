require("@nomicfoundation/hardhat-toolbox");

const PRIVATE_KEY = ""
const BROWSER_API_KEY = "xxx"
module.exports = {
    solidity: "0.8.2",
    settings: {
        optimizer: {
            enabled: true,
            runs: 200
        }
    },
    networks: {
        bscMainNet: {
            url: "https://bsc.publicnode.com",
            accounts: [`0x${PRIVATE_KEY}`]
        }
    },
    etherscan: {
        apiKey: {
            bscMainNet: `${BROWSER_API_KEY}`
        },
        customChains: [
            {
                network: "bscMainNet",
                chainId: 56,
                urls: {
                    apiURL: "https://api.bscscan.com/api",
                    browserURL: "https://bscscan.com/"
                }
            }
        ]
    }
};