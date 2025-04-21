document.addEventListener("DOMContentLoaded", function () {
  // DOM Elements
  const elements = {
    searchInput: document.querySelector(".search-input"),
    datePicker: document.querySelector(".date-picker"),
    guestSelector: document.querySelector(".guest-selector"),
    searchButton: document.querySelector(".search-button"),
    flightsCheckbox: document.getElementById("flights-checkbox"),
    paginationDots: document.querySelectorAll(".pagination-dot"),
    destinationsGrid: document.querySelector(".destinations-grid"),
    nextButton: document.querySelector(".carousel-button.next"),
    prevButton: document.querySelector(".carousel-button.prev"),
    filterOptions: document.querySelectorAll(".filter-option"),
    favoriteIcons: document.querySelectorAll(".favorite-icon"),
    carouselNextButtons: document.querySelectorAll(".next-button"),
    navItems: document.querySelectorAll(".nav-item"),
    offerCards: document.querySelectorAll(".offer-card"),
    propertyCards: document.querySelectorAll(".property-card"),
    attractionCards: document.querySelectorAll(".attraction-card"),
    dealCards: document.querySelectorAll(".deal-card"),
  };

  // Data
  const allDestinations = [
    { name: "Prayagraj", properties: "124 properties", image: "./img/p11.jpg" },
    {
      name: "New Delhi",
      properties: "2,919 properties",
      image: "./img/p3.jpg",
    },
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

  // State
  let currentIndex = 0;
  const visibleItems = 6;
  let isMobile = window.innerWidth <= 768;

  // Event Handlers
  function handleSearchInputClick() {
    console.log("Opening destination selector");
    // In a real implementation, this would open a modal or dropdown with search suggestions
    elements.searchInput.placeholder =
      "Enter a destination, property, or landmark";
  }

  function handleDatePickerClick() {
    console.log("Opening date picker");
    // This would open a calendar widget in a real implementation
    elements.datePicker.textContent = "Select dates";
  }

  function handleGuestSelectorClick() {
    console.log("Opening guest selector");
    // This would open a guest selection modal in a real implementation
    elements.guestSelector.textContent = "Select guests and rooms";
  }

  function handleSearchButtonClick() {
    const destination = elements.searchInput.value || "anywhere";
    const dates = elements.datePicker.textContent;
    const guests = elements.guestSelector.textContent;

    console.log(`Searching for ${guests} in ${destination} from ${dates}`);

    // In a real implementation, this would redirect to search results
    alert(`Searching for ${guests} in ${destination} from ${dates}`);
  }

  function handleFlightsCheckboxChange(e) {
    const isChecked = e.target.checked;
    console.log(`Flights search: ${isChecked ? "enabled" : "disabled"}`);

    // Toggle flight-related UI elements
    if (isChecked) {
      document.querySelector(".hero h1").textContent = "Find your next flight";
      document.querySelector(".hero p").textContent =
        "Search for cheap flights anywhere in the world";
    } else {
      document.querySelector(".hero h1").textContent = "Find your next stay";
      document.querySelector(".hero p").textContent =
        "Search low prices on hotels, homes and much more...";
    }
  }

  function handlePaginationDotClick(dot, index) {
    elements.paginationDots.forEach((d) => d.classList.remove("active"));
    dot.classList.add("active");
    console.log(`Showing offer page ${index + 1}`);

    // In a real implementation, this would switch between different offers
    elements.offerCards.forEach((card, i) => {
      card.style.display = i === index ? "flex" : "none";
    });
  }

  function handleFilterOptionClick(option) {
    elements.filterOptions.forEach((opt) => opt.classList.remove("active"));
    option.classList.add("active");

    const filterType = option.textContent.trim().toLowerCase();
    console.log(`Filtering by: ${filterType}`);

    // In a real implementation, this would filter the displayed destinations
    // For now, we'll just log it
  }

  function handleFavoriteIconClick(icon) {
    icon.classList.toggle("active");
    const isActive = icon.classList.contains("active");
    icon.style.color = isActive ? "#ff6b6b" : "#ccc";
    icon.textContent = isActive ? "❤" : "♡";

    const card = icon.closest(".property-card, .deal-card, .attraction-card");
    if (card) {
      const title = card.querySelector(
        ".property-title, .deal-title, .attraction-title"
      )?.textContent;
      console.log(
        `${title} ${isActive ? "added to" : "removed from"} favorites`
      );
    }
  }

  function handleCarouselButtonClick(direction) {
    if (direction === "next") {
      scrollNext();
    } else {
      scrollPrev();
    }
  }

  function handleNavItemClick(item) {
    elements.navItems.forEach((i) => i.classList.remove("active"));
    item.classList.add("active");

    const navType = item.textContent.trim();
    console.log(`Showing ${navType} section`);

    // In a real implementation, this would show the appropriate content section
  }

  // Carousel Functions
  function setupCarousel() {
    if (!elements.destinationsGrid) return;

    elements.destinationsGrid.innerHTML = "";

    allDestinations.forEach((destination, index) => {
      const card = document.createElement("div");
      card.className = "destination-card";
      card.style.display = index >= visibleItems ? "none" : "block";

      card.innerHTML = `
           <img src="${destination.image}" alt="${destination.name}" class="destination-image" loading="lazy">
           <div class="destination-info">
             <div class="destination-name">${destination.name}</div>
             <div class="destination-properties">${destination.properties}</div>
           </div>
         `;

      elements.destinationsGrid.appendChild(card);
    });

    updateNavButtons();
  }

  function updateNavButtons() {
    if (elements.prevButton) {
      elements.prevButton.style.display = currentIndex > 0 ? "flex" : "none";
    }
    if (elements.nextButton) {
      elements.nextButton.style.display =
        currentIndex + visibleItems < allDestinations.length ? "flex" : "none";
    }
  }

  function scrollNext() {
    if (currentIndex + visibleItems < allDestinations.length) {
      const cards = document.querySelectorAll(".destination-card");
      cards[currentIndex].style.display = "none";
      cards[currentIndex + visibleItems].style.display = "block";
      currentIndex++;
      updateNavButtons();
    }
  }

  function scrollPrev() {
    if (currentIndex > 0) {
      const cards = document.querySelectorAll(".destination-card");
      cards[currentIndex - 1].style.display = "block";
      cards[currentIndex + visibleItems - 1].style.display = "none";
      currentIndex--;
      updateNavButtons();
    }
  }

  // Initialize Carousels
  function initCarousels() {
    document.querySelectorAll(".next-button").forEach((button) => {
      button.addEventListener("click", function () {
        const container = this.closest(".attractions, .deals, .properties");
        if (container) {
          const scrollAmount = isMobile ? 250 : 400;
          container.scrollBy({
            left: scrollAmount,
            behavior: "smooth",
          });
        }
      });
    });

    // Add previous buttons functionality if needed
  }

  // Responsive adjustments
  function handleResize() {
    isMobile = window.innerWidth <= 768;
    // Adjust carousel visible items based on screen size
    // This is a simplified version - in a real app you'd recalculate layout
  }

  // Add hover effects for desktop
  function setupHoverEffects() {
    if (isMobile) return;

    const hoverableElements = [
      ...elements.propertyCards,
      ...elements.attractionCards,
      ...elements.dealCards,
      ...elements.navItems,
    ];

    hoverableElements.forEach((el) => {
      el.addEventListener("mouseenter", () => {
        el.style.transform = "translateY(-5px)";
        el.style.boxShadow = "0 10px 20px rgba(0,0,0,0.1)";
        el.style.transition = "all 0.3s ease";
      });

      el.addEventListener("mouseleave", () => {
        el.style.transform = "translateY(0)";
        el.style.boxShadow = "0 2px 5px rgba(0,0,0,0.1)";
      });
    });
  }

  // Event Listeners
  function setupEventListeners() {
    if (elements.searchInput) {
      elements.searchInput.addEventListener("click", handleSearchInputClick);
      elements.searchInput.addEventListener("focus", handleSearchInputClick);
    }

    if (elements.datePicker) {
      elements.datePicker.addEventListener("click", handleDatePickerClick);
    }

    if (elements.guestSelector) {
      elements.guestSelector.addEventListener(
        "click",
        handleGuestSelectorClick
      );
    }

    if (elements.searchButton) {
      elements.searchButton.addEventListener("click", handleSearchButtonClick);
    }

    if (elements.flightsCheckbox) {
      elements.flightsCheckbox.addEventListener(
        "change",
        handleFlightsCheckboxChange
      );
    }

    if (elements.paginationDots) {
      elements.paginationDots.forEach((dot, index) => {
        dot.addEventListener("click", () =>
          handlePaginationDotClick(dot, index)
        );
      });
    }

    if (elements.nextButton) {
      elements.nextButton.addEventListener("click", () =>
        handleCarouselButtonClick("next")
      );
    }

    if (elements.prevButton) {
      elements.prevButton.addEventListener("click", () =>
        handleCarouselButtonClick("prev")
      );
    }

    if (elements.filterOptions) {
      elements.filterOptions.forEach((option) => {
        option.addEventListener("click", () => handleFilterOptionClick(option));
      });
    }

    if (elements.favoriteIcons) {
      elements.favoriteIcons.forEach((icon) => {
        icon.addEventListener("click", () => handleFavoriteIconClick(icon));
      });
    }

    if (elements.navItems) {
      elements.navItems.forEach((item) => {
        item.addEventListener("click", () => handleNavItemClick(item));
      });
    }

    window.addEventListener("resize", handleResize);
  }

  // Initialize
  function init() {
    setupCarousel();
    initCarousels();
    setupEventListeners();
    setupHoverEffects();

    // Set initial active states
    if (elements.navItems.length > 0) {
      elements.navItems[0].classList.add("active");
    }
    if (elements.paginationDots.length > 0) {
      elements.paginationDots[0].classList.add("active");
    }
    if (elements.filterOptions.length > 0) {
      elements.filterOptions[0].classList.add("active");
    }
  }

  init();
});
