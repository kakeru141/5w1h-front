<script lang="ts">
	import Button from '$lib/components/Button/Button.svelte';
	import Tab from '$lib/components/Tab/Tab.svelte';
	import TextField from '$lib/components/TextField/TextField.svelte';

	import { UserPlusSolid, UserCheckSolid } from 'svelte-awesome-icons';
	import { ArrowLeftSolid, ArrowRightSolid, ArrowUpSolid } from 'svelte-awesome-icons';


	const tabs = [
		{ text: 'Flights', icon: ArrowLeftSolid, content: Button },
		{ text: 'manu222222',icon: ArrowLeftSolid,  content: Button },
		{ text: 'manu3', icon: ArrowUpSolid, content: Button },
		{ text: 'あいうえお', icon: ArrowUpSolid, content: Button },
	];
</script>

<main>
	<Tab {tabs} />
	<Tab {tabs} variant='secondary' />
	<TextField label="test" variant="outline" type="text" />
	<TextField label="test" variant="standard" type="text" />
	<TextField label="test" variant="fill" type="text" />

	<Button variant="outline">
		<UserCheckSolid size="18px" slot="startIcon" />
		button
		<UserPlusSolid slot="endIcon" size="18px" />
	</Button>
	<Button variant="elevate">
		<UserCheckSolid size="18px" slot="startIcon" />
		button
		<UserPlusSolid slot="endIcon" size="18px" />
	</Button>
	<Button variant="fill">
		<UserCheckSolid size="18px" slot="startIcon" />
		button
		<UserPlusSolid slot="endIcon" size="18px" />
	</Button>
	<Button variant="tonal">
		<UserCheckSolid size="18px" slot="startIcon" />
		button
		<UserPlusSolid slot="endIcon" size="18px" />
	</Button>
	<Button variant="text">
		<UserCheckSolid size="18px" slot="startIcon" />
		button
		<UserPlusSolid slot="endIcon" size="18px" />
	</Button>
</main>

<style lang="scss">
	main {
		margin: 16px auto;
		width: 80%;
	}
</style>
