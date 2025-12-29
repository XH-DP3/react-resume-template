import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  CalendarIcon,
  MapIcon,
  SparklesIcon,
  CpuChipIcon,
  ChartBarIcon,
  IdentificationIcon,
  ClockIcon
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
  TimelineItem
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
  Projects: 'projects',
  Journey: 'journey',
  Testimonials: 'testimonials',
  Contact: 'contact',
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
  description: `I am originally from northeastern China (Changchun, Jilin). I first came to Canada in 2019 at the age of 14, and over the years have studied and lived between China and Canada. Through a series of transitions and challenges, these experiences eventually led me to the University of British Columbia, where I am now pursuing my interests in data science and machine learning.`,
  aboutItems: [
    {label: 'Name', text: 'Xinghao Huang', Icon: IdentificationIcon},
    {label: 'Age', text: '20', Icon: CalendarIcon},
    {label: 'Location', text: 'Vancouver, BC', Icon: MapIcon},
    {label: 'Time Zone', text: 'Pacific Time', Icon: ClockIcon},
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
    name: 'Statistics & Data Analysis',
    skills: [
        {
        name: 'Exploratory Data Analysis (EDA)',
        description: 'Data cleaning, transformation, and exploratory visualization for structured datasets',
        usedIn: ['Airbnb Prices Analysis', 'Canadian Fire Visualization'],
        },
        {
        name: 'Statistical Inference',
        description: 'Confidence intervals, hypothesis testing, and model-based inference',
        usedIn: ['Airbnb Prices Analysis'],
        },
        {
        name: 'Regression Modeling',
        description: 'Linear and logistic regression, diagnostics, transformations, and model selection',
        usedIn: ['Airbnb Prices Analysis'],
        },
        {
        name: 'Experimental & Comparative Analysis',
        description: 'ANOVA, A/B testing, and comparative evaluation of outcomes',
        },
    ],
    },
    {
    name: 'Programming & Software Development',
    skills: [
        {
        name: 'Python',
        description: 'Data analysis, scripting, and backend development',
        usedIn: ['Canadian Fire Visualization', 'SkySync', 'UBC Live'],
        },
        {
        name: 'R',
        description: 'Statistical modeling, inference, and visualization',
        usedIn: ['Airbnb Prices Analysis'],
        },
        {
        name: 'Java',
        description: 'Object-oriented programming, design patterns, and testing',
        usedIn: ['Simple Music Player'],
        },
        {
        name: 'C++',
        description: 'Data structures, algorithms, memory management, and performance-oriented programming'
        },
    ],
    },
    {
    name: 'Computer Science Foundations',
    skills: [
        {
        name: 'Object-Oriented Programming',
        description: 'Encapsulation, abstraction, and modular design',
        usedIn: ['Simple Music Player'],
        },
        {
        name: 'Data Structures & Algorithms',
        description: 'Time complexity analysis, core data structures, and algorithmic problem-solving',
        },
        {
        name: 'Memory & Performance Awareness',
        description: 'Pointers, references, and efficiency considerations',
        },
    ],
    },
    {
    name: 'Tools & Workflow',
    skills: [
        { name: 'Git & GitHub', description: 'Version control and collaborative development' },
        { name: 'Jupyter & RStudio', description: 'Reproducible analysis and reporting' },
        { name: 'VS Code', description: 'Development and debugging across languages' },
        { name: 'Flask', description: 'Lightweight backend APIs', usedIn: ['SkySync'] },
    ],
    }

];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Simple Music Player',
    description: 'A GUI-based music player application built with Java, supporting fundamental features such as play, pause, skip, and playlist management.',
    url: 'https://github.com/XH-DP3/Simple-Music-Player',
    image: porfolioImage1,
  },
  {
    title: 'SkySync',
    description: 'A weather-responsive web application that generates customized playlists based on real-time weather data.',
    url: 'https://github.com/XH-DP3/SkySync',
    image: porfolioImage2,
  },
  {
    title: 'Canadian Fire Visualization',
    description: 'Two interactive dashboards that visualize and analyze Canadian wildfire severity from 1940 to 2023.',
    url: 'https://github.com/XH-DP3/Canadian-Fire-Visualization',
    image: porfolioImage3,
  },
  {
    title: 'Airbnb Price Analysis in Athens',
    description: 'An inferential study that analyzes factors influencing Airbnb prices in Athens, using statistical modeling techniques.',
    url: 'https://github.com/XH-DP3/Airbnb-Price-Analysis-in-Athens',
    image: porfolioImage4,
  }
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const whereIStarted: TimelineItem[] = [
  {
    date: 'September 2023 - April 2024',
    location: 'Kelowna, BC',
    title: 'Stage 1: Exploration at UBC Okanagan',  
    content: (
        <>
            <p>
                My university journey began at UBC Okanagan. At the time, I had little clarity about my future direction. I chose Statistics largely based on my family’s suggestion, without a clear understanding of what the field involved beyond basic data visualizations such as charts and graphs.
            </p>
            <p>
                The transition was challenging. I was returning to an in-person learning environment after a long gap and was introduced to entirely new subjects, particularly computer science. I took my first-ever programming course during this period, which initially felt like learning a new language from scratch. Progress was slow, and I often had to revisit fundamental concepts repeatedly before they began to make sense.
            </p> 
            <p>
                Academically and personally, the beginning did not match my expectations of university life. Adjusting to a new environment required me to consider how I studied, managed time, and approached unfamiliar material. Over time, as I adapted to the pace and structure of university coursework, I began to see steady improvement in both my understanding and academic performance.
            </p>
            <p>
                By focusing on building a consistent routine centered around study and rest, I was able to establish a stable learning rhythm. This period became foundational for developing discipline, problem-solving skills, and resilience. I completed my first year with strong academic results, which allowed me to transfer to UBC Vancouver and continue refining my academic focus.
            </p>
        </>
    ),
  },
  {
    date: 'September 2024 - April 2025',
    location: 'Vancouver, BC',
    title: 'Stage 2: Transition and Adjustment at UBC Vancouver',
    content: (
        <>
            <p>
                After transferring to UBC Vancouver, I anticipated a higher level of difficulty and expected to overcome it in the same way I had during my first year. I had formally entered the Statistics major, which also meant encountering a new level of abstraction and rigor, beginning with my first upper-level statistics courses.
            </p>
            <p>
                While the material itself was challenging, the more difficult realization was that the study strategies, techniques, and mindset that had worked well for me in my first year were no longer sufficient. Despite putting in significant effort, my results did not reflect the same level of progress I had previously experienced. This unfamiliar mismatch between input and outcome required me to reassess both my expectations and my approach to learning.
            </p>
            <p>
                Academically, this period was marked by fluctuation rather than steady improvement. Progress felt inconsistent, and moments of confidence were often followed by setbacks. Entering a more competitive environment made me realize that I was no longer performing at the top of every class, a reality that was difficult to accept at first. This tension between effort, expectation, and outcome led to a period of frustration and uncertainty, and forced me to confront assumptions I had previously held about performance and success.
            </p>
            <p>
                Over time, I came to accept this shift and recognized that comparison was less productive than focusing on long-term development. By the second term, I felt more stable and faced a clear choice: to ease my workload by lowering expectations, or to continue pushing forward and adapt to the new standard. I chose the latter.
            </p>
            <p>
                By returning to a disciplined routine centered on focused study and deliberate rest, and by gradually refining how I approached complex material, I began to regain momentum. While this period did not bring an immediate return to the top of every class, it marked a clear transformation in my mindset and learning capacity. I became a consistently strong performer across many courses, with a more resilient approach to difficulty and a deeper understanding of how to sustain progress over time.
            </p>
        </>
)

  },
  {
    date: 'September 2025 - Present',
    location: 'Vancouver, BC',
    title: 'Stage 3: Focus and Direction',
    content: (
    <>
      <p>
        Building on the exploration and adjustment of the first two stages, I entered my third year with greater clarity about my direction and stronger confidence in my foundation. With a more stable mindset and refined learning habits, I began actively seeking opportunities to gain experience beyond coursework, including participating in events, developing projects, and engaging more deeply with the academic and technical communities around me.
      </p>
      <p>
        Through these experiences, I met many peers and became more aware of the diversity in academic starting points. Compared to many students who entered university with prior experience in programming or statistics, my own starting point was relatively late. I had no formal exposure to these fields before university, and much of my early time was spent exploring and building fundamentals. Recognizing this difference has helped me contextualize my progress rather than diminish it.
      </p>
      <p>
        I am satisfied with what I have achieved so far, not because I believe I have reached an endpoint, but because my growth has been intentional and sustainable. While I may have started later than others, I now approach challenges with greater composure and resilience, understanding that fluctuations are a natural part of long-term development.
      </p>
      <p>
        Over time, I have developed a personal rhythm for work and rest, shaped by repetition and reflection. I have learned to work with focus and commitment, and to consciously allow myself to rest once meaningful progress has been made. This approach has become a reliable framework that supports both productivity and well-being.
      </p>
      <p>
        With a background in Statistics and a concentration in Computer Science, I am particularly drawn to data science and machine learning as future directions. I remain early in my journey and aware of how much there is still to learn, but I no longer view this as a disadvantage. Compared to where I was in previous years, I now move forward with clarity, patience, and the confidence that I will continue to grow with each stage ahead.
      </p>
    </>
  )
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
