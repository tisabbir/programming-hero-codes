function inchToFt(inch){
   const ft = Math.floor(inch/12);
   const inchi = inch%12;
   console.log(ft, 'foot' + ' ' + inchi , 'inch');
}
inchToFt(75);