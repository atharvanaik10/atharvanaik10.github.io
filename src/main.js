import './app.css';
import './styles/polish.css';
import './styles/responsive.css';
import { mount } from 'svelte';
import App from './App.svelte';

const app = mount(App, { target: document.getElementById('app') });

export default app;
