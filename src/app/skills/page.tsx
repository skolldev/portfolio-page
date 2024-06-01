import { type Metadata } from 'next'
import Image from 'next/image'

import { SimpleLayout } from '@/components/SimpleLayout'
import googleCyberSecurityLogo from '@/images/logos/google_cybersecurity.png'
import securityPlus from '@/images/logos/security_plus.png'

function LinkIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'Skills',
  description: "Skills and Technologies I've used",
}

const skills = [
  {
    label: 'Frontend',
    skills: [
      'Angular',
      'AngularJS',
      'React.js',
      'Next.js',
      'CSS',
      'SCSS',
      'HTML',
      'Tailwind',
      'Angular Material',
      'Typescript',
      'Javascript',
      'Stencil',
      'Storybook',
      'NgRx',
      'RxJS',
      'Jest',
      'Testing-Library',
      'Cypress',
      'Jasmine',
      'Protractor',
      'Selenium',
      'Webpack',
      'Ionic',
      'Redux',
    ],
    colors:
      'bg-purple-50 text-purple-700 ring-purple-700/10 dark:bg-purple-400/10 dark:text-purple-400 dark:ring-purple-400/30',
  },
  {
    label: 'Backend',
    skills: ['Node.js', 'C++', 'C#', '.NET', 'EF', 'Python', 'Java', 'SQL'],
    colors:
      'bg-blue-50 text-blue-700 ring-blue-700/10 dark:bg-blue-400/10 dark:text-blue-400 dark:ring-blue-400/30',
  },
  {
    label: 'Tools, Platforms & Other',
    skills: [
      'Git',
      'GitLab',
      'GitHub',
      'Github Actions',
      'Circle CI',
      'Jenkins',
      'Bitbucket',
      'SVN',
      'AWS',
      'Unity',
      'MacOS',
      'Windows',
      'Linux',
      'Bash',
      'Powershell',
      'Jira',
      'Confluence',
      'Keycloak',
      'OAuth',
      'Scrum',
      'Agile',
    ],
    colors:
      'bg-red-50 text-red-700 ring-red-700/10 dark:bg-red-400/10 dark:text-red-400 dark:ring-red-400/30',
  },
]
export default function Projects() {
  return (
    <SimpleLayout
      title="Skills and Technologies"
      intro="These are the different skills, technologies & co I've used over the years. I'm not equally skilled in all of them, but we could probably have a conversation about each of them. Not necessarily to show off, I just thought it's cool to see the amount of knowledge you built up in one place!"
    >
      {skills.map((category) => (
        <div key={category.label} className="mb-6">
          <h2 className="mb-2 text-xl font-medium">{category.label}</h2>
          <ul role="list" className="gap flex flex-wrap gap-2">
            {category.skills.map((skill) => (
              <span
                key={skill}
                className={`inline-flex items-center rounded-full px-3 py-1 text-xxs font-medium ring-1 ring-inset ${category.colors}`}
              >
                {skill}
              </span>
            ))}
          </ul>
        </div>
      ))}
      <h2 className="mb-2 text-xl font-medium">Certificates</h2>
      <ul className="grid grid-cols-1 items-center md:grid-cols-3 lg:grid-cols-6">
        <Image
          src={googleCyberSecurityLogo}
          alt="Google Cybersecurity Certificate"
        />
        <Image src={securityPlus} alt="CompTIA Security+" />
      </ul>
    </SimpleLayout>
  )
}
