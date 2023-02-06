<script lang="ts">
	import Elevate from './assets/Elevate.svelte';
	import Fill from './assets/Fill.svelte';
	import Outline from './assets/Outline.svelte';
	import Text from './assets/Text.svelte';
	import Tonal from './assets/Tonal.svelte';

	export let variant: 'outline' | 'elevate' | 'fill' | 'tonal' | 'text' = 'elevate';
	export let type: 'submit' | 'reset' | 'button' | undefined = 'button';
	export let name: string | undefined = undefined;
</script>

{#if variant === 'elevate'}
	{#if $$slots.startIcon && $$slots.endIcon}
		<Elevate {type} {name}>
			<svelte:fragment slot="startIcon">
				<slot name="startIcon" />
			</svelte:fragment>
			<slot />
			<svelte:fragment slot="endIcon">
				<slot name="endIcon" />
			</svelte:fragment>
		</Elevate>
	{:else if $$slots.startIcon}
		<Elevate {type} {name}>
			<svelte:fragment slot="startIcon">
				<slot name="startIcon" />
			</svelte:fragment>
			<slot />
		</Elevate>
	{:else if $$slots.endIcon}
		<Elevate {type} {name}>
			<slot />
			<svelte:fragment slot="endIcon">
				<slot name="endIcon" />
			</svelte:fragment>
		</Elevate>
	{:else}
		<Elevate {type} {name}>
			<slot />
		</Elevate>
	{/if}
{:else if variant === 'outline'}
	{#if $$slots.startIcon && $$slots.endIcon}
		<Outline {type} {name}>
			<svelte:fragment slot="startIcon">
				<slot name="startIcon" />
			</svelte:fragment>
			<slot />
			<svelte:fragment slot="endIcon">
				<slot name="endIcon" />
			</svelte:fragment>
		</Outline>
	{:else if $$slots.startIcon}
		<Outline {type} {name}>
			<svelte:fragment slot="startIcon">
				<slot name="startIcon" />
			</svelte:fragment>
			<slot />
		</Outline>
	{:else if $$slots.endIcon}
		<Outline {type} {name}>
			<slot />
			<svelte:fragment slot="endIcon">
				<slot name="endIcon" />
			</svelte:fragment>
		</Outline>
	{:else}
		<Outline {type} {name}>
			<slot />
		</Outline>
	{/if}
{:else if variant === 'fill'}
	{#if $$slots.startIcon && $$slots.endIcon}
		<Fill {type} {name}>
			<svelte:fragment slot="startIcon">
				<slot name="startIcon" />
			</svelte:fragment>
			<slot />
			<svelte:fragment slot="endIcon">
				<slot name="endIcon" />
			</svelte:fragment>
		</Fill>
	{:else if $$slots.startIcon}
		<Fill {type} {name}>
			<svelte:fragment slot="startIcon">
				<slot name="startIcon" />
			</svelte:fragment>
			<slot />
		</Fill>
	{:else if $$slots.endIcon}
		<Fill {type} {name}>
			<slot />
			<svelte:fragment slot="endIcon">
				<slot name="endIcon" />
			</svelte:fragment>
		</Fill>
	{:else}
		<Fill {type} {name}>
			<slot />
		</Fill>
	{/if}
{:else if variant === 'tonal'}
	{#if $$slots.startIcon && $$slots.endIcon}
		<Tonal {type} {name}>
			<svelte:fragment slot="startIcon">
				<slot name="startIcon" />
			</svelte:fragment>
			<slot />
			<svelte:fragment slot="endIcon">
				<slot name="endIcon" />
			</svelte:fragment>
		</Tonal>
	{:else if $$slots.startIcon}
		<Tonal {type} {name}>
			<svelte:fragment slot="startIcon">
				<slot name="startIcon" />
			</svelte:fragment>
			<slot />
		</Tonal>
	{:else if $$slots.endIcon}
		<Tonal {type} {name}>
			<slot />
			<svelte:fragment slot="endIcon">
				<slot name="endIcon" />
			</svelte:fragment>
		</Tonal>
	{:else}
		<Tonal {type} {name}>
			<slot />
		</Tonal>
	{/if}
{:else if variant === 'text'}
	{#if $$slots.startIcon && $$slots.endIcon}
		<Text {type} {name}>
			<svelte:fragment slot="startIcon">
				<slot name="startIcon" />
			</svelte:fragment>
			<slot />
			<svelte:fragment slot="endIcon">
				<slot name="endIcon" />
			</svelte:fragment>
		</Text>
	{:else if $$slots.startIcon}
		<Text {type} {name}>
			<svelte:fragment slot="startIcon">
				<slot name="startIcon" />
			</svelte:fragment>
			<slot />
		</Text>
	{:else if $$slots.endIcon}
		<Text {type} {name}>
			<slot />
			<svelte:fragment slot="endIcon">
				<slot name="endIcon" />
			</svelte:fragment>
		</Text>
	{:else}
		<Text {type} {name}>
			<slot />
		</Text>
	{/if}
{/if}
