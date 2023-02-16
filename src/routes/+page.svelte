<script lang="ts">
	import { goto } from '$app/navigation';
	import { base } from '$app/paths';
	import List, { Item, Graphic, Meta, Text, PrimaryText, SecondaryText } from '@smui/list';
	import { onMount } from 'svelte';
	import { activePath } from '../lib/store';

	let options = [
		{
			name: 'CSV2JSON',
			description: 'Convert a CSV file to a JSON File',
			href: `${base}/csv2json`
		},

		{
			name: 'IMG2BASE64',
			description: 'Convert a Image file to a Base64 String',
			href: `${base}/img2base64`
		}
	];

	onMount(() => {
		activePath.set(`${base}/`);
	});
</script>

<h1>仕事に使えるライブラリーのまとめ</h1>

<div>
	<List class="card-list" twoLine avatarList singleSelection>
		{#each options as item}
			<Item class="card-list-item" on:SMUI:action={() => goto(item.href)}>
				<!-- <Graphic style="background-image: url({item.src})" /> -->
				<Text>
					<PrimaryText>{item.name}</PrimaryText>
					<SecondaryText>{item.description}</SecondaryText>
				</Text>
				<Meta class="material-icons">arrow_forward_ios</Meta>
			</Item>
		{/each}
	</List>
</div>
