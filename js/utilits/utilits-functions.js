import { chatElements } from "../ui-elements.js";
function resetInput(input) {
    const emptyString = '';
    input.value = emptyString;
}
function checkInputLength(input, button) {
    if (!input.value.length) {
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
export { resetInput, checkInputChanges };
