import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
// import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import FacebookIcon from '../components/Icon/FacebookIcon';

import heroImage from '../images/header-background.webp';
/*import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';*/
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/recommendation.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Amer Lotfi Orimi resume website',
  description: "An abstract to my works",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  // Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Recommendations: 'recommendations',
} as const;

export type SectionId = typeof SectionId[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Amer Lotfi Orimi`,
  description: (
    <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
      I'm a passionate <strong className="text-stone-100">Frontend Engineer</strong>.
      I'm experienced in JavaScript, Web/App UI Development, HTML/CSS, ReactJS and React Native.
    </p>
  ),
  actions: [
    {
      href: '/assets/Amer_Lotfi_Orimi_-_June_2023.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `My fields of interest include Frontend development, building projects from scratch, maintaining legacy projects, migrating the architecture from legacy to new ones, and UI/UX design.
      I'm so eager about new technologies and readily accept new challenges.
      I'd love to write blog posts and articles and answer Stack Overflow questions in my spare time—also a big fan of using TypeScript in Frontend projects.`,
  aboutItems: [
    {label: 'Location', text: 'Balgat Mh. Sayıştay 06520 Çankaya Ankara', Icon: MapIcon},
    {label: 'Age', text: '37', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Iranian', Icon: FlagIcon},
    {label: 'Interests', text: 'Web/App development, Product consultant', Icon: SparklesIcon},
    {label: 'Study', text: 'University of Economic Science', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Freelance, Instant Domains, inc.', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'Persian',
        level: 10,
      },
      {
        name: 'English',
        level: 7,
      },
      {
        name: 'Turkish',
        level: 2,
      },
      {
        name: 'German',
        level: 1,
      },
    ],
  },
  {
    name: 'Web development',
    skills: [
      {
        name: 'React',
        level: 9,
      },
      {
        name: 'Typescript',
        level: 7,
      },
      {
        name: 'GraphQL',
        level: 8,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 5,
      },
    ],
  },
  {
    name: 'Mobile development',
    skills: [
      {
        name: 'React Native',
        level: 9,
      },
      {
        name: 'Flutter',
        level: 2,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = []; /*[
  {
    title: 'Project title 1',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage1,
  },
  {
    title: 'Project title 2',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage2,
  },
  {
    title: 'Project title 3',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage3,
  },
  {
    title: 'Project title 4',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage4,
  },
  {
    title: 'Project title 5',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage5,
  },
  {
    title: 'Project title 6',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage6,
  },
  {
    title: 'Project title 7',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage7,
  },
  {
    title: 'Project title 8',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage8,
  },
  {
    title: 'Project title 9',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage9,
  },
  {
    title: 'Project title 10',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage10,
  },
  {
    title: 'Project title 11',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage11,
  },
];*/

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'April 2007',
    location: 'Clown college',
    title: 'Masters in Beer tasting',
    content: <p>Describe your experience at school, what you learned, what useful skills you have acquired etc.</p>,
  },
  {
    date: 'March 2003',
    location: 'School of Business',
    title: 'What did you study 101',
    content: <p>Describe your experience at school, what you learned, what useful skills you have acquired etc.</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'March 2010 - Present',
    location: 'Awesome Development Company',
    title: 'Senior UX Engineer',
    content: (
      <p>
        Describe work, special projects, notable achievements, what technologies you have been working with, and
        anything else that would be useful for an employer to know.
      </p>
    ),
  },
  {
    date: 'March 2007 - February 2010',
    location: 'Garage Startup Studio',
    title: 'Junior bug fixer',
    content: (
      <p>
        Describe work, special projects, notable achievements, what technologies you have been working with, and
        anything else that would be useful for an employer to know.
      </p>
    ),
  },
];

/**
 * Recommendation section
 */
export const recommendation: TestimonialSection = {
  imageSrc: testimonialImage,
  recommendations: [
    {
      name: 'William Rose',
      text: 'Amer is a committed, hard working, and talented developer front-end engineer. He takes the time explain his methodology to those who are unfamiliar with his field and is receptive to feedback. He\'s a friendly person, a pleasure to work alongside, and more than pulls his weight as part of a team.',
      image: 'https://media.licdn.com/dms/image/D4E03AQFO_FWd9LCDhA/profile-displayphoto-shrink_200_200/0/1675187477985?e=1692230400&v=beta&t=hH74orlbS4pJ6qRFwNiLXWo8QsqulBuOmUH7g84w0uY',
      link: 'https://www.linkedin.com/in/williamrose944/'
    },
    {
      name: 'Matthew Bell',
      text: 'I worked alongside Amer on a recent app project. It was Amer\'s responsibility to develop my UI designs into a functional product, which he did to a very high standard. Amer is highly skilled, knowledgeable, and passionate about what he does. He\'s always willing to help and takes the time to listen, learn, and also share his knowledge with others. I enjoyed working with Amer and I\'m happy to recommend him to others.',
      image: 'https://media.licdn.com/dms/image/C4D03AQGhzWwp9xHmPA/profile-displayphoto-shrink_200_200/0/1650304098163?e=1692230400&v=beta&t=0Odg_eAgD6zMb7d70Z4VgRo2N5td7rnt0X2p-K1aYfU',
      link: 'https://www.linkedin.com/in/m-d-bell/'
    },
    {
      name: 'Can Ertaş',
      text: 'I have worked with many developers in my career. Amer was one of the best amongst them. His motto is “Everything is possible!” This explains a lot about his approach to the problems that we have faced. Amer was always a great asset to our team. Working with him in the same team was giving me the confidence that we can achieve the goals and do anything that the project needed. We weren’t only trying to solve the problems we have currently but what we possibly have in the future. I feel lucky to work with him and highly recommend him as a lead FE developer if you need one. ',
      image: 'https://media.licdn.com/dms/image/C4D03AQETorQcLRmPbg/profile-displayphoto-shrink_200_200/0/1638732144900?e=1692230400&v=beta&t=fxNPOM0Rmtpz1PQY2aab-L8f3O2Hkd0bpoqLqTb5rYs',
      link: 'https://www.linkedin.com/in/ertascan/'
    },
    {
      name: 'Lucy Paine',
      text: 'I worked with Amer on a project for a period of months, Amer was a delight to work with. He has a can do, positive attitude, he’s very knowledgeable, and his communication skills are excellent. I would highly recommend Amer, his super positive attitude to life will bring light into any work place or team.',
      image: 'https://media.licdn.com/dms/image/D4E03AQHpTBwB4lnIjQ/profile-displayphoto-shrink_200_200/0/1680114749563?e=1692230400&v=beta&t=k3QkTR-KhsI-apUZ0Gwe-EoEP5SkLKXNwTyXOQUwnwU',
      link: 'https://www.linkedin.com/in/lucy-paine-b2bb9b50/'
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: "I'm here to help you with any questions you might have about my work.",
  items: [
    {
      type: ContactType.Email,
      text: 'amerllica@gmail.com',
      href: 'mailto:amerllica@gmail.com',
    },
    {
      type: ContactType.Phone,
      text: '+447496052859',
      href: 'tel:+447496052859',
    },
    /*{
      type: ContactType.Location,
      text: 'Victoria BC, Canada',
      href: 'https://www.google.ca/maps/place/Victoria,+BC/@48.4262362,-123.376775,14z',
    },*/
    /*{
      type: ContactType.Instagram,
      text: '@tbakerx',
      href: 'https://www.instagram.com/tbakerx/',
    },*/
    {
      type: ContactType.Github,
      text: 'gh/amerllica',
      href: 'https://github.com/amerllica',
    },
    {
      type: ContactType.LinkedIn,
      text: 'in/amerllica',
      href: 'https://linkedin.com/in/amerllica',
    },
    {
      type: ContactType.Facebook,
      text: 'fb/amerllica',
      href: 'https://fb.com/amerllica',
    },
    {
      type: ContactType.Twitter,
      text: '@amerllica',
      href: 'https://twitter.com/amerllica',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/amerllica'},
  {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/6877799/amerllica'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/amerllica/'},
  // {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/tbakerx/'},
  {label: 'Facebook', Icon: FacebookIcon, href: 'https://fb.com/amerllica'},
  {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/amerllica'},
];
