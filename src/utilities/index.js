/* Format milliseconds to mm:ss
 * From https://stackoverflow.com/questions/21294302/converting-milliseconds-to-minutes-and-seconds-with-javascript
 */
export const formatMS = ms => {
	const minutes = Math.floor(ms / 60000);
	const seconds = ((ms % 60000) / 1000).toFixed(0);

	return seconds === 60
		? minutes + 1 + ":00"
		: minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
};


const LOCALSTORAGE_KEY_HISTORY = "taskHistory";
export const addTaskToSavedHistory = (task) => {
	const { localStorage } = window;
	
	const stored = localStorage.getItem(LOCALSTORAGE_KEY_HISTORY);
	var history = stored ? JSON.parse(stored) : [];
	history.push(task);

	localStorage.setItem(LOCALSTORAGE_KEY_HISTORY, JSON.stringify(history));
}


export const getSavedHistory = () => {
	const { localStorage } = window;
	const stored = localStorage.getItem(LOCALSTORAGE_KEY_HISTORY);
	var history = stored ? JSON.parse(stored) : [];
	return history;
}

const LOCALSTORAGE_KEY_SETTINGS = 'settings';
export const addSettingsToStorage = (settings) => {
	window.localStorage.setItem(LOCALSTORAGE_KEY_SETTINGS, JSON.stringify(settings));
}

export const getSettingsFromStorage = () => {
	const stored = window.localStorage.getItem(LOCALSTORAGE_KEY_SETTINGS);
	return stored ? JSON.parse(stored) : { breakSeconds: 30, taskSeconds: 300, streakGoal: 4 };
}
