<script lang="ts">
</script>

<slot />

<style>
	:global(a) {
		color: inherit;
		text-decoration: none;
	}
	:global(button) {
		cursor: pointer;
	}
	:global(body) {
		font-family: LINESeedJP;
		src: url(static/fonts/LINESeedJP_OTF_Bd.woff);
		src: url(static/fonts/LINESeedJP_OTF_Eb.woff);
		src: url(static/fonts/LINESeedJP_OTF_Rg.woff);
		src: url(static/fonts/LINESeedJP_OTF_Th.woff);
	}
</style>
