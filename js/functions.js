import { chatElements, authorization } from "./constants/ui-elements.js";

function resetInput(input) {
	const emptyString = '';
	input.value = emptyString;
}

function validateEmptyMessage() {
	if (chatElements.messageInput.length === 0) {
		chatElements.messageInput.classList.add('border');
		chatElements.btnSendMsg.classList.add('hide');
	}
	else {
		chatElements.messageInput.classList.remove('border');
		chatElements.btnSendMsg.classList.remove('hide');
	}
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
	resetAuthorization()
}

function switchToAuthorizarion() {
	authorization.modalAuthorization.classList.remove('hidden');
	authorization.modalLogIn.classList.add('hidden');
}

function resetAuthorization() {
	authorization.error.classList.remove('show');
	authorization.success.classList.remove('show');
	resetInput(authorization.inputEmail);
}

function showError(errorElement, successElement, inputWhichReset) {
	errorElement.classList.add('show');
	successElement.classList.remove('show');
	resetInput(inputWhichReset);
}

function showSuccess(successElement, errorElement) {
	successElement.classList.add('show');
	errorElement.classList.remove('show');
}

function sendMessage(e) {
	e.preventDefault();
	const messageValue = chatElements.messageInput.value;
	validateEmptyMessage();
	if (!messageValue) return;

	const templateContent = getTemplateContent();
	const li = templateContent.li;

	templateContent.message.textContent = messageValue;
	templateContent.messageSendFrom.classList.add('user-message');
	chatElements.areaMessanges.append(li);

	resetInput(chatElements.messageInput);
	scrollToEnd();
}

export {
	resetInput,
	validateEmptyMessage,
	getTemplateContent,
	scrollToEnd,
	buildElement,
	switchToAuthorizarion,
	switchToEnterCode,
	showError,
	showSuccess,
	sendMessage
};

