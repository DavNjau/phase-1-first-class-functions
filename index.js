function callName(name) {
    return `Come here, ${name}`
}

const receivesAFunction = (fn) => console.log(fn("David"))
receivesAFunction(callName)


function loveMoringa() {
    return `We love to learn at, Moringa`
}
const returnsANamedFunction = () => loveMoringa


const returnsAnAnonymousFunction = () => {
    return function() {
        return 'JavaScript for who??'
    }
}
