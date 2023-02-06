<script lang="ts">
	import Button from '$lib/components/Button/Button.svelte';
	import TextField from '$lib/components/TextField/TextField.svelte';

	let isRegister = false;
	let value: string | number | undefined = '';
	import { UserPlusSolid, UserCheckSolid } from 'svelte-awesome-icons';
</script>

<main>
	<TextField label="test" variant="outline" type="text" {value} />
	<TextField label="test" variant="standard" type="text" {value} />
	<TextField label="test" variant="fill" type="text" {value} />

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
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
