timemachine [![Build Status](https://travis-ci.org/schickling/timemachine.png?branch=master)](https://travis-ci.org/schickling/timemachine)
===========

Test your time critical app by overriding the native Date function and your system clock. Timemachine is compatible with global namespaces, RequireJS, CommonJS and NodeJS.

## Installation

### Bower
```sh
$ bower install timemachine
```

### NPM
```sh
$ npm install timemachine
```

## Usage

### Config
```js
timemachine.config({
  dateString: 'December 25, 1991 13:12:59'
});

console.log(new Date()); // December 25, 1991 13:12:59
```

Parameter 		| Description										| Example						| Default
---				| ---												| ---							| ---
`dateString`	| Date you want set as a string						| `December 25, 1991 13:12:59`	| `Thu, 01 Jan 1970 00:00:00 GMT`
`timestamp`		| Date you want set as a timestamp					| `693663179000`				| `0`
`difference`	| Time offset in milliseconds						| `10000`						| `0`
`tick`			| Whether the system clock should continue ticking	| `true`						| `false`

### Reset
```js
timemachine.reset();
console.log(new Date()); // Your real system time
```