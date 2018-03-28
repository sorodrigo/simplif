# simplif

[![Greenkeeper badge](https://badges.greenkeeper.io/sorodrigo/simplif.svg)](https://greenkeeper.io/)
> Clean, debuggable solution to verbose if statements

## Installation
In a browser:
```
<script src="simplif.js"></script>
```
Using npm:
```
$ npm i -S simplif
```

## Usage

```
import { simplif as sif } from 'simplif';

// Arrays
sif([pouredSalt, waterBoiling, pouredPasta, timeInWater > 8], () => {
  /* takes out spaghetti */
  /* serves plate */
  /* pours bolognesa */
});

// Objects
const spaghetti = {
  pouredSalt: true,
  waterBoiling: true,
  pouredPasta: true,
  timeInWater: totalTime > 8
};

sif(spaghetti, () => {
  /* takes out spaghetti */
  /* serves plate */
  /* pours bolognesa */
});
```
