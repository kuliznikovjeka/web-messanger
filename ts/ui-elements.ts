const modalElements = {
	btnSettings: document.querySelector('.top-actions-communication__btn-settings'),
	modalOverlay: document.querySelector('.modal-overlay'),
	setingsModal: document.querySelector('.settings-modal'),
	btnCloseModal: document.querySelector('.top-modal-settings__close'),
}

type ModalElements = {
	btnSettings: HTMLElement | null;
	modalOverlay: HTMLElement | null;
	setingsModal: HTMLElement | null;
	btnCloseModal: HTMLElement | null;
}

const chatElements = {
	formForMessage: document.querySelector('.footer-actions-communication__form'),
	messageInput: document.querySelector('.footer-actions-communication__input') as HTMLInputElement,
	areaMessanges: document.querySelector('.area-messages__list'),
	template: document.querySelector('#message'),
	messageFrom: document.querySelector('.area-messages__send-from'),
	btnSendMsg: document.querySelector('.footer-actions-communication__btn-send-message') as HTMLInputElement,
}

export { modalElements, chatElements };
