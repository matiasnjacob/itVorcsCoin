const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("ItVorcsCoin", function () {
  it("Should create the ITV coin with initial supply", async function () {
    const ItVorcContract = await ethers.getContractFactory("ItVorcsCoin");
    const initialSupply = 10;
    const ItVorcsCoin = await ItVorcContract.deploy(initialSupply);
    await ItVorcsCoin.deployed();

    expect(await ItVorcsCoin.totalSupply()).to.equal(initialSupply);
  });
});
