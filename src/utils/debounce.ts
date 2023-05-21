export function debounce(callback: () => void, wait: number) {
	let timeout = 0;
	return () => {
		clearTimeout(timeout);
		timeout = setTimeout(callback, wait);
	};
}
