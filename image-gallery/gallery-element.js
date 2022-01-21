class GalleryElement extends HTMLElement {
  constructor() {
    super();
    this.root = this.attachShadow({ mode: "open" });
  }

  set image(image) {
    this.root.innerHTML = `
        <style>
          .gallery-element {
              max-width: 30vw;
              margin: 10px;
          }
          .gallery-element img {
              max-width: 100%;
          }
          @media only screen and (max-width: 450px) {
              .gallery-element {
                  max-width: 90vw;
              }
          }
      </style>
      <div class="gallery-element">
          <img src="${image.url}" />
          <p>${image.title}</p>
      </div>
        `;
  }
}

customElements.define("gallery-element", GalleryElement);
