// SPDX-License-Identifier: MIT
pragma solidity >=0.8.7;

import"ICar.sol";

contract Coupe is ICar{
    uint public startsSoFar;
    string constant sound = "Silence";

   constructor(){
       startsSoFar = 0;
   }

    function startCar() external override {
        emit StartCar(sound, startsSoFar);
        startsSoFar += 1;
    }

}