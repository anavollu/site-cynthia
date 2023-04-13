<script lang="ts">
	import type { PageData } from './$types';
	import '../app.css';

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
	<div id="header" class="sticky top-0 z-10 bg-pink-7">
		<div
			class="m-auto grid grid-cols-[30px_1fr_30px] items-center whitespace-nowrap px-6 py-5 md:max-w-[970px] lg:flex lg:flex-row-reverse lg:justify-between lg:px-0 xl:max-w-[1170px]"
		>
			<Menu {sections} />
			<p
				class="text-center font-crimsonpro text-[28px] leading-[43.65px] tracking-wider sm:text-[32px] lg:text-left"
			>
				{header.title}
			</p>
		</div>
	</div>
	<section id="home" class="bg-pink-7 px-6 py-10">
		<div
			class="mx-auto md:grid md:max-w-[970px] md:grid-cols-[450px_1fr] md:gap-8 lg:grid-cols-[600px_1fr] lg:gap-10 xl:max-w-[1170px]"
		>
			<div class="flex flex-col items-center gap-6 md:items-start md:justify-evenly">
				<p
					class="bg-[url('/src/lib/assets/paint.svg')] bg-center bg-no-repeat px-7 py-1 text-2xl font-bold uppercase leading-[29.26px] tracking-wide md:text-4xl lg:px-5 lg:text-4xl"
				>
					{home.title}
				</p>
				<img
					class="h-[194px] w-[194px] rounded-full bg-darkgreen object-cover md:hidden"
					src={home.image}
					alt="Imagem da Cynthia"
				/>
				<p class="md:text-lg">{home.description}</p>
				<ContactButton name={home.button} link={contact.link} />
			</div>
			<div class="flex justify-center">
				<img
					class="hidden w-full rounded-full bg-darkgreen object-cover md:inline md:max-h-[300px] md:max-w-[300px]"
					src={home.image}
					alt="Imagem da Cynthia"
				/>
			</div>
		</div>
	</section>
	<section id="about" class="scroll-mt-[83.6px] px-6 py-14">
		<div
			class="mx-auto flex flex-col gap-9 bg-white px-6 pb-9 pt-7 tracking-wide drop-shadow-[0_8px_30px_rgba(38,38,38,0.15)] md:max-w-[970px] lg:px-[63px] lg:py-[47px] xl:max-w-[1170px]
		"
		>
			<p class="text-xl font-semibold uppercase leading-[24.48px]">{about.title}</p>
			<div class="flex flex-col gap-5 md:flex-row-reverse">
				<p class="whitespace-pre-line text-justify font-poppins text-gray">{about.description}</p>
				<div class="flex justify-center">
					<img
						class="max-h-[500px] min-h-[250px] w-full rounded-[5px] object-cover md:max-h-[250px] md:w-auto md:max-w-[200px] xl:max-h-[337px] xl:max-w-[270px]"
						src={about.image}
						alt="Imagem da Cynthia"
					/>
				</div>
			</div>
		</div>
	</section>
	<section id="services" class="scroll-mt-[83.6px]">
		<div class="h-16 bg-pink-30" />
		<div
			class="mx-auto grid grid-cols-1 px-6 pb-[60px] pt-[46px] md:max-w-[970px] lg:flex lg:gap-[72px] lg:px-0 xl:max-w-[1170px]"
		>
			<div class="flex flex-col gap-2 lg:max-w-[238px]">
				<p class="uppercase leading-[19.5px] tracking-wide5 text-darkgreen">{services.subtitle}</p>
				<p class="text-xl font-semibold uppercase leading-[24.38px] tracking-wide">
					{services.title}
				</p>
				<p class="text-sm leading-[17.07px] text-gray">{services.description}</p>
			</div>
			<div class="mt-10 grid grid-cols-1 gap-[60px] md:grid-cols-2 lg:mt-0">
				<ServicesCard servicesItems={services.servicesItems} />
			</div>
		</div>
		<div class="h-16 bg-pink-30" />
	</section>
	<section id="works" class="scroll-mt-[83.6px] px-8 pb-[60px] pt-14">
		<div class="mx-auto flex flex-col md:max-w-[970px] xl:max-w-[1170px]">
			<p class="mb-10 text-xl font-semibold uppercase leading-[24.38px] tracking-wide">
				{works.title}
			</p>
			<div class="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
				<WorksCard worksItems={works.worksItems} />
			</div>
		</div>
	</section>
	<section id="contact" class="mb-[72px] scroll-mt-[100px] px-8">
		<div
			class="mx-auto flex flex-col bg-white px-5 py-7 tracking-wide drop-shadow-[0_8px_30px_rgba(38,38,38,0.15)] md:max-w-[970px] lg:px-[63px] lg:py-[47px] xl:max-w-[1170px]
	"
		>
			<div class="mb-10 w-max bg-gradient-to-r from-pink-50 to-pink-100 pb-[3px]">
				<div class="bg-white pb-1 text-xl font-semibold uppercase leading-[24.48px]">
					{contact.title}
				</div>
			</div>
			<div class="grid grid-cols-1 lg:grid-cols-2">
				<div class="flex flex-col justify-between">
					<ContactItems contactItems={contact.socialMedia} />
					<div class="mt-12 flex justify-center">
						<ContactButton name={contact.button} link={contact.link} />
					</div>
				</div>
				<img
					class="my-[60px] h-[407px] w-auto object-cover lg:my-0 lg:place-self-center"
					src={contact.image}
					alt="Imagem Cynthia maquiando modelo"
				/>
			</div>
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
