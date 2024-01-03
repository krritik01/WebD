// SPDX-License-Identifier: MIT
pragma solidity >=0.8.7;

import "Coupe.sol";
import "Car.sol";
import "ICar.sol";

contract CarFactory {

   event CarCreated(address carAddress);

   function createCoupe() external  {
      ICar coupeAddress =  new Coupe();
      emit CarCreated(address(coupeAddress));
   }

   function createCar(string memory startSound) external {
       ICar carAddress =  new Car(startSound);
       emit CarCreated(address(carAddress));
   }

   function startCar(ICar carAddress) external {
       carAddress.startCar();
   }

}