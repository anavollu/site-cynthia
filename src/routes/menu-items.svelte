<script lang="ts">
	export let sections: {
		name: string;
		path: string;
	}[];
	export let menuOpen = false;
</script>

{#if menuOpen}
	<div
		class="absolute left-5 top-[66px] z-10 flex min-w-[174px] flex-col items-center gap-5 rounded-[10px] bg-pink-pastel py-4 font-medium leading-[21.82px]"
	>
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
{/if}
