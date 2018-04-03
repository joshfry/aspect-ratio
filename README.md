# Aspect Ratio helper functions

| Method | Description |
| :--- | :--- |
| `getGcd(w, h)` | Returns greatest common denominator as a number. |
| `getFraction(w, h);` | Returns an object: `{ nominator, denominator }`.
| `getAspectRatioString(w, h);` | Returns a string, like: `"4:3"` |
| `getAspectRatioPercentage(w, h);` | Returns aspect ratio percentage as a number `>= 1`. |

## Install

- **[npm](https://www.npmjs.com/package/@joshfry/aspect-ratio)** ```$ npm i @joshfry/aspect-ratio```
- **[yarn](https://yarnpkg.com/en/package/@joshfry/aspect-ratio)** ```$ yarn add @joshfry/aspect-ratio```

## Usage

```
import { getAspectRatioPercentage } from '@joshfry/aspect-ratio';
const aspectRatioPercentage = getAspectRatioPercentage(w, h);
```

## Test

Install Jest globally with `npm i jest-cli -g` and run `jest`.
