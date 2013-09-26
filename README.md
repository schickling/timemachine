timemachine [![Build Status](https://travis-ci.org/schickling/timemachine.png?branch=master)](https://travis-ci.org/schickling/timemachine)
===========

Test your time critical app by overriding the native Javascript Date function

## Installation
```sh
$ bower install timemachine --save-dev
```

## Usage

```js
timemachine.config({
  dateString: 'December 25, 1991 13:12:59'
});

console.log(new Date()); // December 25, 1991 13:12:59
```

Also compatible with RequireJS, CommonJS, NodeJS, ...
