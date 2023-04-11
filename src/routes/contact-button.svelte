<script lang="ts">
	export let name: string;
	export let link: string;
</script>

<a
	href={link}
	target="_blank"
	class="rounded-[15px] bg-darkgreen px-[22px] py-[15px] text-sm font-semibold leading-[17.07px] text-white md:text-base"
	>{name}</a
>
