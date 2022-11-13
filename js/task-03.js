const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const elementsGallery = document.querySelector(".gallery");

const makeImageCard =({ url, alt}) => {

  const itemElement = document.createElement("li");
  itemElement.classList.add("gallery__item");
  
  const imgElement = document.createElement("img");
  imgElement.classList.add("gallery__img");
  imgElement.src = url;
  imgElement.alt =alt;

  itemElement.append(imgElement);
  return itemElement;
};

const elements = images.map(makeImageCard);
console.log(elements);
elementsGallery.append(...elements);
