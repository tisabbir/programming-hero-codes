function a() {
    console.log('a');

    b();

    console.log('aa')
}

function b() {
    console.log('b');

    c();

    console.log('bb')
}

function c() {
    console.log('c');

    setTimeout(()=>{
        console.log('inside set time out')
    }, 1000)
    d();

    console.log('cc')
}

function d() {
    console.log('d');

    

    console.log('dd')
}
a();
