type SuccessResponse<T> = {
	error: null;
	data: T;
};

type FailedResponse = {
	error: {
		message: string;
		code: number;
	};
	data: null;
};

export async function call<T, U>(
	method: 'GET' | 'POST' | 'PUT' | 'DELETE',
	path: string,
	body?: U
): Promise<SuccessResponse<T> | FailedResponse> {
	const url = `${import.meta.env.VITE_API_URL}${path}`;

	try {
		const response = await fetch(url, {
			method,
			body: JSON.stringify(body),
			headers: {
				'Content-Type': 'application/json'
			},
			signal: AbortSignal.timeout(15000)
		});

		if (!response.ok) {
			return {
				error: {
					message: response.statusText,
					code: response.status
				},
				data: null
			};
		}

		const data: T = await response.json();

		return {
			error: null,
			data
		};
	} catch (err) {
		console.error(err);
		return {
			error: {
				message: 'connection_failed',
				code: 0
			},
			data: null
		};
	}
}

export async function get<T, U = undefined>(path: string, query?: U) {
	return call<T, U>('GET', path, query);
}

export async function post<T, U>(path: string, body: U) {
	return call<T, U>('POST', path, body);
}
