<script lang="ts">
	export let contactItems: {
		title: string;
		icon: string;
		contact: string;
	}[];
</script>

<div class="flex flex-col gap-[30px]">
	{#each contactItems as item}
		<div class="flex items-center gap-8">
			<img src={item.icon} alt="Ícone" />
			<p class="break-all text-lg leading-[21.94px]">{item.contact}</p>
		</div>
	{/each}
</div>
