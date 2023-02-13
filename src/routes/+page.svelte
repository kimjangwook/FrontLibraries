<script lang="ts">
	import { goto } from '$app/navigation';
	import { base } from '$app/paths';
	import List, { Item, Graphic, Meta, Text, PrimaryText, SecondaryText } from '@smui/list';

	let options = [
		{
			name: 'CSV2JSON',
			description: 'Convert a CSV file to a JSON File',
			src: `${base}/images/csv2json.png`,
			href: `${base}/csv2json`
		}
	];
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
