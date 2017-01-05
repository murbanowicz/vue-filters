/**
 * Created by marek on 17.11.2016.
 */
import moment from 'moment'
module.exports = function (value) {
  return moment(value).format('HH:mm')
}
