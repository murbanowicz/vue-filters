/**
 * Created by marek on 17.11.2016.
 */
module.exports = function (value, digits) {
  // digis specifies how many digits you want after comma, e.g. 2 will give you from 3.145021 -> 3.14
  if (digits) {
    return Math.round(value * Math.pow(10, digits)) / Math.pow(10, digits)
  }
  else {
    return Math.round(value)
  }
}
