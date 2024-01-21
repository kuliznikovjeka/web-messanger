import { modalElements } from './constants/ui-elements.js';

const { modalOverlay, setingsModal, btnCloseModal } = modalElements;

function openModal(e) {
	const path = e.target.getAttribute('data-path');
	const currentModal = document.querySelector(`[data-target='${path}']`);
	currentModal.classList.add('modal__visible');
	modalOverlay.classList.add('modal-overlay__visible');
}

function closeModal(e) {
	if (e.target === modalOverlay || e.target === btnCloseModal) {
		modalOverlay.classList.remove('modal-overlay__visible');
		setingsModal.classList.remove('modal__visible');
		modalElements.textSuccsess.classList.remove('show');
	}
}

export { openModal, closeModal };
