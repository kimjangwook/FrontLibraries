<script lang="ts">
	import { activePath } from './../lib/store';
	import { base } from '$app/paths';
	import TopAppBar, { Row, Section, Title } from '@smui/top-app-bar';

	import Drawer, {
		AppContent,
		Content,
		Header,
		Title as DrawerTitle,
		Subtitle,
		Scrim
	} from '@smui/drawer';
	import List, { Item, Text } from '@smui/list';

	import IconButton from '@smui/icon-button';
	import { goto } from '$app/navigation';

	let prominent = false;
	let dense = false;
	let secondaryColor = true;

	let showNavigation: boolean = false;
	let active: string = `${base}/`;
	activePath.subscribe((value: string) => {
		active = value;
	});
	function setActive(path: string) {
		goto(path);
		showNavigation = false;
	}
</script>

<svelte:head>
	<title>JW-FrontLibraries</title>
</svelte:head>

<div class="flexy">
	<div class="top-app-bar-container flexor">
		<TopAppBar
			variant="static"
			{prominent}
			{dense}
			color={secondaryColor ? 'secondary' : 'primary'}
		>
			<Row>
				<Section>
					<IconButton class="material-icons" on:click={() => (showNavigation = !showNavigation)}>
						menu
					</IconButton>
					<Title><Item on:click={() => setActive(`${base}/`)}>FrontLibraries</Item></Title>
				</Section>
			</Row>
		</TopAppBar>

		<Drawer variant="modal" fixed={false} bind:open={showNavigation}>
			<Header>
				<DrawerTitle>FrontLibraries</DrawerTitle>
				<Subtitle>&nbsp;</Subtitle>
			</Header>
			<Content>
				<List>
					<Item on:click={() => setActive(`${base}/`)} activated={active === `${base}/`}>
						<Text>HOME</Text>
					</Item>
				</List>
				<List>
					<Item
						on:click={() => setActive(`${base}/csv2json/`)}
						activated={active === `${base}/csv2json/`}
					>
						<Text>CSV2JSON</Text>
					</Item>
				</List>
				<List>
					<Item
						on:click={() => setActive(`${base}/img2base64/`)}
						activated={active === `${base}/img2base64/`}
					>
						<Text>IMG2BASE64</Text>
					</Item>
				</List>
			</Content>
		</Drawer>
		<Scrim fixed={false} />
	</div>
	<div class="flexor-content"><slot /></div>
</div>

<style>
	.top-app-bar-container {
		width: 100%;
		border: 1px solid var(--mdc-theme-text-hint-on-background, rgba(0, 0, 0, 0.1));
		background-color: var(--mdc-theme-background, #fff);

		overflow: auto;
		display: inline-block;
	}
	.top-app-bar-container {
		margin-right: 0;
	}
	.flexor-content {
		padding: 20px;
	}
</style>
