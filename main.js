const shareBtn = document.querySelector(".profile-wrapper__share-button");
const shareModal = document.querySelector(".share-wrapper");

shareBtn.addEventListener("click", () => {
    shareBtn.classList.toggle("themed");
    shareModal.classList.toggle("hidden");
})