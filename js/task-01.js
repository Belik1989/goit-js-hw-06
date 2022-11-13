
const categoriesNumb = document.querySelectorAll(".item");

// const categoriesTitle = document.querySelectorAll(".item h2");

// const categoriesElements = document.querySelectorAll(".item ul");

// categoriesTitle.forEach((element) =>{
//     console.log("Category : ", element.textContent);
//     });

// categoriesElements.forEach((element) =>
//         console.log("Elements :", element.children.length));
    
console.log("Number of categories:", categoriesNumb.length);

categoriesNumb.forEach(newFunction);

function newFunction(category) {
    const categoryTitle = category.firstElementChild;
    console.log("Category: ", categoryTitle.textContent);
    const categoryList = categoryTitle.nextElementSibling;
    console.log("Elements: ", categoryList.childElementCount);
}