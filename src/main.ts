import axios from 'axios';

let users = [];

interface User {
	id: number;
	name: string;
	username: string;
	email: string;
	address: Address;
	phone: string;
	website: string;
	company: Company;
}

interface Address {
	street: string;
	suite: string;
	city: string;
	zipcode: string;
	geo: Geo;
}

interface Geo {
	lat: string;
	lng: string;
}

interface Company {
	name: string;
	catchPhrase: string;
	bs: string;
}

const axiosInstance = axios.create({
	baseURL: 'https://jsonplaceholder.typicode.com',
});

const button = document.querySelector('button');

const initApp = async () => {
	const res = await axiosInstance.get<User>('/users');
	console.log(res);

	users = res.data;

	const ul = document.querySelector('ul') as HTMLUListElement;

	users.forEach(user => {
		const li = document.createElement('li');
		li.textContent = `${user.id} - ${user.name} - ${user.email}`;
		ul.appendChild(li);
	});
};

button?.addEventListener('click', () => {
	initApp();
});
