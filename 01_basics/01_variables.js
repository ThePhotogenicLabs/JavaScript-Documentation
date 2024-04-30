const accountId = 144553;
let accountEmail = 'test@gmail.com';
var accountPassword = '12345';
accountCity = 'Bengaluru';
let accountState;

// accountId = 2;

accountEmail = 'naveen@naveen.com';
accountPassword = '51242425';
accountCity = 'Chennai';

console.log(accountId);

/*
   Prefer not to use var
   because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])