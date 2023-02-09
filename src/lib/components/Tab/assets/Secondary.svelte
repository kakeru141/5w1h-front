<script lang="ts">
	import type { ComponentType } from 'svelte';
	import { TabClass } from './tabClass';

	export let tabs: { text: string; icon?: ComponentType; content?: ComponentType }[] = [
		{ text: 'text' }
	];

	let tabsMenusElememt: HTMLDivElement;
	const tabCount = tabs.length;
	$: tabObject = new TabClass(tabsMenusElememt);
	let currentTabIndex: number = 0;
</script>

<svelte:window
	on:keydown={(e) => {
		tabObject.keyboardOperable(e);
		currentTabIndex = tabObject.currentTabIndexReturn();
	}}
/>
<div class="tabs">
	<div class="tabs__under-bar__area">
		<span
			class="tabs__under-bar"
			style:width="calc(100% / {tabCount})"
			style:left="calc((100% / {tabCount}) * {currentTabIndex})"
		/>
		<div class="tabs__menus" bind:this={tabsMenusElememt}>
			{#each tabs as tab, index}
				<button
					class:current={currentTabIndex === index}
					type="button"
					on:click={() => {
						currentTabIndex = index;
						tabObject.tabClick(index);
					}}
				>
					{#if tab.icon}
						<span class="tab__menu__icon">
							<svelte:component this={tab.icon} />
						</span>
					{/if}
					{#if tab.text}
						<span class="tab__menu__text">
							{tab.text}
						</span>
					{/if}
				</button>
			{/each}
		</div>
	</div>
	{#each tabs as tab, index}
		<div class="tabs__content" style:display={index === currentTabIndex ? 'block' : 'none'}>
			<svelte:component this={tab.content} />
		</div>
	{/each}
</div>

<style lang="scss">
	.tabs {
		width: 100%;

		.tabs__under-bar__area {
			position: relative;

			.tabs__under-bar {
				position: absolute;
				height: 3px;
				background: #1976d2;
				bottom: 0;
				border-radius: 3px 3px 0 0;
				transition: 0.3s;
			}
			.tabs__menus {
				background: #fff;
				width: 100%;
				display: flex;
				height: 48px;
				box-shadow: 0 1px 0px 0px rgba(0, 0, 0, 0.1);
				&:has(.tab__menu__icon) {
					height: 64px;
				}
				button {
					background: none;
					padding: 8px 0;
					width: 100%;
					height: calc(100% - 1px);
					display: inline-flex;
					flex-direction: column;

					.tab__menu__icon {
						width: 24px;
						height: 24px;
						line-height: 20px;
						font-weight: 500;
					}
					.tab__menu__text {
						font-size: 1em;
					}
					&:hover {
						background: rgba(224, 224, 224, 0.1);
					}
					&:focus {
						background: rgba(224, 224, 224, 0.5);
					}
					&:active {
						background: rgba(224, 224, 224, 1);
						transform: translateY(1px);
					}

					&.current {
						color: #1976d2;
						&:hover {
							background: rgba(187, 222, 251, 0.1);
						}
						&:focus {
							background: rgba(187, 222, 251, 0.3);
						}
						&:active {
							background: rgba(187, 222, 251, 0.5);
						}
					}
				}
			}
		}
		.tabs__content {
			padding: 8px;
		}
	}
	@media (prefers-color-scheme: dark) {
		.tabs {
			.tabs__under-bar__area {
				.tabs__under-bar {
					background: #90caf9;
				}
				.tabs__menus {
					background: none;
					box-shadow: 0 1px 0px 0px #555;

					button {
						color: rgba(0, 0, 0, 0.8);
						&:hover {
							background: rgba(97, 97, 97, 0.2);
						}
						&:focus {
							background: rgba(97, 97, 97, 0.5);
						}
						&:active {
							background: rgba(97, 97, 97, 1);
						}

						&.current {
							color: #90caf9;
							&:hover {
								background: rgba(187, 222, 251, 0.2);
							}
							&:focus {
								background: rgba(187, 222, 251, 0.7);
							}
							&:active {
								background: rgba(187, 222, 251, 1);
							}
						}
					}
				}
			}
		}
	}
</style>
