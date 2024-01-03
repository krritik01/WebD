// SPDX-License-Identifier: MIT
pragma solidity >=0.8.7;

import "ICar.sol";

contract Car is ICar{

    string public startSound;
    uint public startsSoFar;

    constructor(string memory _startSound) {
            startSound = _startSound;
            startsSoFar = 0;
    }

    function startCar() external override {
            startsSoFar += 1;
            emit StartCar(startSound, startsSoFar);
    }

}