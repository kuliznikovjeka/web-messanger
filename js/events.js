import { modalElements } from './ui-elements.js';
import { openModal, closeModal } from './modal.js';

const eventOpenMoval = modalElements.btnSettings.addEventListener("click", openModal);
const eventCloseModal = modalElements.modalOverlay.addEventListener("click", closeModal);

export { eventOpenMoval, eventCloseModal }