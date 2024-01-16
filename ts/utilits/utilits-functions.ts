import { chatElements } from "../ui-elements.js";

function resetInput(input: HTMLInputElement): void {
	const emptyString: string = '';
	input.value = emptyString;
}

function checkInputLength(input: HTMLInputElement, button: HTMLElement): void {
	if (!input.value.length) {
		input.classList.add('border');
		button.classList.add('hide');
	} else {
		input.classList.remove('border');
		button.classList.remove('hide');
	}
}

function checkInputChanges(): void {
	checkInputLength(chatElements.messageInput, chatElements.btnSendMsg);
}

export { resetInput, checkInputChanges };