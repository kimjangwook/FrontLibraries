<script lang="ts">
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
	import List, { Item, Text, Graphic, Separator, Subheader } from '@smui/list';

	import IconButton from '@smui/icon-button';
	import { browser } from '$app/environment';
	import { goto } from '$app/navigation';

	let prominent = false;
	let dense = false;
	let secondaryColor = true;

	let showNavigation: boolean = false;
	let active: string = `${base}/`;
	function setActive(path: string) {
		active = path;
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
					<Title>FrontLibraries</Title>
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
						<Text>Home</Text>
					</Item>
				</List>
				<List>
					<Item
						on:click={() => setActive(`${base}/csv2json`)}
						activated={active === `${base}/csv2json`}
					>
						<Text>CSV2JSON</Text>
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
