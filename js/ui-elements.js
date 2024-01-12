const modalElements = {
	btnSettings: document.querySelector('.top-actions-communication__btn-settings'),
	modalOverlay: document.querySelector('.modal-overlay'),
	setingsModal: document.querySelector('.settings-modal'),
	btnCloseModal: document.querySelector('.top-modal-settings__close'),
}

const chatElements = {
	formForMessage: document.querySelector('.footer-actions-communication__form'),
	messageInput: document.querySelector('.footer-actions-communication__input'),
	areaMessanges: document.querySelector('.area-messages__list'),
	template: document.querySelector('#message'),
	messageFrom: document.querySelector('.area-messages__send-from'),
}


export { modalElements, chatElements };

