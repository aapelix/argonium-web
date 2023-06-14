# Validate Email

In this function, we define a regular expression pattern emailRegex that matches the structure of a typical email address. The pattern ^[^\s@]+@[^\s@]+\.[^\s@]+$ breaks down as follows:

- `^` asserts the start of the string.
- `[^\s@]+` matches one or more characters that are not whitespace or @.
- `@` matches the literal @ character.
- `[^\s@]+` matches one or more characters that are not whitespace or @.
- `\.` matches the literal . character.
- `[^\s@]+` matches one or more characters that are not whitespace or @.
- `$` asserts the end of the string.

Finally, we use the test() method of the regular expression object to check if the given email matches the defined pattern. If it does, the function returns true, indicating that the email is valid. Otherwise, it returns false.

## Usage

```js
validateEmail(email);
```

So on the email you need to put a string.

### Example

```js
const { validateEmail } = require("argonium/lib");

const email = "hello@aapelix.dev";
const isValid = validateEmail(email);

console.log(isValid);
```

#### Should return

```
true
```
