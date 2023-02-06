<script lang="ts">
</script>

<slot />

<style>
	:global(input) {
		height: 1.4em;
		width: 100%;
		padding: 0;
		margin: 0;
		border: none;
		outline: none;
		background: transparent;
	}
	:global(label){
		cursor: text;
	}
	:global(fieldset) {
		margin: 0;
		text-align: left;
	}
	:global(a) {
		color: inherit;
		text-decoration: none;
	}
	:global(button) {
		margin: 8px;
		display: inline-flex;
		line-height: 20px;
		cursor: pointer;
		outline: none;
		font-size: .9em;
		border: none;
		height: 40px;
		border-radius: 20px;
		min-width: 40px;
		align-items: center;
		padding: 0 24px;
		transition: .2s;
		font-weight: 500;
	}
	:global(body) {
		font-family: LINESeedJP;
		src: url(static/fonts/LINESeedJP_OTF_Bd.woff);
		src: url(static/fonts/LINESeedJP_OTF_Eb.woff);
		src: url(static/fonts/LINESeedJP_OTF_Rg.woff);
		src: url(static/fonts/LINESeedJP_OTF_Th.woff);
		color: #1a2027;
		font-size: 1rem;
		margin: 0;
		text-align: center;
	}
	* {
		box-sizing: border-box;
	}
</style>
