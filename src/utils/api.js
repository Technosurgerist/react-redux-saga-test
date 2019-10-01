import axios from 'axios';

const apiCall = (url, options = {}) => {
	const defaultOptions = {
		headers: {
			'Content-Type': 'application/json',
			// 'Authorization': options.token ? `Bearer ${options.token}` : null,
		},
	};

	const customOptions = {
		url,
	};

	return axios({
		url,
		...defaultOptions,
		...options,
		...customOptions,
	})
	.then(response => response.data)
	.catch(error => Promise.reject(error.response.data));
};


export const apiGet = (url, options = {}) =>
	apiCall(url, {...options, method: 'get'});

// export const apiPost = (url, options = {}) =>
// 	apiCall(url, {...options, method: 'post'});

// export const apiPut = (url, options = {}) =>
// 	apiCall(url, {...options, method: 'put'});
