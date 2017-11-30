### Brainfuck interpreter and visualizer

> A basic implementation of the isoteric programing language done in javascript. Includes a visualizer of a state machine that interpretes the brainfuck instructions.

## [Brainfuck Visualizer Online](https://eugenioenko.github.io/brainfuck-visualizer/html/)

### Some details and notes:

* The memory buffer is 100 bytes long. Initially the pointer points to the byte 0.
* The memory buffer pointer accepts negative values, it will negative overflow from 0 to 100;
* To avoid infinite loops, the interpreter has a default limit to 5000 instructions.
* Memory bytes will overflow as a byte:
  * 255 + 1 => 0
  * 0 - 1 => 255
