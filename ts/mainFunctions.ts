import { chatElements } from './ui-elements.js';
import { MESSAGES } from './dataFromServer.js';
import { USERS } from './utilits/utilits-vars.js';
import { resetInput } from './utilits/utilits-functions.js';

render();

function render(): void {

	MESSAGES.forEach(MESSAGE => {
		const templateContent = getTemplateContent();
		templateContent.user.textContent = MESSAGE.NAME;
		templateContent.message.textContent = MESSAGE.TEXT;
		templateContent.sendTime.textContent = MESSAGE.TIME;

		if (MESSAGE.NAME === USERS.MYSELF) {
			templateContent.messageSendFrom.classList.add('user-message');
		} else {
			templateContent.messageSendFrom.classList.add('other-message');
		}

		chatElements.areaMessanges?.append(templateContent.li);
	});

}

function sendMessage(e: Event): void {
	e.preventDefault();

	const templateContent = getTemplateContent();
	const li = templateContent.li;
	const messageValue = chatElements.messageInput.value;

	templateContent.message.textContent = messageValue;
	templateContent.messageSendFrom.classList.add('user-message');

	chatElements.areaMessanges?.append(li);

	resetInput(chatElements.messageInput);
	scrollToEnd();
}

function getTemplateContent() {
	const li = chatElements.template?.content.cloneNode(true);
	const messageSendFrom = li.querySelector('.area-messages__send-from');
	const user = li.querySelector('.user-message__user');
	const message = li.querySelector('.user-message__message');
	const sendTime = li.querySelector('.area-messages__send-time');
	return { li, messageSendFrom, user, message, sendTime };
}

function scrollToEnd(): void {
	const lastMessage = chatElements.areaMessanges?.lastElementChild;
	const needPXToEnd = 15;

	lastMessage?.scrollIntoView({ block: 'end', behavior: 'instant' });
	chatElements.areaMessanges?.scrollBy(0, needPXToEnd);
}

export { sendMessage };