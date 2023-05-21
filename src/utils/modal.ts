import { writable } from 'svelte/store';
import { bind } from 'svelte-simple-modal';
import type { Component, Open } from 'svelte-simple-modal/types/Modal.svelte';

const modal = writable<Component | null>(null);

const open: Open = (component, props = {}) => {
	modal.set(bind(component, props));
};

const close = () => {
	modal.set(null);
};

export { modal, open, close };
