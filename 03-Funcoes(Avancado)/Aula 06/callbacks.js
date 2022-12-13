function rand(min = 1000, max = 3000){
    const num = Math.random() * (max - min) + min;

    return Math.floor(num)
}

function f1(callback){
    setTimeout (function (){
        console.log('f1');
        if(callback) callback();
    }, rand())
}

function f2(callback){
    setTimeout (function (){
        console.log('f2');
        if(callback) callback();
    }, rand())

}

function f3(callback){
    setTimeout (function (){
        console.log('f3');
        if(callback) callback();
    }, rand())
}

//Callbacks
/*    f1( function (){
        f2( function (){
            f3( function (){
                console.log('ola mundo')
            });
        });
    });  */


//Outro jeito de dar callBack
f1 (f1Callback);

function f1Callback(){
    f2(f2CallBack);
}

function f2CallBack(){
    f3(f3CallBack);
}

function f3CallBack(){
    console.log('Olá mundo')
}