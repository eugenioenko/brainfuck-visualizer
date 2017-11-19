### Brainfuck interpreter and visualizer

> A basic implementation of the isoteric programing language done in javascript. Includes a visualizer of a state machine that interpretes the brainfuck instructions.

## [Brainfuck Visualizer Online](https://eugenioenko.github.io/brainfuck-visualizer/html/)

### Some details and notes:

* The memory buffer is 100 bytes. Initially the pointer points to the byte 0.
* This interpreter doesn't accepts negative pointer values. But this can be bypassed by setting the initial pointer value to 50 for example
* To avoid infinite loops, the interpreter has a default limit to 5000 instructions.

Memory  will overflow by the byte:
* 255 + 1 => 0
* 0 - 1 => 255