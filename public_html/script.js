const chatForm = document.getElementById('chat-form');
const chatInput = document.getElementById('chat-input');
const chatLog = document.getElementById('chat-log');

chatForm.addEventListener('submit', e => {
	e.preventDefault();
	const message = chatInput.value;
	addToChatLog('You', message);
	getChatGPTResponse(message);
	chatInput.value = '';
});

function addToChatLog(sender, message) {
	const logEntry = document.createElement('li');
	const logEntrySender = document.createElement('strong');
	logEntrySender.textContent = sender;
	const logEntryMessage = document.createElement('span');
	logEntryMessage.textContent = message;
	logEntry.appendChild(logEntrySender);
	logEntry.appendChild(logEntryMessage);
	chatLog.appendChild(logEntry);
	chatLog.scrollTop = chatLog.scrollHeight;
}

async function getChatGPTResponse(message) {
	try {
		const response = await axios.post('https://api.openai.com/v1/engine/<engine-id>/completions', {
			prompt: message,
			max_tokens: 50,
			n: 1,
			stop: '\n',
			model: 'text-davinci-002',
		temperature: 0.7
	}, {
		headers: {
			'Content-Type': 'application/json',
			'Authorization': 'Bearer <API-KEY>'
		}
	});
	
	const {choices} = response.data;
	const {text} = choices[0];
	
	return text;
} catch (error) {
	console.error(error);
}

