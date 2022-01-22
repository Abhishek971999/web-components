const template = document.createElement("template");
template.innerHTML = `
    <style>
        .faq-item {
            border: 1px solid #c6c0f5d6;
            padding: 20px;
            margin: 20px 10px;
            background: lavender;
            border-radius: 12px;
            box-shadow: 1px 2px 6px 1px #838bef5c;
            cursor: pointer;
        }
        .faq-title {
            font-size: 20px;
            font-weight: 700;
        }

        .faq-description {
            display: none;
        }
        .faq-description.show {
            display: block;
        }
    </style>
    <div class="faq-item">
        <div class="faq-title"></div>
        <div class="faq-description"></div>
    </div>

`;

class faqItem extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.shadowRoot.querySelector(".faq-title").innerHTML =
      this.getAttribute("title");
    this.shadowRoot.querySelector(".faq-description").innerHTML =
      this.getAttribute("description");
  }

  toggleFaq = () =>
    this.shadowRoot.querySelector(".faq-description").classList.toggle("show");

  connectedCallback() {
    this.shadowRoot
      .querySelector(".faq-item")
      .addEventListener("click", () => this.toggleFaq());
  }
  disconnectedCallback() {
    this.shadowRoot.querySelector(".faq-item").removeEventListener();
  }
}

window.customElements.define("faq-item", faqItem);
