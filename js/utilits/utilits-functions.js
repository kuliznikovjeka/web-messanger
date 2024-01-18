import { chatElements, authorization } from "../ui-elements.js";

function resetInput(input) {
	const emptyString = '';
	input.value = emptyString;
}

function checkInputLength(input, button) {
	if (input.value.length === 0) {
		input.classList.add('border');
		button.classList.add('hide');
	}
	else {
		input.classList.remove('border');
		button.classList.remove('hide');
	}
}

function checkInputChanges() {
	checkInputLength(chatElements.messageInput, chatElements.btnSendMsg);
}

function getTemplateContent() {
	const li = chatElements.template.content.cloneNode(true);
	const messageSendFrom = li.querySelector('.area-messages__send-from');
	const user = li.querySelector('.user-message__user');
	const message = li.querySelector('.user-message__message');
	const sendTime = li.querySelector('.area-messages__send-time');
	return { li, messageSendFrom, user, message, sendTime };
}

function scrollToEnd() {
	const lastMessage = chatElements.areaMessanges.lastElementChild;
	const needPXToEnd = 15;

	lastMessage.scrollIntoView({ block: 'end', behavior: 'instant' });
	chatElements.areaMessanges.scrollBy(0, needPXToEnd);
}

function buildElement(tagName, className, text) {
	const tag = document.createElement(tagName);
	tag.classList.add(className);
	tag.textContent = text;
	return tag;
}

function switchToEnterCode() {
	authorization.modalAuthorization.classList.add('hidden');
	authorization.modalLogIn.classList.remove('hidden');
}

function switchToAuthorizarion() {
	authorization.modalAuthorization.classList.remove('hidden');
	authorization.modalLogIn.classList.add('hidden');
}

function showError() {
	authorization.error.classList.add('show');
	authorization.success.classList.remove('show');
	resetInput(authorization.inputEmail);
}

function showSuccess() {
	authorization.success.classList.add('show');
	authorization.error.classList.remove('show');
}

export {
	resetInput,
	checkInputChanges,
	getTemplateContent,
	scrollToEnd,
	buildElement,
	switchToAuthorizarion,
	switchToEnterCode,
	showError,
	showSuccess,
};
