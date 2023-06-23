import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';

const gallery = document.querySelector('.gallery');
const imagesArray = galleryItems.map(
  img =>
    `<a class="gallery__item" href="${img.original}">
            <img
                class="gallery__image"
                src="${img.preview}" 
                alt="${img.description}"
            />
        </a>`
);

gallery.insertAdjacentHTML('beforeend', imagesArray.join(''));

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'top',
  captionDelay: 250,
});
