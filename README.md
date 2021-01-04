## npmFunctions

Moving my common functions to it's own separate npm package

## Reference posts I've used to cobble up my package:
https://medium.com/cameron-nokes/the-30-second-guide-to-publishing-a-typescript-package-to-npm-89d93ff7bccd
https://github.com/tonysneed/Demo.VSCode.TypeScript/issues/2

and finally:
https://indepth.dev/posts/1164/configuring-typescript-compiler


## Current goal
I have functions in src\arrayServices.ts and interfaces in src\IReUsableInterfaces.ts
I want to be able to use them in my SPFx projects as common code like other libraries:

```bash
npm install @mikezimm\npmFunctions
```
then import the function(s) in my other projects ts files like:

```typescript
import { convertNumberArrayToRelativePercents } from "@mikezimm\npmFunctions";
```

and then use in those projects like:
```typescript
let numberArray = [1,1,2]
let relPercents = convertNumberArrayToRelativePercents( numberArray, true );
console.log( relPercents ); //This would show result of [25,25,50]

let numberArray2 = [1,1,3]
let relPercents2 = convertNumberArrayToRelativePercents( numberArray2, true );
console.log( relPercents2 ); //This would show result of [20,20,60]
```


### Building this package

```bash
npm config set init-author-name "Mike Zimmerman"
npm set init-liscense "ISC"
npm init --scope=@mikezimm
tsc --init
tsc
npm install @pnp/spfx-controls-react
npm install @types/webpack-env
npm install @types/es6-promise
```

### Attempting to get my src into dist folder
```bash

gulp build //did not work
npm install gulp
gulp build

PS C:\Users\mike.zimmerman\projects\Git\npmFunctions> gulp
ReferenceError: build is not defined
    at Object.<anonymous> (C:\Users\mike.zimmerman\projects\Git\npmFunctions\gulpfile.js:6:1)
    at Module._compile (module.js:652:30)
    at Object.Module._extensions..js (module.js:663:10)
    at Module.load (module.js:565:32)
    at tryModuleLoad (module.js:505:12)
    at Function.Module._load (module.js:497:3)
    at Module.require (module.js:596:17)
    at require (internal/module.js:11:18)
    at requireOrImport (C:\Users\mike.zimmerman\AppData\Roaming\nvm\v8.11.0\node_modules\gulp\node_modules\gulp-cli\lib\shared\require-or-import.js:19:11)
    at execute (C:\Users\mike.zimmerman\AppData\Roaming\nvm\v8.11.0\node_modules\gulp\node_modules\gulp-cli\lib\versioned\^4.0.0\index.js:37:3)
```

finally ran
```bash
tsc 
```

and got 
```bash
src/arrayServices.ts:41:50 - error TS7006: Parameter 'keyNo' implicitly has an 'any' type.

41 export function stringifyKeyValue( thisOne: any, keyNo, delimiter : string ) {
                                                    ~~~~~

src/arrayServices.ts:78:33 - error TS7006: Parameter 'sourceArray' implicitly has an 'any' type.

78 export function spliceCopyArray(sourceArray, startDel, countDelete, startAddOrigPos, addArray) {
                                   ~~~~~~~~~~~

src/arrayServices.ts:78:46 - error TS7006: Parameter 'startDel' implicitly has an 'any' type.

78 export function spliceCopyArray(sourceArray, startDel, countDelete, startAddOrigPos, addArray) {
                                                ~~~~~~~~

src/arrayServices.ts:78:56 - error TS7006: Parameter 'countDelete' implicitly has an 'any' type.

78 export function spliceCopyArray(sourceArray, startDel, countDelete, startAddOrigPos, addArray) {
                                                          ~~~~~~~~~~~

src/arrayServices.ts:78:69 - error TS7006: Parameter 'startAddOrigPos' implicitly has an 'any' type.

78 export function spliceCopyArray(sourceArray, startDel, countDelete, startAddOrigPos, addArray) {
                                                                       ~~~~~~~~~~~~~~~

src/arrayServices.ts:78:86 - error TS7006: Parameter 'addArray' implicitly has an 'any' type.

78 export function spliceCopyArray(sourceArray, startDel, countDelete, startAddOrigPos, addArray) {
                                                                                        ~~~~~~~~

src/arrayServices.ts:80:9 - error TS7034: Variable 'whole' implicitly has type 'any[]' in some locations where its type cannot be determined.

80     let whole = [];
           ~~~~~

src/arrayServices.ts:86:15 - error TS7005: Variable 'whole' implicitly has an 'any[]' type.

86       whole = whole.concat(addArray);
                 ~~~~~

src/arrayServices.ts:128:40 - error TS7006: Parameter 'sourceArray' implicitly has an 'any' type.

128 export function doesObjectExistInArray(sourceArray, objectProperty : string, propValue, exact : boolean = true ){
                                           ~~~~~~~~~~~

src/arrayServices.ts:128:78 - error TS7006: Parameter 'propValue' implicitly has an 'any' type.

128 export function doesObjectExistInArray(sourceArray, objectProperty : string, propValue, exact : boolean = true ){
                                                                                 ~~~~~~~~~

src/arrayServices.ts:227:25 - error TS7017: Element implicitly has an 'any' type because type '{}' has no index signature.

227                         objectToUpdate[compareKey] = foundTag;
                            ~~~~~~~~~~~~~~~~~~~~~~~~~~

src/arrayServices.ts:481:41 - error TS7006: Parameter 'arr' implicitly has an 'any' type.

481 export function removeItemFromArrayOnce(arr, value) {
                                            ~~~

src/arrayServices.ts:481:46 - error TS7006: Parameter 'value' implicitly has an 'any' type.

481 export function removeItemFromArrayOnce(arr, value) {
                                                 ~~~~~

src/arrayServices.ts:505:40 - error TS7006: Parameter 'arr' implicitly has an 'any' type.

505 export function removeItemFromArrayAll(arr, value) {
                                           ~~~

src/arrayServices.ts:505:45 - error TS7006: Parameter 'value' implicitly has an 'any' type.

505 export function removeItemFromArrayAll(arr, value) {
                                                ~~~~~
```


Then I fixed all the errors and updated the tsconfig to
```json
{
  "compilerOptions": {
            //"rootDir": ".",
        "outDir": "./dist",
    }
}
```

Then reran this from the Git\npmFunctions folder in command prompt, and got all files in the dist folder
```bash
tsc 
```


This package produces the following:

* lib/* - intermediate-stage commonjs build artifacts
* dist/* - the bundled script, along with other resources
* deploy/* - all resources which should be uploaded to a CDN.
