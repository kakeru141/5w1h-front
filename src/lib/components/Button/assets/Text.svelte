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
		background: none;

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
			&:focus {
				background-color: rgba(25, 118, 210, 0.2);
			}
			&:hover {
				background-color: rgba(25, 118, 210, 0.1);
			}
			&:active {
				background-color: rgba(25, 118, 210, 0.2);
				transform: translateY(1px);
			}
		}
	}

	@media (prefers-color-scheme: dark) {
		button {
			color: #0d47a1;
			&:focus {
				background-color: rgba(25, 118, 210, 0.5);
			}
			&:hover {
				background-color: rgba(25, 118, 210, 0.3);
			}
			&:active {
				background-color: rgba(25, 118, 210, 0.5);
				transform: translateY(1px);
			}
		}
	}
</style>
