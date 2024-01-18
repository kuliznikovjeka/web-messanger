const modalElements = {
	btnSettings: document.querySelector('.top-actions-communication__btn-settings'),
	modalOverlay: document.querySelector('.modal-overlay'),
	setingsModal: document.querySelector('.settings-modal'),
	btnCloseModal: document.querySelector('.top-modal-settings__close'),
};

const chatElements = {
	formForMessage: document.querySelector('.footer-actions-communication__form'),
	messageInput: document.querySelector('.footer-actions-communication__input'),
	areaMessanges: document.querySelector('.area-messages__list'),
	template: document.querySelector('#message'),
	messageFrom: document.querySelector('.area-messages__send-from'),
	btnSendMsg: document.querySelector('.footer-actions-communication__btn-send-message'),
};

const authorization = {
	modalAuthorization: document.querySelector('#authorization'),
	modalLogIn: document.querySelector('#log-in'),
	formAuthorization: document.querySelector('#authorization-form'),
	inputEmail: document.querySelector('#input-email'),
	btnEnterCode: document.querySelector('#btn-inter-code'),
	btnСomeBack: document.querySelector('#btn-come-back'),
	inputLogIn: document.querySelector('#input-code'),
	authorizationWrapper: document.querySelector('#authorization-wrapper'),
	btnGetCode: document.querySelector('#get-code'),
	error: document.querySelector('.authorization-error'),
	success: document.querySelector('.authorization-success'),
}

export { modalElements, chatElements, authorization };
