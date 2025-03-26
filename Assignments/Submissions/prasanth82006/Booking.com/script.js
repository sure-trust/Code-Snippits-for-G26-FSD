const searchInput = document.querySelector(".search-input");
const datePicker = document.querySelector(".date-picker");
const guestSelector = document.querySelector(".guest-selector");
const searchButton = document.querySelector(".search-button");
const flightsCheckbox = document.getElementById("flights-checkbox");
const paginationDots = document.querySelectorAll(".pagination-dot");
const carouselNextButton = document.querySelector(".carousel-button.next");

// Event Listeners
searchInput.addEventListener("click", () => {
  console.log("Opening destination selector");
});

datePicker.addEventListener("click", () => {
  console.log("Opening date picker");
});

guestSelector.addEventListener("click", () => {
  console.log("Opening guest selector");
});

searchButton.addEventListener("click", () => {
  const destination = searchInput.value || "anywhere";
  console.log(`Searching for accommodations in ${destination}`);
});

flightsCheckbox.addEventListener("change", (e) => {
  console.log(`Flights search: ${e.target.checked ? "enabled" : "disabled"}`);
});
paginationDots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    paginationDots.forEach((d) => d.classList.remove("active"));
    dot.classList.add("active");
    console.log(`Showing offer page ${index + 1}`);
  });
});
carouselNextButton.addEventListener("click", () => {
  console.log("Showing next destinations");
});
document.addEventListener("DOMContentLoaded", function () {
  const destinationsGrid = document.querySelector(".destinations-grid");
  const nextButton = document.querySelector(".carousel-button.next");
  const prevButton = document.querySelector(".carousel-button.prev");

  // Hide previous button initially
  if (prevButton) {
    prevButton.style.display = "none";
  }

  // Array of destinations data
  const allDestinations = [
    { name: "Prayagraj", properties: "124 properties", image: "img/p11.jpg" },
    { name: "New Delhi", properties: "2,919 properties", image: "img/p3.jpg" },
    { name: "Noida", properties: "1,652 properties", image: "img/p5.jpg" },
    { name: "Jaipur", properties: "5,246 properties", image: "img/p6.jpg" },
    { name: "Bangalore", properties: "2,044 properties", image: "img/p7.jpg" },
    { name: "Rishikesh", properties: "480 properties", image: "img/p8.jpg" },
    { name: "Varanasi", properties: "555 properties", image: "img/p9.jpg" },
    {
      name: "Greater Noida",
      properties: "172 properties",
      image: "img/p10.jpg",
    },
    { name: "Goa", properties: "1,882 properties", image: "img/p12.jpg" },
    { name: "Dwaraka", properties: "2,110 properties", image: "img/p13.jpg" },
    { name: "Gurgaon", properties: "2,110 properties", image: "img/p14.jpg" },
  ];

  let currentIndex = 0;
  const visibleItems = 6; // Number of items visible at once

  // Initial setup - create all cards but only show the first visibleItems
  function setupCarousel() {
    // Clear existing content
    destinationsGrid.innerHTML = "";

    // Create all destination cards
    allDestinations.forEach((destination, index) => {
      const card = document.createElement("div");
      card.className = "destination-card";

      // Set display to 'none' for cards that should be hidden initially
      if (index >= visibleItems) {
        card.style.display = "none";
      }

      card.innerHTML = `
                <div class="destination-image">
                    <img src="${destination.image}" alt="${destination.name}">
                </div>
                <div class="destination-info">
                    <h3>${destination.name}</h3>
                    <p>${destination.properties}</p>
                </div>
            `;

      destinationsGrid.appendChild(card);
    });

    // Append navigation buttons at the end
    destinationsGrid.appendChild(prevButton);
    destinationsGrid.appendChild(nextButton);

    updateNavButtons();
  }

  function updateNavButtons() {
    if (prevButton) {
      prevButton.style.display = currentIndex > 0 ? "flex" : "none";
    }

    if (nextButton) {
      nextButton.style.display =
        currentIndex + visibleItems < allDestinations.length ? "flex" : "none";
    }
  }

  function scrollNext() {
    if (currentIndex + visibleItems < allDestinations.length) {
      // Hide the first visible card
      const cards = document.querySelectorAll(".destination-card");
      cards[currentIndex].style.display = "none";

      // Show the next card that was previously hidden
      cards[currentIndex + visibleItems].style.display = "";

      currentIndex++;
      updateNavButtons();
    }
  }

  function scrollPrev() {
    if (currentIndex > 0) {
      const cards = document.querySelectorAll(".destination-card");
      cards[currentIndex - 1].style.display = "";

      // Hide the last visible card
      cards[currentIndex + visibleItems - 1].style.display = "none";

      currentIndex--;
      updateNavButtons();
    }
  }

  if (nextButton) {
    nextButton.addEventListener("click", scrollNext);
  }

  if (prevButton) {
    prevButton.addEventListener("click", scrollPrev);
  }

  // Initialize the carousel
  setupCarousel();
});
// JavaScript functionality could be added here
// For example: Handling filter options, favorite toggling, etc.

document.addEventListener("DOMContentLoaded", function () {
  // Filter options functionality
  const filterOptions = document.querySelectorAll(".filter-option");
  filterOptions.forEach((option) => {
    option.addEventListener("click", function () {
      filterOptions.forEach((opt) => opt.classList.remove("active"));
      this.classList.add("active");
      // Additional filter logic would go here
    });
  });

  // Favorite toggle functionality
  const favoriteIcons = document.querySelectorAll(".favorite-icon");
  favoriteIcons.forEach((icon) => {
    icon.addEventListener("click", function () {
      this.classList.toggle("active");
      if (this.classList.contains("active")) {
        this.style.color = "#ff6b6b";
      } else {
        this.style.color = "#ccc";
      }
    });
  });

  // Next button functionality for carousels
  const nextButtons = document.querySelectorAll(".next-button");
  nextButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const parent = this.parentElement;
      parent.scrollBy({
        left: 300,
        behavior: "smooth",
      });
    });
  });
});
