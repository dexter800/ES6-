const race = '100m Dash'; 

const winners = [ 'Hunter Gath', 'Singa Song', 'Imda Res']; 

const win = winners.map((winner, i) => ({name: winner, race, place: i+1})); 

const ages = [ 23,62,45, 2,62,44,55,6,67]; 
const old = ages.filter(age => age >=60); 
console.log(old); 

//This key word 

