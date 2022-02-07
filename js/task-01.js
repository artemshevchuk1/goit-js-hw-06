const categories = document.querySelector('ul#categories');
console.log('Number of categories:', categories.children.length);
console.log('');

const listCategories = categories.querySelectorAll('.item');

listCategories.forEach ( element => {
   
    console.log(`Category: ${element.querySelector("h2").textContent}`);
    console.log(`Elements: ${element.querySelectorAll('li').length}`,);
    console.log("");
});