// immediately Invoked Function Expression(iife)

(function chai() {
    // named iife
    console.log('DB CONNECTED');   
})();

( () => {
    console.log('DB CONNECTED TWO ${name}');
} ) ('hitesh')