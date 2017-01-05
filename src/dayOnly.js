/**
 * Created by marek on 17.11.2016.
 */
import moment from 'moment'
module.exports = function (value, locale) {
  // locale to be in ISO format e.g. 'pl-PL'
  return moment(value).locale(locale).format('dddd')
}
