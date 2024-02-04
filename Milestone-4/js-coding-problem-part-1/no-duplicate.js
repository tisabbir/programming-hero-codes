function noDuplicate(arr){
   let unique = [];
   for(let i=0; i<arr.length; i++){
    if(unique.includes(arr[i])){

    } else{
        unique.push(arr[i]);
    }
   }
   console.log(unique)
}

noDuplicate(['abul', 'babul', 'cabul', 'babul', 'dabul', 'abul', 'kabul', 'kabul']);
