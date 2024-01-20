import { galleryItems } from './gallery-items.js';

const galleryContainer = document.querySelector('.gallery')

const galleryRander = galleryItems.map(img => {
    return `
    <li class="gallery__item">
      <a class="gallery__link" href="${img.original}">
        <img
          class="gallery__image"
          src="${img.preview}"
          data-source="${img.original}"
          alt="${img.description}"
        />
      </a>
    </li>`;
}).join('')

galleryContainer.innerHTML = galleryRander;

