<script lang="ts">
	import menuIcon from '$lib/assets/menu-icon.svg';
	import MenuItems from './menu-items.svelte';

	export let sections: {
		name: string;
		path: string;
	}[];
	export let menuOpen = false;
</script>

<div class="lg:hidden">
	<button
		on:click={() => {
			menuOpen = !menuOpen;
		}}
	>
		<img class="left-[27px] h-5 w-5 sm:h-[30px] sm:w-[30px]" src={menuIcon} alt="Ícone de menu" />
	</button>
	<MenuItems {sections} bind:menuOpen />
</div>

<div class="hidden gap-[45px] font-medium leading-[21.82px] lg:flex">
	{#each sections as { name, path }}
		<a href={path}>
			<button
				on:click={() => {
					menuOpen = !menuOpen;
				}}
			>
				{name}
			</button>
		</a>
	{/each}
</div>
