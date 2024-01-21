import { authorization, chatElements, modalElements } from "./constants/ui-elements.js";
import { DATA_SERVER } from "./server-data.js";
import { showError, showSuccess } from "./functions.js";
import { ERRORS } from "./constants/reservedValues.js";
import { resetInput } from "./functions.js";

import Cookies from 'js-cookie';

async function sendCodeToUser(e) {
	e.preventDefault();
	const userEmail = authorization.inputEmail.value;

	const response = await fetch(DATA_SERVER.URL, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json;charset=utf-8'
		},
		body: JSON.stringify({ email: userEmail }),
	});

	response.ok ? showSuccess(authorization.success, authorization.error)
		: showError(authorization.error, authorization.success, authorization.inputEmail);
}

async function logInToChat(e) {
	e.preventDefault()
	const token = authorization.inputLogIn.value;
	await isCorrectToken(token);
}

async function isCorrectToken(token) {

	const response = await fetch(DATA_SERVER.USER_INFORM, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
			'Authorization': `Bearer ${token}`
		},
	})

	if (response.ok) {
		Cookies.set('userToken', token);
		authorization.modalLogIn.classList.add('hidden');
	} else {
		showError(authorization.errorToken)
		resetInput(authorization.inputLogIn)
	}

}

async function changeName(e) {
	e.preventDefault()
	const userName = modalElements.inputChangeName.value;
	const token = Cookies.get('userToken');

	const response = await fetch(DATA_SERVER.URL, {
		method: 'PATCH',
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
			'Authorization': `Bearer ${token}`
		},
		body: JSON.stringify({ name: userName })
	})

	if (response.ok) {
		modalElements.textSuccsess.classList.add('show');
		resetInput(modalElements.inputChangeName);
	}
}


export { sendCodeToUser, logInToChat, changeName };

