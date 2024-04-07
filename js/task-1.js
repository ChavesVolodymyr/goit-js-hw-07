const categoryLength = document.querySelectorAll('ul#categories .item');
console.log(`Number of categories: ${categoryLength.length}`);
categoryLength.forEach(categories => {
  const categoryName = categories.querySelector('h2').textContent;
  const categoryElement = categories.querySelectorAll('li').length;

  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${categoryElement}`);
});
