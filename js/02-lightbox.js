import { galleryItems } from "./gallery-items.js";
// Change code below this line
const listRef = document.querySelector(".gallery");
const galleryMarkup = createGalleryMarkup(galleryItems);
listRef.insertAdjacentHTML("afterbegin", galleryMarkup);
const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});

function createGalleryMarkup(galleryImages) {
  return galleryImages
    .map(
      ({
        preview,
        original,
        description,
      }) => `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`
    )
    .join("");
}
