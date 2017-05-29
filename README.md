# simplif
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
-
sif([pouredSalt, waterBoiling, pouredPasta, timeInWater > 8], () => {
  /* takes out spaghetti */
  /* serves plate */
  /* pours bolognesa */
});
```
