# DrakorID Wrapper
A simple Node.JS API Wrapper for DrakorID

# Note
This package is only use ECMAScript 6 or higher

## Installation
using npm
```bash
npm i drakor-id-wrapper
```
using yarn
```
yarn add drakor-id-wrapper
```
github version
```
yarn add github:xct007/drakor-id-wrapper
```

## Usage

```js
// drakor-id-wrapper
import { latest, search, getCategory, getChannel, detail } from "drakor-id-wrapper";

// Get latest drakor
const latestDrakor = await latest();

// Search drakor
const searchDrakor = await search("drakor");

// Get category by category_id / cid
const opts = {
  page: 1,
  count: 10,
};
const category = await getCategory(1123, opts);

// Get channel by channel_id / chid
const opts = {
  page: 1,
  count: 10,
};
const channel = await getChannel(1234, opts);

// alternative way for getChannel/getCategory
const c_ch_id = 1234;
const data = await detail(c_ch_id);

```

## Test
```bash
yarn test
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](https://choosealicense.com/licenses/mit/)