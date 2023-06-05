/**
 * @return {Function}
 */
var createHelloWorld = function(...args) {
    return ()=>{
        return "Hello World"
    }
};
// console.log(createHelloWorld(1,3,{})(1,2,3));
/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */