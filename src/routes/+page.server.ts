import type { PageServerLoad } from './$types';

export const load = (async () => {
	return {
		data: {
			header: {
				title: 'Cynthia Vollu',
				menu: ['Sobre mim', 'Serviços', 'Trabalhos', 'Contato']
			},
			home: {
				title: 'Make e beleza',
				description:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit enim donec semper pellentesque vitae. Cras ac fringilla suspendisse mi velit quis. Odio eu posuere.',
				button: 'Agendar horário',
				image: '',
				bgImage: ''
			},
			about: {
				title: 'Sobre mim',
				description: `Hi. I’m Thania Certified Pro Artistic Makeup Lasalle College International. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nulla sagittis eget semper semper. Euismod facilisi tristique duis maecenas id id.
					
				Cum ipsum, pellentesque volutpat id. Proin augue nunc, aliquet vel suspendisse non consequat dignissim tempus. Nibh etiam vitae, cum fusce eget. Amet donec pellentesque lorem integer duis bibendum bibendum ac imperdiet.`,
				image: ''
			},
			services: {
				title: 'Serviços',
				subtitle: 'Make | Cabelo',
				description: 'Atendimento a domicílio em Niterói e Rio de Janeiro',
				servicesItems: [
					{
						image:
							'https://raw.githubusercontent.com/anavollu/site-cynthia/main/figma-images/make2.jpg',
						title: 'Maquiagem casual',
						price: 'R$250',
						description:
							'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla egestas felis, in aliquam.'
					},
					// {
					// 	image:
					// 		'https://raw.githubusercontent.com/anavollu/site-cynthia/main/figma-images/make_noiva.jpeg',
					// 	title: 'Maquiagem noiva',
					// 	price: 'R$400',
					// 	description:
					// 		'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla egestas felis, in aliquam.'
					// },
					{
						image:
							'https://raw.githubusercontent.com/anavollu/site-cynthia/main/figma-images/penteado3.jpg',
						title: 'Penteado',
						price: 'R$250',
						description:
							'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla egestas felis, in aliquam.'
					}
				]
			},
			works: {
				title: 'Meus trabalhos',
				worksItems: [
					{
						image:
							'https://raw.githubusercontent.com/anavollu/site-cynthia/main/figma-images/make1.jpg',
						title: 'Maquiagem casual'
					},
					{
						image:
							'https://raw.githubusercontent.com/anavollu/site-cynthia/main/figma-images/penteado4.jpg',
						title: 'Penteado'
					},
					{
						image:
							'https://raw.githubusercontent.com/anavollu/site-cynthia/main/figma-images/make11.jpg',
						title: 'Maquiagem casual'
					},
					{
						image:
							'https://raw.githubusercontent.com/anavollu/site-cynthia/main/figma-images/make9.jpg',
						title: 'Maquiagem casual'
					},
					{
						image:
							'https://raw.githubusercontent.com/anavollu/site-cynthia/main/figma-images/penteado2.jpg',
						title: 'Penteado'
					},
					{
						image:
							'https://raw.githubusercontent.com/anavollu/site-cynthia/main/figma-images/make4.jpg',
						title: 'Maquiagem casual'
					},
					{
						image:
							'https://raw.githubusercontent.com/anavollu/site-cynthia/main/figma-images/make12.jpeg',
						title: 'Maquiagem casual'
					},
					{
						image:
							'https://raw.githubusercontent.com/anavollu/site-cynthia/main/figma-images/penteado3.jpg',
						title: 'Penteado'
					}
				]
			},
			contact: {
				title: 'Contato',
				socialMedia: [
					{
						title: 'whatsapp',
						link: 'https://wa.me/5521982800111',
						icon: 'https://raw.githubusercontent.com/anavollu/site-cynthia/c4cc42f8c9653b63a3ea0d54da359a1d75cfce6e/src/lib/assets/whatsapp-icon.svg',
						contact: '(21) 98280-0111'
					},
					{
						title: 'instagram',
						link: 'https://www.instagram.com/cynthiavollumakeup/',
						icon: 'https://raw.githubusercontent.com/anavollu/site-cynthia/c4cc42f8c9653b63a3ea0d54da359a1d75cfce6e/src/lib/assets/instagram-icon.svg',
						contact: '@cynthiavollumakeup'
					},
					{
						title: 'email',
						link: 'mailto:contatocynthiavollu@gmail.com',
						icon: 'https://raw.githubusercontent.com/anavollu/site-cynthia/c4cc42f8c9653b63a3ea0d54da359a1d75cfce6e/src/lib/assets/email-icon.svg',
						contact: 'contatocynthiavollu@gmail.com'
					}
				],
				image:
					'https://raw.githubusercontent.com/anavollu/site-cynthia/main/figma-images/contato-img.jpg',
				button: 'Agendar horário',
				link: 'https://wa.me/5521982800111'
			},
			footer: {
				description: 'Desenvolvido por Ana Carolina Vollu',
				link: 'https://ana-vollu.vercel.app/'
			}
		}
	};
}) satisfies PageServerLoad;
