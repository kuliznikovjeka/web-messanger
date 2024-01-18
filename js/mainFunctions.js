import { chatElements } from './ui-elements.js';
import { MESSAGES } from './dataFromServer.js';
import { USERS } from './utilits/utilits-vars.js';
import { resetInput, getTemplateContent, scrollToEnd, checkInputChanges } from './utilits/utilits-functions.js';

render();

function render() {
	MESSAGES.forEach(MESSAGE => {
		var _a;
		const templateContent = getTemplateContent();
		templateContent.user.textContent = MESSAGE.NAME;
		templateContent.message.textContent = MESSAGE.TEXT;
		templateContent.sendTime.textContent = MESSAGE.TIME;

		if (MESSAGE.NAME === USERS.MYSELF) {
			templateContent.messageSendFrom.classList.add('user-message');
		}
		else {
			templateContent.messageSendFrom.classList.add('other-message');
		}

		(_a = chatElements.areaMessanges) === null || _a === void 0 ? void 0 : _a.append(templateContent.li);
	});
}

function sendMessage(e) {
	e.preventDefault();
	const templateContent = getTemplateContent();
	const li = templateContent.li;
	const messageValue = chatElements.messageInput.value;

	if (!messageValue) return;

	templateContent.message.textContent = messageValue;
	templateContent.messageSendFrom.classList.add('user-message');
	chatElements.areaMessanges.append(li);

	resetInput(chatElements.messageInput);
	scrollToEnd();
	checkInputChanges()
}


export { sendMessage };
