<script lang="ts">
	export let type: 'submit' | 'reset' | 'button' | undefined = 'button';
	export let name: string | undefined = undefined;
</script>

<button {type} {name}>
	{#if $$slots.startIcon}
		<span class="start-icon">
			<slot name="startIcon" />
		</span>
	{/if}
	<slot />
	{#if $$slots.endIcon}
		<span class="end-icon">
			<slot name="endIcon" />
		</span>
	{/if}
</button>

<style lang="scss">
	button {
		margin: 8px;
		line-height: 20px;
		font-weight: 500;
		font-size: .9em;
		border-radius: 20px;
		min-width: 40px;
		padding: 0 24px;
		height: 40px;
		color: #1976d2;
		background-color: rgba(25, 118, 210, 0.1);
		box-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);

		&:has(.start-icon) {
			padding-left: 16px;
		}
		&:has(.end-icon) {
			padding-right: 16px;
		}

		&:focus {
			background-color: rgba(25, 118, 210, 0.2);
			box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.2);
		}
		&:hover {
			background-color: rgba(25, 118, 210, 0.2);
			box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.2), 0px 2px 8px rgba(0, 0, 0, 0.2);
		}
		&:active {
			background-color: rgba(25, 118, 210, 0.2);
			box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.2);
			transform: translateY(1px);
		}
		.start-icon {
			width: 18px;
			height: 18px;
			margin-right: 8px;
		}
		.end-icon {
			width: 18px;
			height: 18px;
			margin-left: 8px;
		}
	}
</style>
