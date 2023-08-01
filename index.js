function receivesAFunction(callback){
    return callback()
}
function returnsANamedFunction(){
    return function aNamedFunction(){
        42
    }
}
function returnsAnAnonymousFunction(){
    return function (){
        42
    }
}