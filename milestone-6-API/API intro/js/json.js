const shop = {
    name : 'eStall',
    owner : ['TI Sabbir', 'Mahdi', 'Hasib'],
    shopServices : {
        platform : ['iOs', 'android', 'windows'],
        howOperate : function operation(order){
            console.log('send it to our local agents')
        }
    },
    isProfitable : true,
    monthlyRevenue : 4500000000,
    isOpen : false,

}

console.log(shop); 
/*
{
  name: 'eStall',
  owner: [ 'TI Sabbir', 'Mahdi', 'Hasib' ],
  shopServices: {
    platform: [ 'iOs', 'android', 'windows' ],
    howOperate: [Function: operation]
  },
  isProfitable: true,
  monthlyRevenue: 4500000000,
  isOpen: false
}
*/

const shopJSON = JSON.stringify(shop);
console.log(shopJSON);

/**
 * {"name":"eStall","owner":["TI Sabbir","Mahdi","Hasib"],"shopServices":{"platform":["iOs","android","windows"]},"isProfitable":true,"monthlyRevenue":4500000000,"isOpen":false}
 */

const shopJSONtoObj = JSON.parse(shopJSON);
console.log(shopJSONtoObj);

/**
 * {
  name: 'eStall',
  owner: [ 'TI Sabbir', 'Mahdi', 'Hasib' ],
  shopServices: { platform: [ 'iOs', 'android', 'windows' ] },
  isProfitable: true,
  monthlyRevenue: 4500000000,
  isOpen: false
}
 */