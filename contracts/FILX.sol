// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";

contract FILX is ERC20, ERC20Burnable {
    constructor(address to, uint256 amount)ERC20("FILX", "FILX")
    {
        _mint(to, amount);
    }
}
