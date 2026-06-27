export const organization = {
  name: 'Sahal Tech Innovation Labs',
  shortName: 'STIL',
  logo: '/logo-sahaltech.png',
  tagline:
    'Sahal Tech Innovation Labs conçoit des solutions technologiques innovantes et accompagne les organisations vers une transformation digitale durable.',
  website: 'www.sahaltechs.com',
  websiteUrl: 'https://www.sahaltechs.com',
  email: 'contact@sahaltechs.com',
  social: {
    linkedin: '#',
    facebook: '#',
    youtube: '#',
  },
  copyright: '© 2026 Sahal Tech Innovation Labs. Tous droits réservés.',
  privacyUrl: '#',
  termsUrl: '#',
}

export const exploreCards = [
  {
    id: 'presentation',
    title: 'Présentation de l\'entreprise',
    linkLabel: 'Voir le flipbook',
    color: 'blue',
    icon: 'book',
    url: '#',
  },
  {
    id: 'partnerships',
    title: 'Opportunités de partenariat',
    linkLabel: 'Voir le flipbook',
    color: 'green',
    icon: 'handshake',
    url: '#',
  },
  {
    id: 'projects',
    title: 'Projets & solutions',
    linkLabel: 'Voir le flipbook',
    color: 'orange',
    icon: 'briefcase',
    url: '#',
  },
]

export const executives = [
  {
    id: 'kassoum-kiendrebeogo',
    slug: 'kassoum-kiendrebeogo',
    name: 'Kassoum Kiendrebeogo',
    title: 'Chairman of Board',
    photo: '/photos/kassoum-kiendrebeogo.png',
    phone: '+226 78 25 56 23',
    email: 'kassoum235@gmail.com',
    website: 'www.sahaltechs.com',
    websiteUrl: 'https://www.sahaltechs.com',
    whatsapp: '+226 78 25 56 23',
    linkedin: 'https://www.linkedin.com/in/kassoum-kiendrebeogo-16bb9314a',
    vcardFileName: 'kassoum-kiendrebeogo.vcf',
  },
  {
    id: 'ami-samyra-ouedraogo',
    slug: 'ami-samyra-ouedraogo',
    name: 'Ami Samyra Ouedraogo',
    title: 'Head of AI and Innovation',
    photo: '/photos/ami-samyra-ouedraogo.png',
    phone: '+49 152 145 88348',
    email: 'ami.ouedraogo@sahaltechs.com',
    website: 'www.sahaltechs.com',
    websiteUrl: 'https://www.sahaltechs.com',
    whatsapp: '+49 15214588348',
    linkedin: 'https://www.linkedin.com/in/ouedraogo-ami-samyra',
    vcardFileName: 'ami-samyra-ouedraogo.vcf',
  },
  {
    id: 'nelly-milloungou-zagre',
    slug: 'nelly-milloungou-zagre',
    name: 'Nelly Milloungou/Zagre',
    title: 'Directrice Générale',
    photo: '/photos/nelly-milloungou-zagre.png',
    phone: '+226 65 93 43 63',
    email: 'miloungouzagrenelly@gmail.com',
    website: 'www.sahaltechs.com',
    websiteUrl: 'https://www.sahaltechs.com',
    whatsapp: '+226 65 93 43 63',
    linkedin: 'https://www.linkedin.com/in/nelly-miloungou-zagre-2988713a7',
    vcardFileName: 'nelly-milloungou-zagre.vcf',
  },
]

export function getExecutiveBySlug(slug) {
  return executives.find((exec) => exec.slug === slug)
}
