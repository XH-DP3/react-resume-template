import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  CalendarIcon,
  MapIcon,
  SparklesIcon,
  CpuChipIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
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
  title: 'Xinghao Huang',
  description: "A personal space where I share my projects, thoughts, learning, and life.",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'projects',
  Resume: 'academic journey',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Hi, I'm Xinghao (Michael)`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a third-year Statistics student at the University of British Columbia, 
        with interests in data science and machine learning, and a concentration in computer science.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        This website is a space where I share my projects, reflections, and learning, documenting my growth over time and helping others get to know me better.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
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
  description: `I am originally from the northeastern part of China (Changchun, Jilin), and moved to Canada in 2019 when I was 14 years old. My life has changed a lot since that time. Through various challenges and transitions, these experiences eventually led me to the University of British Columbia, where I am now pursuing my interests in data science and machine learning.`,
  aboutItems: [
    {label: 'Location', text: 'Vancouver, BC', Icon: MapIcon},
    {label: 'Age', text: '20', Icon: CalendarIcon},
    {label: 'Study', text: 'University of British Columbia', Icon: AcademicCapIcon},
    {label: 'Focus', text: 'Statistics & Computer Science', Icon: CpuChipIcon},
    {label: 'Interests', text: 'Data Science & Machine Learning', Icon: ChartBarIcon},
    {label: 'Hobbies', text: 'Basketball, Soccer, Music', Icon: SparklesIcon}
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
        name: 'English',
        level: 10,
      },
      {
        name: 'French',
        level: 4,
      },
      {
        name: 'Spanish',
        level: 3,
      },
    ],
  },
  {
    name: 'Frontend development',
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
        level: 6,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 8,
      },
      {
        name: 'Rust',
        level: 5,
      },
      {
        name: 'Golang',
        level: 4,
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
        level: 4,
      },
      {
        name: 'Swift',
        level: 3,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Simple Music Player',
    description: 'Give a short description of your project here.',
    url: 'https://github.com/XH-DP3/Simple-Music-Player',
    image: porfolioImage1,
  },
  {
    title: 'SkySync',
    description: 'Give a short description of your project here.',
    url: 'https://github.com/XH-DP3/SkySync',
    image: porfolioImage2,
  },
  {
    title: 'Canadian Fire Visualization',
    description: 'Give a short description of your project here.',
    url: 'https://github.com/XH-DP3/Canadian-Fire-Visualization',
    image: porfolioImage3,
  },
  {
    title: 'Airbnb Price Analysis in Athens',
    description: 'Give a short description of your project here.',
    url: 'https://github.com/XH-DP3/Airbnb-Price-Analysis-in-Athens',
    image: porfolioImage4,
  }
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const whereIStarted: TimelineItem[] = [
  {
    date: 'September 2023',
    location: 'Kelowna, BC',
    title: 'Stage 1: Exploration at UBC Okanagan',
    content: <p>Describe your experience at school, what you learned, what useful skills you have acquired etc.</p>,
  },
  {
    date: 'September 2024',
    location: 'Vancouver, BC',
    title: 'Stage 2: Transition and Adjustment at UBC Vancouver',
    content: <p>Describe your experience at school, what you learned, what useful skills you have acquired etc.</p>,
  },
  {
    date: 'Feburary 2025',
    location: 'Vancouver, BC',
    title: 'Stage 3: Focus and Direction',
    content: <p>Describe your experience at school, what you learned, what useful skills you have acquired etc.</p>,
  },
  
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'John Doe',
      text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Jane Doe',
      text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Someone else',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Here is a good spot for a message to your readers to let them know how best to reach out to you.',
  items: [
    {
      type: ContactType.Email,
      text: 'xinghaohuang3@gmail.com',
      href: 'mailto:xinghaohuang3@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Vancouver BC, Canada',
      href: 'https://www.google.ca/maps/place/Vancouver,+BC/@49.2577062,-123.2063043,12z',
    },
    {
      type: ContactType.Instagram,
      text: '@huangxinghao512',
      href: 'https://www.instagram.com/huangxinghao512/',
    },
    {
      type: ContactType.Github,
      text: 'XH-DP3',
      href: 'https://github.com/XH-DP3',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/XH-DP3'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/xinghao-huang-597910300/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/huangxinghao512/'}
];
