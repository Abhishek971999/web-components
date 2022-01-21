window.addEventListener("load", () => fetchUsers());

const template = document.createElement("template");
template.innerHTML = `
<style>
.user-card {
    margin: 20px;
    width: auto;
    max-width: 30vw;
    display: flex;
    align-items: center;
    background: #dfdfdf;
    justify-content: flex-start;
}
h4 {
    padding: 10px;
    margin: 0;
}
img {
    max-width: 50px;
    border-radius: 50%;
    padding: 10px;
}
</style>
<div class="user-card">
<div class="user-card-image">
    <img />
</div>
<div class="user-card-info">
    <h4></h4>
</div>
</div>
`;

class UserCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    this.shadowRoot.querySelector("h4").innerText =
      this.getAttribute("name") || "User";
    this.shadowRoot.querySelector("img").src =
      this.getAttribute("avatar") ||
      "https://randomuser.me/api/portraits/lego/0.jpg";
  }
}

window.customElements.define("user-card", UserCard);

const fetchUsers = async () => {
  try {
    const response = await fetch("https://randomuser.me/api/?results=150");
    const { results } = await response.json();
    const userContainer = document.querySelector(".user-container");
    results.forEach((user) => {
      const userElement = document.createElement("user-card");
      userElement.setAttribute(
        "name",
        `${user.name.first + " " + user.name.last}`
      );
      userElement.setAttribute("avatar", user.picture.thumbnail);
      userContainer.appendChild(userElement);
    });
  } catch (error) {
    console.log("Something went wrong : ", error);
  }
};
