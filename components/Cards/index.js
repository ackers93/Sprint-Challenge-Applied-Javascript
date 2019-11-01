// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(data => {
        console.log(data)
    })


function CreateCard(arg) {
    const articleCard = document.createElement("div"),
        articleHeadline = document.createElement("div"),
        articleAuthor = document.createElement("div"),
        articleImgContainer = document.createElement("div"),
        articleImg = document.createElement("img"),
        articleCredit = document.createElement("span");

    articleCard.appendChild(articleHeadline);
    articleCard.appendChild(articleAuthor);
    articleAuthor.appendChild(articleImgContainer);
    articleImgContainer.appendChild(articleImg);
    articleAuthor.appendChild(articleCredit);

    articleHeadline.textContent = arg. //TODO ;
    articleAuthor.textContent = arg. //TODO ;
    articleImg.src = arg. //TODO ;
    articleCredit.textContent = `By ${arg.TODO}`;

    articleCard.classList.add("card");
    articleHeadline.classList.add("headline");
    articleAuthor.classList.add("author");
    articleImgContainer.classList.add("img-container")

    return CreateCard;
}