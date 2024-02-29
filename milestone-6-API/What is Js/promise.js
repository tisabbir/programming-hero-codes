const myLoader = () => {
    return new Promise((resolve, reject)=>{
        const success = Math.random();
        if(success>0.5){
            resolve(success);
            // console.log(success);
        } else{
            reject(success);
        }

    })
}

myLoader();