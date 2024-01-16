import { chatElements } from './ui-elements.js';
import { MESSAGES } from './dataFromServer.js';
import { USERS } from './utilits/utilits-vars.js';
import { resetInput } from './utilits/utilits-functions.js';
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
    var _a;
    e.preventDefault();
    const templateContent = getTemplateContent();
    const li = templateContent.li;
    const messageValue = chatElements.messageInput.value;
    templateContent.message.textContent = messageValue;
    templateContent.messageSendFrom.classList.add('user-message');
    (_a = chatElements.areaMessanges) === null || _a === void 0 ? void 0 : _a.append(li);
    resetInput(chatElements.messageInput);
    scrollToEnd();
}
function getTemplateContent() {
    var _a;
    const li = (_a = chatElements.template) === null || _a === void 0 ? void 0 : _a.content.cloneNode(true);
    const messageSendFrom = li.querySelector('.area-messages__send-from');
    const user = li.querySelector('.user-message__user');
    const message = li.querySelector('.user-message__message');
    const sendTime = li.querySelector('.area-messages__send-time');
    return { li, messageSendFrom, user, message, sendTime };
}
function scrollToEnd() {
    var _a, _b;
    const lastMessage = (_a = chatElements.areaMessanges) === null || _a === void 0 ? void 0 : _a.lastElementChild;
    const needPXToEnd = 15;
    lastMessage === null || lastMessage === void 0 ? void 0 : lastMessage.scrollIntoView({ block: 'end', behavior: 'instant' });
    (_b = chatElements.areaMessanges) === null || _b === void 0 ? void 0 : _b.scrollBy(0, needPXToEnd);
}
export { sendMessage };
