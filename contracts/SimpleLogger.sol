// SPDX-License-Identifier: MIT

pragma solidity 0.8.16;

contract SimpleLogger{
    
    event Log1();
    event Log2();

    function emitLog1() external {
        emit Log1();
    }

    function emitLog2() external {
        emit Log1();
    }

    function emitLogs12() external {
        emit Log1();
        emit Log2();
    }
}