# vue-filters
Custom filters for VueJS

Feel free to use it. If you do that, please star/watch to show me that.

# Usage

If you are using single file components with e.g. Webpack,
you have to copy filters which you want to your e.g. `src/filters/` folder and add in `main.js` following line (example for `timeOnly`):

`Vue.filter('timeOnly', require('./filters/timeOnly'))`
## Dependencies
Most of these filters require [momentJS](https://www.momentjs.com)

# Future
If there will be interest, I will develop more filters and make it available as npm package.