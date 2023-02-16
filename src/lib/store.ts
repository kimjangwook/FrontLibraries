import { base } from '$app/paths';
import { writable } from 'svelte/store';

export const activePath = writable(`${base}/`);
