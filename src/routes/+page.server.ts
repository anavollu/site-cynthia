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
				servicesItems: {
					one: {
						image: '',
						title: 'Maquiagem casual',
						price: 'R$250',
						description:
							'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla egestas felis, in aliquam.'
					},
					two: {
						image: '',
						title: 'Maquiagem noiva',
						price: 'R$400',
						description:
							'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla egestas felis, in aliquam.'
					},
					three: {
						image: '',
						title: 'Penteado',
						price: 'R$250',
						description:
							'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla egestas felis, in aliquam.'
					}
				}
			},
			works: {
				title: 'Meus trabalhos',
				worksItems: {
					one: {
						image: '',
						title: 'Maquiagem casual'
					},
					two: {
						image: '',
						title: 'Penteado'
					},
					three: {
						image: '',
						title: 'Maquiagem casual'
					},
					four: {
						image: '',
						title: 'Maquiagem casual'
					},
					five: {
						image: '',
						title: 'Penteado'
					},
					six: {
						image: '',
						title: 'Maquiagem casual'
					},
					seven: {
						image: '',
						title: 'Maquiagem casual'
					},
					eight: {
						image: '',
						title: 'Penteado'
					}
				}
			},
			contact: {
				title: 'Contato',
				socialMedia: {
					whatsapp: {
						icon: '',
						phone: '(21) 98280-0111'
					},
					instagram: {
						icon: '',
						user: '@cynthiavollumakeup'
					},
					email: {
						icon: '',
						email: 'contatocynthiavollu@gmail.com'
					}
				},
				button: 'Agendar horário'
			},
			footer: {
				description: 'Desenvolvido por Ana Carolina Vollu',
				link: 'https://curriculo-ana-rho.vercel.app/'
			}
		}
	};
}) satisfies PageServerLoad;