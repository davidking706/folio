// Sample data for portfolio cards
const portfolioProjects = [
  {
    category: "Web Development",
    imageUrl: "../assets/images/portfolio-1.jpg",
    title: "Food Website"
  },
  {
    category: "Web Development",
    imageUrl: "../assets/images/portfolio-2.jpg",
    title: "Skate Website"
  },
  {
    category: "Web Development",
    imageUrl: "../assets/images/portfolio-3.jpg",
    title: "Eating Website"
  },
  {
    category: "UI Design",
    imageUrl: "../assets/images/portfolio-4.jpg",
    title: "Cool Design"
  },
  {
    category: "App Development",
    imageUrl: "../assets/images/portfolio-5.jpg",
    title: "Game App"
  },
  {
    category: "App Development",
    imageUrl: "../assets/images/portfolio-6.jpg",
    title: "Gambling App"
  },
  {
    category: "App Development",
    imageUrl: "../assets/images/portfolio-7.jpg",
    title: "Money Website"
  },
  {
    category: "UI Design",
    imageUrl: "../assets/images/portfolio-8.jpg",
    title: "Fantasic Design"
  }
];

// Function to create and append portfolio cards
function createPortfolioCards(data) {
  const grid = document.querySelector(".portfolio-grid");

  const categoryCounts = {};
  data.forEach((item) => {
    const category = item.category.split(' ')[0].toLowerCase();

    categoryCounts[category] = (categoryCounts[category] || 0) + 1;

    const card = document.createElement("div");
    card.className = "portfolio-card";
    card.setAttribute("data-item", category);
    card.setAttribute("data-open", `${category}-${categoryCounts[category]}`);

    const cardBody = document.createElement("div");
    cardBody.className = "card-body";

    const image = document.createElement("img");
    image.src = item.imageUrl;
    image.alt = `${item.title} icon`;

    const link = document.createElement("div");
    link.className = "card-popup-box";

    const categoryDiv = document.createElement("div");
    categoryDiv.textContent = item.category;

    const titleH3 = document.createElement("h3");
    titleH3.textContent = item.title;

    link.appendChild(categoryDiv);
    link.appendChild(titleH3);

    cardBody.appendChild(image);
    cardBody.appendChild(link);

    card.appendChild(cardBody);
    grid.appendChild(card);
  });
}

// Call the function with your data
createPortfolioCards(portfolioProjects);

const portfolioCard = '.portfolio-card';
const portfolioCardList = document.querySelectorAll(portfolioCard);

portfolioCardList.forEach(elm => {
  elm.addEventListener("click", function() {
    const modal = document.querySelector(".modal");
    const id = this.dataset.open;
    modal.setAttribute("id", id);
    
    const cardTitle = this.querySelector('h3').textContent;
    const modalHeaderH3 = document.querySelector('.modal-dialog .modal-header h3');
    modalHeaderH3.innerHTML = cardTitle;

    const cardImageSrc = this.querySelector('img').getAttribute('src');
    const modalImage = document.querySelector('.modal-dialog .modal-body img');
    modalImage.setAttribute('src', cardImageSrc);
  });
});