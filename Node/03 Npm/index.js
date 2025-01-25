const {format} = require('date-fns');
/* package to generate a unique id each time */
const {v4: uuid}  = require('uuid')
const date = format(new Date(), 'yyyy\tMM\tdd\tHH:mm:ss')
console.log(date)
console.log(uuid())
/* the carrot symbol in front of the pacakge in pacakge.json says:
 "uuid": "^11.0.5"
 11 = major version
 0 = minor version
 5 = patch
 ^ = says 'update the minor version and patch but don't touch the major version.'
  "uuid": "11.0.5"
  if i say this without the patch then the project is goint to run on this version only no change allowed.

   "uuid": "~11.0.5"
   it is allowing to use latest patch version and nothing else

    "uuid": "*"
    it says go ahead and use latest version every time.
*/