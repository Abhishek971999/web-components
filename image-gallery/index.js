import "./gallery-element.js";

window.addEventListener("load", () => fetchImages());

const fetchImages = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/photos");
    const data = await response.json();
    const galleryContainer = document.querySelector(".gallery-container");
    data.slice(0, 10).forEach((image) => {
      const galleryElement = document.createElement("gallery-element");
      galleryElement.image = image;
      galleryContainer.appendChild(galleryElement);
    });
  } catch (error) {
    console.log("Something went wrong : ", error);
  }
};
