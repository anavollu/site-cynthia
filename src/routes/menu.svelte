<script lang="ts">
	import menuIcon from '$lib/assets/menu-icon.svg';
	import MenuItems from './menu-items.svelte';

	export let sections: {
		name: string;
		path: string;
	}[];
	export let menuOpen = false;
</script>

<button
	on:click={() => {
		menuOpen = !menuOpen;
	}}
>
	<img class="left-[27px] h-[30px] w-[30px]" src={menuIcon} alt="Ícone de menu" />
</button>
<MenuItems {sections} bind:menuOpen />
