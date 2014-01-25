timemachine [![Build Status](https://travis-ci.org/schickling/timemachine.png?branch=master)](https://travis-ci.org/schickling/timemachine)
===========

Test your time critical app by overriding the native Javascript Date function. Timemachine is compatible with global namespaces, RequireJS, CommonJS and NodeJS.

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

### Config parameters

Parameter 		| Description						| Example
---				| ---								| ---
`dateString`	| Date you want set as a string		| `December 25, 1991 13:12:59`
`timestamp`		| Date you want set as a timestamp	| `693663179000`
`difference`	| Time offset in milliseconds		| `10000`