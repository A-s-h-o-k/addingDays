var addDays = require("date-fns/addDays");
const addDaysAfterX = (days) => {
  let result = addDays(new Date(2020, 08, 22), days);
  console.log(result);
};
addDaysAfterX(5);
module.exports = addDaysAfterX;
