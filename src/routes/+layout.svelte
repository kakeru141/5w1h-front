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
		display: inline-flex;
		align-items: center;
		justify-content: center;
		border: none;
		outline: none;
		transition: .2s;
		cursor: pointer;
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
