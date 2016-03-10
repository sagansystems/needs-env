# needs-env

Throws an error when environment variables are not defined.

## Usage

```js
var needsEnv = require('needs-env');
needsEnv('ENV_VAR', 'OTHER_ENV_VAR').onProd('PROD_ONLY_ENV_VAR');
```

## API

`needsEnv(string, string...)` - will throw if any of the passed strings is not
present in `process.env`.

`needsEnv().onProd(string, string...)` - will throw if any of the passed strings
is not present in `process.env` and `process.env.NODE_ENV === 'production'`

## Install

```
npm install --save https://github.com/sagansystems/needs-env.git
```
