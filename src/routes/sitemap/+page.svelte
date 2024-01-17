<script lang="ts">
	import { base } from '$app/paths';
	import Button, { Label } from '@smui/button';
	import Snackbar, { Actions, Label as SLabel } from '@smui/snackbar';
	import csv from 'csvtojson';
	import { onMount } from 'svelte';
	import { activePath } from '../../lib/store';
	import DataTable, { Head, Body, Row, Cell } from '@smui/data-table';
	import { read, utils, writeFileXLSX } from 'xlsx';

	let result = '';
	let snackbarWithoutClose: Snackbar;
	let maxLength: number = 0;
	let done = false;

	type Path = {
		depth: number;
		pathList: string[];
		path: string;
		pages: string[];
	};

	type SitemapPathInfo = {
		domain: string;
		paths: Path[];
	};

	let info: SitemapPathInfo = {
		domain: '',
		paths: []
	};

	function readFile() {
		const input = document.getElementById('csv') as HTMLInputElement;

		if (!info.domain || !input.files || !input.files[0]) {
			snackbarWithoutClose?.open();
			return;
		}

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

				const parsedJson = json.map((item) => {
					return new URL(item.url);
				});

				parsedJson.forEach((item) => {
					if (item.hostname == info.domain) {
						let pathname =
							item.pathname[item.pathname.length - 1] == '/'
								? item.pathname.slice(0, -1)
								: item.pathname;
						// console.log(item.pathname, pathname);
						let pathList = pathname.split('/');

						let pathExists = info.paths.find(
							(pathItem) => pathItem.depth == pathList.length && pathItem.path == pathList.join('/')
						);
						if (pathExists) {
							pathExists.pages.push(item.href);
						} else {
							maxLength = Math.max(maxLength, pathList.length);
							info.paths.push({
								depth: pathList.length,
								pathList: pathList,
								path: pathList.join('/'),
								pages: [item.href]
							});
						}

						for (let i = pathList.length; i > 0; i--) {
							// let slicedPath = pathList.slice(0, i);
							let slicedPath = pathname.split('/').slice(0, i);
							let slicedPathExists = info.paths.find(
								(pathItem) => pathItem.depth == i && pathItem.path == slicedPath.join('/')
							);
							// console.log(slicedPath, i, slicedPathExists);

							if (slicedPathExists) {
								slicedPathExists.pages.push(item.href);
							} else {
								info.paths.push({
									depth: i,
									pathList: slicedPath,
									path: slicedPath.join('/'),
									pages: [item.href]
								});
							}
						}
					}
				});

				info.paths.sort((a, b) => {
					return a.path > b.path ? 1 : -1;
				});

				info.paths = info.paths.map((path) => {
					path.pages = Array.from(new Set(path.pages));
					return path;
				});

				// console.log(info.paths);

				done = true;

				// const now = getNow();
				// const jsonName = file.name.replace('.csv', `_${now}.json`);
				// downloadJson(json, jsonName);
			};
			reader.readAsText(file);
		}
	}

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

	function exportFile() {
		const parsedPaths = info.paths.map((p) => {
			const row: any = {
				'Full Path': p.path
			};
			for (let i = 0; i < maxLength; i++) {
				if (i != 0) {
					if (i == p.pathList.length - 1) {
						row[`Path ${i}`] = p.pathList[i] || '';
					} else {
						row[`Path ${i}`] = '';
					}
				}
			}

			row['# of Pages'] = p.pages.length;
			return row;
		});
		const ws = utils.json_to_sheet(parsedPaths);
		const wb = utils.book_new();
		utils.book_append_sheet(wb, ws, 'Data');

		writeFileXLSX(wb, `HighLevelSiteMapBuilder_${getNow()}.xlsx`);
	}

	onMount(() => {
		activePath.set(`${base}/sitemap/`);
	});
</script>

<svelte:head>
	<title>High Level Sitemap Builder|JW-FrontLibraries</title>
</svelte:head>

<h1>High Level Sitemap Builder</h1>

<section class="grid-1">
	<label for="domain">
		<div>Target Domain</div>
		<input
			id="domain"
			type="text"
			name="domain"
			placeholder="libraries.jangwook.net"
			bind:value={info.domain}
		/>
	</label>
	<label for="csv">
		<div>Target CSV File</div>
		<div style="font-size: 0.8rem;">
			※ The CSV header must have <code
				style="color: red; background-color: pink; padding: 2px 5px; border-radius: 5px;">url</code
			> key.
		</div>
		<input id="csv" type="file" name="csv" accept=".csv" />
	</label>

	<div>
		<Button on:click={readFile} variant="unelevated">
			<Label>Parsing</Label>
		</Button>
	</div>
</section>

{#if done}
	<div style="margin-top: 50px; margin-bottom: 20px; text-align: right;">
		<Button on:click={exportFile} color="secondary" variant="unelevated">
			<Label>Export</Label>
		</Button>
	</div>
	<section class="grid-1" style="margin-top: 50px;">
		<DataTable stickyHeader style="width: 100%; overflow-x: auto;">
			<Head>
				<Row>
					<Cell>Full Path</Cell>
					{#each Array(maxLength) as _, i}
						{#if i != 0}
							<Cell>Path {i}</Cell>
						{/if}
					{/each}
					<Cell numeric># of Pages</Cell>
				</Row>
			</Head>

			<Body>
				{#each info.paths as path, pathIdx}
					<Row>
						<Cell>{path.path}</Cell>
						{#each Array(maxLength) as _, i}
							{#if i != 0}
								{#if i == path.pathList.length - 1}
									<Cell>{path.pathList[i] || ''}</Cell>
								{:else}
									<Cell />
								{/if}
							{/if}
						{/each}
						<Cell numeric>{path.pages.length}</Cell>
					</Row>
				{/each}
			</Body>
		</DataTable>
	</section>
{/if}

<Snackbar bind:this={snackbarWithoutClose} class="snackbar-error">
	<SLabel>Please input target domain and select target csv file.</SLabel>
</Snackbar>

<style>
	.grid-1 {
		display: grid;
		grid-template-columns: auto;
		grid-gap: 2rem;
	}
</style>
