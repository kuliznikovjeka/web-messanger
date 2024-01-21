import { modalElements, authorization, chatElements } from './constants/ui-elements.js';
import { openModal, closeModal } from './modal.js';
import { sendMessage } from './functions.js';
import {
	validateEmptyMessage,
	switchToAuthorizarion,
	switchToEnterCode,
} from './functions.js';

import { sendCodeToUser, logInToChat, changeName } from './authorization.js';

const eventOpenModal = modalElements.btnSettings.addEventListener("click", openModal);
const eventCloseModal = modalElements.modalOverlay.addEventListener("click", closeModal);

const eventValidateEmptyMessage = chatElements.messageInput.addEventListener("input", validateEmptyMessage);
const eventSendMessageToUser = chatElements.formForMessage.addEventListener("submit", sendMessage);

const eventGoToEnterCode = authorization.btnEnterCode.addEventListener("click", switchToEnterCode);
const eventGoToEnterBack = authorization.btnСomeBack.addEventListener("click", switchToAuthorizarion);

const eventAuthorization = authorization.formAuthorization.addEventListener("submit", sendCodeToUser);

const eventLogInToChat = authorization.formLogIn.addEventListener("submit", logInToChat);
const eventChangeName = modalElements.formChangeName.addEventListener("submit", changeName);

export { eventOpenModal }