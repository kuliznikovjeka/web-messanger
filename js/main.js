import { chatElements } from './constants/ui-elements.js';
import { MESSAGES } from './server-data.js';
import { USERS } from './constants/reservedValues.js';
import { getTemplateContent } from './functions.js';

render();


function render() {
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

		chatElements.areaMessanges.append(templateContent.li)
	});
}




