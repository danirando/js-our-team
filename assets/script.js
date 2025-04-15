const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png",
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png",
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png",
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png",
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png",
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png",
  },
];

const rowEl = document.querySelector(".row");

for (i = 0; i < teamMembers.length; i++) {
  const { name, role, email, img } = teamMembers[i];

  const newCard = () => {
    rowEl.innerHTML += `<div class="col-lg-4 col-md-6 col-sm-12 mb-5">
  <div class="d-flex flex-shrink-0">
    <div>
      <img src="./assets/${img}" alt="" height="100vh" />
    </div>
    <div
      class="d-flex flex-column justify-content-center bg-dark text-white p-2" style="width: 300px">
      <h5 class="m-0">${name}</h5>
      <p class="m-0">${role}</p>
      <p class="text-primary m-0">${email}</p>
    </div>
  </div>
</div>`;
  };

  newCard();
}

const formEl = document.getElementById("form-new-member");
const nameEl = document.getElementById("name");
const roleEl = document.getElementById("Role");
const emailEl = document.getElementById("email");

formEl.addEventListener("submit", function (event) {
  event.preventDefault();
  rowEl.innerHTML += `<div class="col-lg-4 col-md-6 col-sm-12 mb-5">
          <div class="d-flex flex-shrink-0">
            <div>
              <img src="./assets/img/user-6380868_640.webp" alt="" height="100vh" />
            </div>
            <div
              class="d-flex flex-column justify-content-center bg-dark text-white p-2" style="width: 300px">
              <h5 class="m-0">${nameEl.value}</h5>
              <p class="m-0">${roleEl.value}</p>
              <p class="text-primary m-0">${emailEl.value}</p>
            </div>
          </div>
        </div>`;
  nameEl.value = "";
  roleEl.value = "";
  emailEl.value = "";
});
