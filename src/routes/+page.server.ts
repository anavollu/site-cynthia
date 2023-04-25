import type { PageServerLoad } from './$types';

export const load = (async () => {
	return {
		data: {
			header: {
				title: 'Cynthia Vollu',
				sections: [
					{ name: 'Home', path: '#' },
					{ name: 'Sobre mim', path: '#about' },
					{ name: 'Serviços', path: '#services' },
					{ name: 'Trabalhos', path: '#works' },
					{ name: 'Contato', path: '#contact' }
				]
			},
			home: {
				title: 'Make e beleza',
				description:
					'Descubra o mundo da beleza com uma maquiadora e hair stylist profissional que oferece uma experiência personalizada para elevar sua autoestima.',
				button: 'Agendar horário',
				image:
					'https://raw.githubusercontent.com/anavollu/site-cynthia/main/figma-images/cynthia-home.jpeg'
			},
			about: {
				title: 'Sobre mim',
				description: `Oi, me chamo Cynthia Vollu! Desde pequena, eu sempre amei brincar com maquiagem e cabelo, e essa paixão me levou a seguir uma carreira como maquiadora profissional e hair stylist. Ao longo dos anos, me especializei em diversos cursos de maquiagem e penteado, aprendendo as melhores técnicas para realçar a beleza natural de cada pessoa.

				Além disso, sempre me preocupo em usar apenas produtos de qualidade em meus trabalhos, para garantir que o resultado seja impecável e duradouro. Cada rosto e cabelo tem características únicas, e é por isso que acredito que a personalização é fundamental na hora de criar um visual. Assim, sempre converso com meus clientes para entender suas preferências e necessidades, e crio um look que realce sua beleza natural e a faça se sentir confiante e bonita.
				
				Seja para um casamento, formatura, ensaio fotográfico ou simplesmente para um dia especial, estou aqui para ajudá-lo(a) a se sentir incrível. Entre em contato comigo e vamos criar juntos um visual que reflita sua personalidade e estilo!`,
				image:
					'https://raw.githubusercontent.com/anavollu/site-cynthia/main/figma-images/cynthia-about.jpg'
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
							'Uma maquiagem que realça a beleza natural é a chave para se sentir confiante e bonita em qualquer ocasião.'
					},
					// {
					// 	image:
					// 		'https://raw.githubusercontent.com/anavollu/site-cynthia/main/figma-images/make_noiva.jpeg',
					// 	title: 'Maquiagem noiva',
					// 	price: 'R$400',
					// 	description:
					// 		'A maquiagem da noiva deve realçar sua beleza natural e transmitir toda a emoção e felicidade deste dia tão especial.'
					// },
					{
						image:
							'https://raw.githubusercontent.com/anavollu/site-cynthia/main/figma-images/penteado3.jpg',
						title: 'Penteado',
						price: 'R$250',
						description:
							'Um penteado bem feito é capaz de transformar qualquer visual e deixar você pronta para arrasar em qualquer ocasião.'
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
						link: 'https://api.whatsapp.com/send?phone=5521982800111&text=Ol%C3%A1!%20Gostaria%20de%20agendar%20um%20hor%C3%A1rio%20para%20uma%20sess%C3%A3o%20de%20maquiagem%20e/ou%20penteado%20com%20voc%C3%AA.%20Voc%C3%AA%20poderia%20me%20informar%20quais%20s%C3%A3o%20seus%20hor%C3%A1rios%20dispon%C3%ADveis?',
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
				link: 'https://api.whatsapp.com/send?phone=5521982800111&text=Ol%C3%A1!%20Gostaria%20de%20agendar%20um%20hor%C3%A1rio%20para%20uma%20sess%C3%A3o%20de%20maquiagem%20e/ou%20penteado%20com%20voc%C3%AA.%20Voc%C3%AA%20poderia%20me%20informar%20quais%20s%C3%A3o%20seus%20hor%C3%A1rios%20dispon%C3%ADveis?'
			},
			footer: {
				description: 'Desenvolvido por Ana Carolina Vollu',
				link: 'https://ana-vollu.vercel.app/'
			}
		}
	};
}) satisfies PageServerLoad;
