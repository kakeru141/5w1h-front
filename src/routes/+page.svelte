<script lang="ts">
	import TextField from "$lib/components/TextField/TextField.svelte";

	let isRegister = false;
	export let value: string | number | undefined | null = '';

</script>

<main>
	<img
        class="register-icon"
		src="/imgs/{isRegister ? 'account-create.svg' : 'login.svg'}"
		alt={isRegister ? 'create account' : 'login'}
	/>
    <TextField label="test" variant='outline' type="text" {value}/>
</main>

<style lang="scss">
    main{
        display: flex;
        flex-direction: column;
        align-items: center;

        .register-icon {
            width: 80px;
            height: 80px;
        }
    }
</style>
