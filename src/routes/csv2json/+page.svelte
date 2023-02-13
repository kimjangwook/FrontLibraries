<script lang="ts">
	import Button, { Label } from '@smui/button';
	import csv from 'csvtojson';

	function getNow() {
		const now = new Date();
		const year = now.getFullYear();
		const month = ('0' + (now.getMonth() + 1)).slice(-2);
		const date = ('0' + now.getDate()).slice(-2);
		const hour = ('0' + now.getHours()).slice(-2);
		const minute = ('0' + now.getMinutes()).slice(-2);
		const second = ('0' + now.getSeconds()).slice(-2);
		return `${year}${month}${date}${hour}${minute}${second}`;
	}

	function downloadJson(jsonData: any, jsonName: string = 'data.json') {
		var blob = new Blob([JSON.stringify(jsonData)], { type: 'application/json' });
		var url = URL.createObjectURL(blob);
		var a = document.createElement('a');
		a.href = url;
		a.download = jsonName;
		a.click();
	}

	function readFile() {
		const input = document.getElementById('csv') as HTMLInputElement;

		if (input) {
			if (!input.files) {
				return;
			}
			const file = input.files[0];

			const reader = new FileReader();
			reader.onload = async function () {
				const text = reader.result;

				// document.getElementById('fileContents').textContent = text;
				const json = await csv({
					output: 'json',
					trim: true
				}).fromString(text?.toString() || '');

				const now = getNow();
				const jsonName = file.name.replace('.csv', `_${now}.json`);
				downloadJson(json, jsonName);
			};
			reader.readAsText(file);
		}
	}
</script>

<svelte:head>
	<title>CSV2JSON|JW-FrontLibraries</title>
</svelte:head>

<h1>CSV2JSON</h1>

<section class="grid-1">
	<label for="csv">
		<input id="csv" type="file" name="csv" accept=".csv" />
	</label>
	<div>
		<Button on:click={readFile} variant="unelevated">
			<Label>Convert & Download</Label>
		</Button>
	</div>
</section>

<style>
	.grid-1 {
		display: grid;
		grid-template-columns: auto;
		grid-gap: 2rem;
	}
</style>
