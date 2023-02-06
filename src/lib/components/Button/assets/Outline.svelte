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
		&:has(.start-icon) {
			padding-left: 16px;
		}
		&:has(.end-icon) {
			padding-right: 16px;
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
	@media (prefers-color-scheme: light) {
		button {
			color: #1976d2;
			background-color: rgba(255, 255, 255, 0.1);
			border: 1px solid rgba(0, 0, 0, 0.5);

			&:focus {
				background-color: rgba(25, 118, 210, 0.1);
				border: 1px solid rgba(25, 118, 210, 1);
			}
			&:hover {
				background-color: rgba(25, 118, 210, 0.1);
				border: 1px solid rgba(0, 0, 0, 0.5);
			}
			&:active {
				background-color: rgba(25, 118, 210, 0.1);
				border: 1px solid rgba(0, 0, 0, 0.5);
				transform: translateY(1px);
			}
		}
	}

	@media (prefers-color-scheme: dark) {
		button {
			color: #0d47a1;
			background-color: rgba(204, 204, 204, 0.1);
			border: 1px solid #ccc;
			transition: border 0s;
			&:focus {
				background-color: rgba(13, 71, 161, 0.3);
				border: 1px solid #0d47a1;
			}
			&:hover {
				background-color: rgba(13, 71, 161, 0.3);
				border: 1px solid #bbb;
			}
			&:active {
				background-color: rgba(13, 71, 161, 0.3);
				transform: translateY(1px);
				border: 1px solid #bbb;
			}
		}
	}
</style>
