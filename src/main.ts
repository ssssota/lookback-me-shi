import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		listView: location.hash === '#list'
	}
});

export default app;
