# DrakorID Wrapper
A simpe API Wrapper for DrakorID

# Note
This package is only use ECMAScript 6 or higher

## Installation

```bash
yarn add github:xct007/drakor-api-wrapper
```

## Usage

```js
// drakor-id-wrapper
import { latest, search, getCategory, getChannel, detail } from "src/index.js";

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

## License
[MIT](https://choosealicense.com/licenses/mit/)