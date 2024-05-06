const {ethers} = require("hardhat")
const {expect} = require("chai")

describe("MyToken", function () {
    it("Test contract", async function () {
        const ContractFactory = await ethers.getContractFactory("FILX");
        const initialOwner = (await ethers.getSigners())[0].address;
        let amount = 100000000000000000000000000n
        const instance = await ContractFactory.deploy(initialOwner, amount);
        await instance.deployed();

        expect(await instance.name()).to.equal("FILX");
        expect(await ContractFactory.attach(instance.address).balanceOf(initialOwner)).to.equal(amount);

    });
});
