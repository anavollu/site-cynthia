<script lang="ts">
	export let servicesItems: {
		image: string;
		title: string;
		price: string;
		description: string;
	}[];
</script>

{#each servicesItems as item}
	<div class="flex flex-col">
		<img class="h-[201px] w-full object-cover" src={item.image} alt="Imagem" />
		<div class="mb-3 mt-6 flex justify-between">
			<p
				class="bg-gradient-to-r from-pink-default to-pink-100 bg-clip-text text-xl font-semibold leading-[24.38px] tracking-wide text-transparent"
			>
				{item.title}
			</p>
			<p>{item.price}</p>
		</div>
		<p>{item.description}</p>
	</div>
{/each}
