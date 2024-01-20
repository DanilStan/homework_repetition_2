import { galleryItems } from "./gallery-items.js";
const galleryContainer = document.querySelector(".gallery");
galleryContainer.addEventListener("click", onClickOnImage);

// Change code below this line
const galleryMarkup = galleryItems
  .map((image) => {
    return `<li class="gallery__item">
<a class="gallery__link" href="${image.original}">
<img class="gallery__image" src="${image.preview}" alt="${image.description}" />
</a>
</li>`;
  })
  .join("");

galleryContainer.innerHTML = galleryMarkup;

function onClickOnImage(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
}

let lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
  /* options */
});

lightbox.captionPosition = "bottom";
lightbox.captionDelay = 250;
