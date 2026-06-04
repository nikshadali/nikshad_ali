export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
}

export const certifications: Certification[] = [
  {
    id: 'meta-frontend',
    title: 'Meta Front-End Developer Professional Certificate',
    issuer: 'Coursera / Meta',
    date: '2024'
  },
  {
    id: 'mern-stack',
    title: 'MERN Stack: Build Modern Web Applications',
    issuer: 'NexusBerry',
    date: 'Aug 2024'
  },
  {
    id: 'freelancing',
    title: 'Freelancing',
    issuer: 'DigiSkills.pk, Ministry of IT Pakistan',
    date: 'Apr 2020'
  },
  {
    id: 'wordpress',
    title: 'WordPress',
    issuer: 'DigiSkills.pk',
    date: '2020'
  },
  {
    id: 'linux',
    title: 'NDG Linux Essentials',
    issuer: 'Cisco Networking Academy',
    date: 'Sep 2020'
  }
];
