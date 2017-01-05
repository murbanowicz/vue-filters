# vue-filters
Custom filters for VueJS

Feel free to use it. If you do that, please star/watch to show me that.

# Available filters
1. dateAndDay - shows date and day name
2. dateOnly - shows only date. Useful when you have dateTime values from DB
3. dayOnly - shows only day name from dateTime
4. timeOnly - shows only time from dateTime
5. truncate(length) - self explainable. 
6. round(digits) - round number to limited number of digits. `if(!digits)` round without any digit after comma.

# Usage

If you are using single file components with e.g. Webpack,
you have to copy filters which you want to your e.g. `src/filters/` folder and add in `main.js` following line (example for `timeOnly`):

`Vue.filter('timeOnly', require('./filters/timeOnly'))`
## Dependencies
Most of these filters require [momentJS](https://www.momentjs.com)

# Future
If there will be interest, I will develop more filters and make it available as npm package.