timemachine [![Build Status](https://travis-ci.org/schickling/timemachine.png?branch=master)](https://travis-ci.org/schickling/timemachine)
===========

Test your time-dependent app by monkey patching the `Date` function and **overriding your system time**. Timemachine is compatible with global namespaces, RequireJS, CommonJS and NodeJS.

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

Parameter 		| Description										| Default
---				| ---												| ---
`dateString`	| Date you want set as a string						| `Thu, 01 Jan 1970 00:00:00 GMT`
`timestamp`		| Date you want set as a timestamp					| `0`
`difference`	| Time offset in milliseconds						| `0`
`tick`			| Whether the system clock should continue ticking	| `false`
`keepTime`		| Whether the system time should be kept			| `false`

### Reset
```js
timemachine.reset();
console.log(new Date()); // Your real system time
```
