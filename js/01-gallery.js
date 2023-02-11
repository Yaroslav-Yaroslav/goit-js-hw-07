import { galleryItems } from "./gallery-items.js";
// Change code below this line

const divRef = document.querySelector(".gallery");
const imagesMarkup = makeGalleryImagesMarkup(galleryItems);
divRef.insertAdjacentHTML("afterbegin", imagesMarkup);

divRef.addEventListener("click", onImagePreviewClick);

function makeGalleryImagesMarkup(galleryImages) {
  return galleryImages
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join("");
}

function onImagePreviewClick(event) {
  event.preventDefault();
  if (!event.target.classList.contains("gallery__image")) {
    return;
  }
  const imagePreview = event.target;
  const instance = basicLightbox.create(
    `<img src="${imagePreview.dataset.source}">`,
    {
      onClose: () => {
        window.removeEventListener("keydown", onEscKeyDown);
      },
    }
  );
  instance.show();

  window.addEventListener("keydown", onEscKeyDown);
  function onEscKeyDown(event) {
    if (event.code === "Escape") {
      instance.close();
    }
    console.log(event);
  }
}
