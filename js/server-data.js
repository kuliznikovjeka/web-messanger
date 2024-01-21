const MESSAGES = [
	{ TEXT: "Привет!", NAME: "Я:", TIME: "18:55" },
	{ TEXT: "Дарова", NAME: "Ментор:", TIME: "18:56" },
	{ TEXT: "Я сегодня делал задание, было очень замудренно и тяжело", NAME: "Я:", TIME: "18:57" },
	{ TEXT: "Учись щенок, дальше будет только хуже))", NAME: "Ментор:", TIME: "18:58" }
];

const DATA_SERVER = {
	URL: 'https://edu.strada.one/api/user',
	USER_INFORM: 'https://edu.strada.one/api/user/me',
}

export { MESSAGES, DATA_SERVER };
