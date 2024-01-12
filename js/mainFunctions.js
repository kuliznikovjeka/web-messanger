import { chatElements } from './ui-elements.js';

function sendMessage(e) {
	e.preventDefault();
	const templateContent = getTemplateContent();
	const li = templateContent.li;

	const messageValue = getInputValue();
	if (messageValue.length === 0) return;
	templateContent.message.textContent = messageValue;

	chatElements.areaMessanges.append(li);
	resetInput(chatElements.messageInput);
}

function getTemplateContent() {
	const li = chatElements.template.content.cloneNode(true);
	const messageSendFrom = li.querySelector('.area-messages__send-from');
	const user = li.querySelector('.user-message__user');
	const message = li.querySelector('.user-message__message');
	const sendTime = li.querySelector('.area-messages__send-time');
	return { li, messageSendFrom, user, message, sendTime };
}

function getInputValue() {
	const inputValue = chatElements.messageInput.value;
	return inputValue;
}

function resetInput(input) {
	const emptyString = '';
	input.value = emptyString;
}

export { sendMessage };