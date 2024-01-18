import { modalElements, authorization } from './ui-elements.js';
import { openModal, closeModal } from './modal.js';
import { chatElements } from './ui-elements.js';
import { sendMessage } from './mainFunctions.js';
import {
	checkInputChanges,
	switchToAuthorizarion,
	switchToEnterCode
} from './utilits/utilits-functions.js';

import { sendCodeToUser } from './authorization.js';

const eventOpenModal = modalElements.btnSettings.addEventListener("click", openModal);
const eventCloseModal = modalElements.modalOverlay.addEventListener("click", closeModal);

const eventCheckInputChanges = chatElements.messageInput.addEventListener("input", checkInputChanges);
const eventSendMessageToUser = chatElements.formForMessage.addEventListener("submit", sendMessage);

const eventGoToEnterCode = authorization.btnEnterCode.addEventListener("click", switchToEnterCode);
const eventGoToEnterBack = authorization.btnСomeBack.addEventListener("click", switchToAuthorizarion);

const eventAuthorization = authorization.formAuthorization.addEventListener("submit", sendCodeToUser);