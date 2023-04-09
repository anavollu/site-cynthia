<script lang="ts">
	import type { PageData } from './$types';
	import '../app.css';

	import menuIcon from '$lib/assets/menu-icon.svg';
	import imageHome from '$lib/assets/cynthia-home.jpeg';
	import imageAbout from '$lib/assets/cynthia-about.jpg';
	import ServicesCard from './services-card.svelte';

	export let data: PageData;
	const header = data.data.header;
	const home = data.data.home;
	const about = data.data.about;
	const services = data.data.services;
	const works = data.data.works;
	const contact = data.data.contact;
	const footer = data.data.footer;
</script>

<main class="font-montserrat">
	<div
		id="header"
		class="sticky top-0 z-10 grid grid-cols-[30px_1fr_30px] items-center bg-pink-7 px-6 py-5"
	>
		<img class="left-[27px] h-[30px] w-[30px]" src={menuIcon} alt="Ícone de menu" />
		<p class="text-center font-crimsonpro text-[32px] leading-[43.65px] tracking-wider">
			{header.title}
		</p>
	</div>
	<section id="home" class="flex flex-col items-center gap-6 bg-pink-7 px-6 py-10">
		<p
			class="bg-[url('/src/lib/assets/paint.svg')] bg-center bg-no-repeat px-7 py-1 text-2xl font-bold uppercase leading-[29.26px] tracking-wide"
		>
			{home.title}
		</p>
		<img
			class="h-[194px] w-[194px] rounded-full bg-darkgreen object-cover"
			src={imageHome}
			alt="Imagem da Cynthia"
		/>
		<p>{home.description}</p>
		<button
			class="rounded-[15px] bg-darkgreen px-[25px] py-4 text-sm font-semibold leading-[17.07px] text-white"
			>{home.button}</button
		>
	</section>
	<section id="about" class="px-8 py-14">
		<div
			class="flex flex-col gap-9 bg-white px-5 pb-9 pt-7 tracking-wide drop-shadow-[0_8px_30px_rgba(38,38,38,0.15)]
		"
		>
			<p class="text-xl font-semibold leading-[24.48px]">{about.title}</p>
			<p class="whitespace-pre-line text-justify font-poppins text-gray">{about.description}</p>
			<div class="px-10">
				<img
					class="max-h-[527px] min-h-[212px] w-auto self-center rounded-[5px] object-cover"
					src={imageAbout}
					alt="Imagem da Cynthia"
				/>
			</div>
		</div>
	</section>
	<section id="services">
		<div class="h-16 bg-pink-30" />
		<div class="px-6 pb-[60px] pt-[46px]">
			<div class="flex flex-col gap-2">
				<p class="uppercase leading-[19.5px] tracking-wide5 text-darkgreen">{services.subtitle}</p>
				<p class="text-xl font-semibold uppercase leading-[24.38px] tracking-wide">
					{services.title}
				</p>
				<p class="text-sm leading-[17.07px] text-gray">{services.description}</p>
			</div>
			<div class="mt-10 flex flex-col gap-[60px]">
				<ServicesCard servicesItems={services.servicesItems} />
			</div>
		</div>
		<div class="h-16 bg-pink-30" />
	</section>
	<section id="works">meus trabalhos</section>
	<section id="contact">contato</section>
	<div id="footer">footer</div>
</main>
