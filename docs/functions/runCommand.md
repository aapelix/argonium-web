# Run command

Makes the user execute a command in the terminal.

## Usage

```bash
runCommand(command);
```

So on the command you need to put a string.

### Example

```js
const { runCommand } = require("argonium/lib");

runCommand("npm install argonium");
```

#### Should execute

```bash
npm install argonium
```
