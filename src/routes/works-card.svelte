<script lang="ts">
	export let worksItems: {
		image: string;
		title: string;
	}[];
</script>

{#each worksItems as item}
	<div class="flex flex-col gap-4 border-b-[1px] border-b-gray">
		<img
			class="max-h-[302.94px] w-full object-cover lg:max-h-[210px] xl:max-h-[263px]"
			src={item.image}
			alt="Imagem de {item.title}"
		/>
		<p class="mb-2 leading-[19.58px] tracking-wide">{item.title}</p>
	</div>
{/each}
