<script lang="ts">
	export let id: string | undefined;
	export let value: string | number | undefined;
	export let type: 'text' | 'number' | 'tel' | 'email' | 'url' | 'password' | 'search' | undefined;
	export let label: string;

	const onChange = (
		e: Event & {
			currentTarget: EventTarget & HTMLInputElement;
		}
	) => {
		value = e.currentTarget.value;
	};
</script>

<div class="text-field-fill">
	<label for={id}>{label}</label>
	<div class="text-field-fill__input-container">
		<input {id} {type} {value} on:input={onChange} placeholder=" " />
	</div>
</div>

<style lang="scss">
	.text-field-fill {
		margin: 8px;
		display: flex;
		align-items: center;
		height: 56px;
		width: 25ch;
		position: relative;
		user-select: none;

		label {
			position: absolute;
			color: rgba(0, 0, 0, 0.6);
			transition: 0.2s;
			cursor: text;
			left: 16px;
			pointer-events: none;
			z-index: 1;

			&:has(+ .text-field-fill__input-container > input:focus) {
				color: #1976d2;
				transform: translate(0, -12px) scale(0.75);
			}
			&:not(:has(+ .text-field-fill__input-container > input:placeholder-shown)) {
				color: #1976d2;
				transform: translate(0, -12px) scale(0.75);
			}
		}
		.text-field-fill__input-container {
			display: inline-flex;
			align-items: flex-end;
			width: 100%;
			height: 100%;
			position: relative;
			// background-color: rgba(25, 118, 210, 0.1);
			background-color: #E3F2FD;
			border-top-left-radius: 8px;
			border-top-right-radius: 8px;
			transition: .2s;

			&:hover {
				background-color: #BBDEFB;
				// background-color: rgba(25, 118, 210, 0.2);

				&::before {
					border-bottom: 1px solid rgba(0, 0, 0, 0.7);
				}
			}
			&::before {
				position: absolute;
				border-bottom: 1px solid rgba(0, 0, 0, 0.42);
				content: '';
				bottom: 0;
				left: 0;
				right: 0;
			}
			&::after {
				position: absolute;
				border-bottom: 2px solid #1976d2;
				content: '';
				bottom: 0;
				left: 0;
				right: 0;
				transition: 0.2s;
				transform: scaleX(0);
			}

			&:has(input:focus) {
				&::after {
					transform: scaleX(1);
				}
			}
			&:not(:has(input:placeholder-shown)) {
				&::after {
					transform: scaleX(1);
				}
			}

			input {
				font-size: 1em;
				padding: 26px 16px calc(8px + 2px);
			}
		}
	}
</style>
