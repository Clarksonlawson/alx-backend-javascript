// 100-main.js

import { queryAPI, weakMap } from "./100-weak.js";

const endpoint = { protocol: 'http', name: 'getUsers' };

try {
  queryAPI(endpoint);
  console.log(weakMap.get(endpoint));  // 1

  queryAPI(endpoint);
  console.log(weakMap.get(endpoint));  // 2

  queryAPI(endpoint);
  queryAPI(endpoint);
  queryAPI(endpoint);
  queryAPI(endpoint);  // This should throw an error
} catch (error) {
  console.error(error.message);
}

