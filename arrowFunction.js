const names = ['wes', 'kait', 'lux'];

const fullName = names.map(function(name) {
    return `${name} bos`; 
}); 
const fullname2 = names.map((name) => {
    return `{name} bos`; 
});
const fullName3 = names.map(name => {
    return `${name} bos`; 
}); 

const fullName4 = names.map( name => `${name} bos`); 

const fullname5 = names.map(() => `${name} bos`); 

const sayMynamme = (name) => { alert(`Hello ${name}!`)}
console.log(sayMynamme);