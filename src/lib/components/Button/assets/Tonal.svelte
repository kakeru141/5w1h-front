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
            background-color: rgba(187, 222, 251, 0.8);

			&:focus {
                background-color: rgba(187, 222, 251, 1);
			}
			&:hover {
                background-color: rgba(187, 222, 251, .9);
				box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
			}
			&:active {
                background-color: rgba(187, 222, 251, 1);
				box-shadow: none;
				transform: translateY(1px);
			}
		}
	}

	@media (prefers-color-scheme: dark) {
		button {
			color: #fff;
			background-color: rgba(187, 222, 251, .8);
			&:focus {
				background-color: rgba(187, 222, 251, .9);
			}
			&:hover {
				background-color: rgba(187, 222, 251, .9);
			}
			&:active {
				background-color: rgba(187, 222, 251, 1);
				transform: translateY(1px);
			}
		}
	}
</style>
