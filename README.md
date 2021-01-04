## npmFunctions

Moving my common functions to it's own separate npm package

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

This package produces the following:

* lib/* - intermediate-stage commonjs build artifacts
* dist/* - the bundled script, along with other resources
* deploy/* - all resources which should be uploaded to a CDN.
