// SPDX-License-Identifier: MIT
pragma solidity >=0.8.7;
 
interface ICar {
    event StartCar(string sound, uint startNumber);
    function startCar() external;
}