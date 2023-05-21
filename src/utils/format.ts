export function formatValue(value: number, type: string) {
	if (type.endsWith('%')) {
		return `${value}%`;
	}

	return value.toString();
}
