
function receivesAFunction(cb) {
    return cb();
}
const name =  returnsANamedFuntion
function returnsANamedFuntion() {
    return function fn() {
        return returnsANamedFuntion
    }
    
}


function returnsAnAnonymousFunction() {
    return function (){
        console.log("")
    }
}

