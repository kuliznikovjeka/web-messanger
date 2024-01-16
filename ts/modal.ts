import { modalElements } from './ui-elements.js';

const { modalOverlay, setingsModal, btnCloseModal } = modalElements;

function openModal(e: Event) {
	const path = (e.target as HTMLElement).getAttribute('data-path');
	const currentModal = document.querySelector(`[data-target='${path}']`) as HTMLElement;

	currentModal.classList.add('modal__visible');
	(modalOverlay as HTMLElement).classList.add('modal-overlay__visible');
}

function closeModal(e: Event) {
	if ((e.target as HTMLElement) === modalOverlay || (e.target as HTMLElement) === btnCloseModal) {
		(modalOverlay as HTMLElement).classList.remove('modal-overlay__visible');
		(setingsModal as HTMLElement).classList.remove('modal__visible');
	}
}

export { openModal, closeModal }
