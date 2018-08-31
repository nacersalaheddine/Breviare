# Breviare

Breviare is a minimalist URL shortener made in Javascript (NodeJS / ExpressJS / MongoDB / Ajax).

## Config

For it to works properly, it is recommended to create a config.js file in the root directory that contains the db connection

```javascript
var config = {};

config.dbconnection = 'dbconnectionurl';

module.exports = config;
```
