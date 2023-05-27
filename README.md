# Time

```js
import * as Time from './Time';

const callback = () => {
  console.log('Callback executed!');
};

// Example 1: Using executeAt
const timestamp1 = Date.now() + 5000; // 5 seconds from now
Time.executeAt(timestamp1, callback);

// Example 2: Using executeAfter
Time.executeAfter(5000, callback);

// Example 3: Using waitUntil
const timestamp2 = Date.now() + 5000; // 5 seconds from now
await Time.waitUntil(timestamp2);

// Example 4: Using wait
await Time.wait(5000);
```
