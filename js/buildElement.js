export function buildElement(tagname, className, text, id) {
	const tag = document.createElement(tagname);
	tag.classList.add(className);
	tag.textContent = text;
	tag.id = id;
	return tag;
}