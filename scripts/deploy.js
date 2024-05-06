const {ethers} = require("hardhat")

async function main() {
    const ContractFactory = await ethers.getContractFactory("FILX");
    let to = ""
    let amount = 100000000000000000000000000n
    const instance = await ContractFactory.deploy(to, amount);
    await instance.deployed();
    let address1 = instance.address
    console.log(`Contract deployed to ${address1}`);
    await hre.run("verify:verify", {
        address: address1, constructorArguments: [to, amount]
    })
}


// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
