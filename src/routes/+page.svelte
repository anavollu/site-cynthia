<script lang="ts">
	import type { PageData } from './$types';
	import '../app.css';

	import imageHome from '$lib/assets/cynthia-home.jpeg';
	import imageAbout from '$lib/assets/cynthia-about.jpg';
	import ServicesCard from './services-card.svelte';
	import WorksCard from './works-card.svelte';
	import ContactItems from './contact-items.svelte';
	import ContactButton from './contact-button.svelte';
	import Menu from './menu.svelte';

	export let data: PageData;
	const header = data.data.header;
	const home = data.data.home;
	const about = data.data.about;
	const services = data.data.services;
	const works = data.data.works;
	const contact = data.data.contact;
	const footer = data.data.footer;
	const sections = header.sections;
</script>

<main class="font-montserrat">
	<div
		id="header"
		class="sticky top-0 z-10 grid grid-cols-[30px_1fr_30px] items-center bg-pink-7 px-6 py-5"
	>
		<Menu {sections} />
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
		<ContactButton name={home.button} link={contact.link} />
	</section>
	<section id="about" class="px-8 py-14">
		<div
			class="flex flex-col gap-9 bg-white px-5 pb-9 pt-7 tracking-wide drop-shadow-[0_8px_30px_rgba(38,38,38,0.15)]
		"
		>
			<p class="text-xl font-semibold uppercase leading-[24.48px]">{about.title}</p>
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
	<section id="works" class="px-8 pb-[60px] pt-14">
		<p class="mb-10 text-xl font-semibold uppercase leading-[24.38px] tracking-wide">
			{works.title}
		</p>
		<div class="flex flex-col gap-10">
			<WorksCard worksItems={works.worksItems} />
		</div>
	</section>
	<section id="contact" class="mb-[72px] px-8">
		<div
			class="flex flex-col bg-white px-5 py-7 tracking-wide drop-shadow-[0_8px_30px_rgba(38,38,38,0.15)]
	"
		>
			<div class="mb-10 w-max bg-gradient-to-r from-pink-50 to-pink-100 pb-[3px]">
				<div class="bg-white pb-1 text-xl font-semibold uppercase leading-[24.48px]">
					{contact.title}
				</div>
			</div>
			<ContactItems contactItems={contact.socialMedia} />
			<div class="mt-12" />
			<ContactButton name={contact.button} link={contact.link} />
			<img
				class="my-[60px] h-[407px] object-cover"
				src={contact.image}
				alt="Imagem Cynthia maquiando modelo"
			/>
		</div>
	</section>
	<div id="footer">
		<div
			class="flex h-[90px] items-center justify-center bg-gradient-to-r from-pink-30 to-pink-50 font-poppins leading-[21.82px] text-white"
		>
			<a href={footer.link} target="_blank">{footer.description}</a>
		</div>
	</div>
</main>
