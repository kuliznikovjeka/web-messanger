import { modalElements } from './ui-elements.js';
import { openModal, closeModal } from './modal.js';
import { chatElements } from './ui-elements.js';
import { sendMessage } from './mainFunctions.js';
import { checkInputChanges } from './utilits/utilits-functions.js';

const eventOpenModal = modalElements.btnSettings?.addEventListener("click", openModal);
const eventCloseModal = modalElements.modalOverlay?.addEventListener("click", closeModal);
const eventSendMessageToUser = chatElements.formForMessage?.addEventListener("submit", sendMessage);
const eventCheckInputChanges = chatElements.messageInput.addEventListener("input", checkInputChanges);
