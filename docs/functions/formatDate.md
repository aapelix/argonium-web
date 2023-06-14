# Format Date

Formats a date to a string using the specified format.

## Usage

```js
formatDate(date, format);
```

So on the date you need to put a date object, and on the format you need to put a string with the format you want to use.

### Example

```js
const { formatDate } = require("argonium/lib");

const formattedDate = formatDate("2022-09-10", "DD/MM/YYYY");
console.log(formattedDate);
```

#### Should return

```
10/09/2022
```

For the format you can use almost everything.

DD = Days
MM = Months
YYYY = Years

So your format can be like these examples and many more:

```
DD/MM/YYYY
MM.DD, YYYY
DD-MM-YYYY
YYYY, MM/DD
```
