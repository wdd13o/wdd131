// Temple Data
const temples = [
  {
    name: "Salt Lake Temple",
    location: "Salt Lake City, Utah, USA",
    dedicated: 1893,
    area: 253000,
    image: "https://www.churchofjesuschrist.org/imgs/92c33bcbf9cf85483e008d6871f8ced5f6d7b661/full/500%2C/0/default"
},
  {
      name: "Aba Nigeria Temple",
      location: "Aba, Abia, Nigeria",
      dedicated: 1896,
      area: 243000,
      image: "https://www.churchofjesuschrist.org/imgs/7210c09be95c4474772ae52e5f31c23c08112784/full/500%2C/0/default"
  },
  {
      name: "Accra Ghana Temple",
      location: "Accra, Ghana",
      dedicated: 2004,
      area: 17000,
      image: "https://www.churchofjesuschrist.org/imgs/ac55d0df60be2627d4e67f5aab5eece766f672c0/full/500%2C/0/default"
  },
  {
      name: "Abidjan, Côte d'Ivoire Temple",
      location: "Abidjan, Côte d'Ivoir",
      dedicated: 1919,
      area: 42000,
      image: "https://churchofjesuschrist.org/imgs/4fbff8f9b4d4bc10041f52b7de02d507c07a2d1c/full/640%2C/0/default"
  },
  {
      name: "Texas Temple",
      location: "Texas, United States",
      dedicated: 2017,
      area: 44200,
      image: "https://www.churchofjesuschrist.org/imgs/c1e0837c13a611efab73eeeeac1ec75cb0c1db3e/full/500%2C/0/default"
  },
  {
      name: "Rome Italy Temple",
      location: "Rome, Italy",
      dedicated: 2009,
      area: 42000,
      image: "https://www.churchofjesuschrist.org/imgs/17e2c70d687fffedfe115197e57fa8f5d1d369bb/full/500%2C/0/default"
  },

  {
    name: "Tokyo Japan Temple",
    location: " Tokyo Japan",
    dedicated: 1897,
    area: 10000,
    image: "https://www.churchofjesuschrist.org/imgs/df6b96801c9f11ec99eeeeeeac1ea2207e7c517b/full/500%2C/0/default"
  },

  {
    name: "Adelaide Australia Temple",
    location: "Marden, Spain",
    dedicated: 2000,
    area: 5000,
    image: "https://www.churchofjesuschrist.org/imgs/ac55d0df60be2627d4e67f5aab5eece766f672c0/full/500%2C/0/default"
  },
  {
    name: "Barcelona Spain Temple",
    location: "Bacelona, Spain",
    dedicated: 1880,
    area: 7000,
    image: "https://www.churchofjesuschrist.org/imgs/b42fb8e513a611ef810ceeeeac1e1bfbd6b8bda8/full/500%2C/0/default"
  },

  {
    name: "Barcelona Spain Temple",
    location: "Bacelona, Spain",
    dedicated: 2010,
    area: 6000,
    image: "https://www.churchofjesuschrist.org/imgs/b42fb8e513a611ef810ceeeeac1e1bfbd6b8bda8/full/500%2C/0/default"
  }


  

];

// Function to Display Temples
const displayTemples = (filter) => {
  const gallery = document.querySelector(".gallery");
  gallery.innerHTML = "";

  const filteredTemples = temples.filter(temple => {
      switch(filter) {
          case "old":
              return temple.dedicated < 1900;
          case "new":
              return temple.dedicated > 2000;
          case "large":
              return temple.area > 90000;
          case "small":
              return parseInt(temple.area) < 10000; // ✅ Fix for "Small"
            default:
              return true;
      }
  });

  filteredTemples.forEach(temple => {
      const card = document.createElement("div");
      card.classList.add("card");

      card.innerHTML = `
          <div class="temple-info">
              <h3>${temple.name}</h3>
              <p><strong>Location:</strong> ${temple.location}</p>
              <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
              <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
          </div>
          <img src="${temple.image}" alt="${temple.name}" loading="lazy">
      `;
      gallery.appendChild(card);
  });
};

// Event Listeners for Filtering
document.querySelectorAll(".filter-btn").forEach(button => {
  button.addEventListener("click", () => {
      const filter = button.dataset.filter;
      displayTemples(filter);
  });
});

// Footer Last Modified Date
document.getElementById("lastModified").textContent = document.lastModified;

// Load all temples initially
displayTemples("all");
