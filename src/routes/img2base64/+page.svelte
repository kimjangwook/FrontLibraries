<script lang="ts">
	import Button, { Label } from '@smui/button';
	import Textfield from '@smui/textfield';
	import Snackbar, { Actions, Label as SLabel } from '@smui/snackbar';
	import { onMount } from 'svelte';
	import { activePath } from '../../lib/store';
	import { base } from '$app/paths';

	let result = '';
	let snackbarWithoutClose: Snackbar;

	async function convert(evt: Event) {
		const tgt = evt.target as HTMLInputElement;
		const files = tgt.files;

		// FileReader support
		if (FileReader && files && files.length) {
			var fr = new FileReader();
			fr.onload = function () {
				const img = document.getElementById('my-image') as HTMLImageElement;
				if (img) {
					img.src = fr.result as string;
					result = fr.result as string;
				}
			};
			fr.readAsDataURL(files[0]);
		}
	}

	function copy() {
		navigator.clipboard.writeText(result);
		snackbarWithoutClose?.open();
	}

	onMount(() => {
		activePath.set(`${base}/img2base64/`);
	});
</script>

<svelte:head>
	<title>IMG2BASE64|JW-FrontLibraries</title>
</svelte:head>

<h1>IMG2BASE64</h1>

<section class="grid-1">
	<label for="csv">
		<input id="csv" type="file" name="image_file" on:change={convert} />
	</label>

	<img id="my-image" src="" alt="" />

	<div style="display: flex; justify-content: end;">
		<Button on:click={copy} disabled={result === ''}>
			<Label>Copy</Label>
		</Button>
	</div>
	<Textfield
		style="width: 100%;"
		helperLine$style="width: 100%;"
		textarea
		bind:value={result}
		label="Result"
		readonly
	/>

	<div>
		<Button on:click={convert} variant="unelevated">
			<Label>Convert</Label>
		</Button>
	</div>
</section>

<Snackbar bind:this={snackbarWithoutClose}>
	<SLabel>COPIED</SLabel>
</Snackbar>

<style>
	.grid-1 {
		display: grid;
		grid-template-columns: auto;
		grid-gap: 2rem;
	}

	#my-image {
		max-width: 100%;
		max-height: 30vh;
	}
</style>
