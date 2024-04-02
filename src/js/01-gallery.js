// Opisany w dokumentacji
import SimpleLightbox from 'simplelightbox';
// Dodatkowy import stylów
import 'simplelightbox/dist/simple-lightbox.min.css';

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const gallery = document.querySelector('ul.gallery');

const createGalleryItem = image => {
  return `<li class="gallery__item"><a class="gallery__link" href="${image.original}"> <img class="gallery__image" src="${image.preview}" alt="${image.description}" /></a></li>`;
};

const galleryString = galleryItems.map(createGalleryItem).join('');

gallery.insertAdjacentHTML('afterbegin', galleryString);

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
