import './Projects.scss';
import React, { useCallback, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { Page } from '../../components/';
import ProjectCard from './ProjectCard/ProjectCard';
import { useEffect } from 'react';

export enum Tag {
  UI_UX,
  React,
  ReactNative,
  Flutter,
  Unity,
  Firebase,
  NodeJS,
  MobileApp,
  YouTube,
};
export enum Link {
  Codepen,
  Github,
  YouTube,
};
export interface iLink {
  link?: Link;
  url: string;
}
export interface iProject {
  id: number;
  title: string;
  description: string;
  imgUrl: string;
  tags?: Tag[];
  links?: iLink[];
  gradient?: string[];
}

const projects: iProject[] = [
  {
    id: 0,
    title: 'Lash Shack',
    description: "description",
    imgUrl: 'data:image/jpeg;base64,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',
    tags: [
      Tag.React, Tag.Firebase,
    ],
    links: [
      {
        link: Link.Github,
        url: "https://github.com"
      }
    ],
    gradient: [
      "#efb3b7",
      '#102879'
    ]
  },
  {
    id: 1,
    title: 'Test',
    description: "description",
    imgUrl: 'https://images4.alphacoders.com/819/819837.png',
    tags: [
      Tag.React, Tag.Firebase, Tag.Unity,
    ],
    links: [
      {
        link: Link.Codepen,
        url: "https://codepen.io"
      },
      {
        link: Link.Github,
        url: "https://github.com"
      }
    ]
  },
  {
    id: 2,
    title: 'Test2',
    description: "description2",
    imgUrl: 'https://wallpaperaccess.com/full/938178.jpg',
    tags: [
      Tag.React, Tag.MobileApp
    ],
    links: [
      {
        link: Link.Github,
        url: "https://github.com"
      }
    ]
  },
  {
    id: 3,
    title: 'Test3',
    description: "description3",
    imgUrl: 'https://c4.wallpaperflare.com/wallpaper/1003/738/330/yakusoku-no-neverland-ray-the-promised-neverland-emma-the-promised-neverland-the-promised-neverland-anime-hd-wallpaper-preview.jpg',
    tags: [
      Tag.React, Tag.Firebase
    ],
    links: [
      {
        link: Link.Codepen,
        url: "https://codepen.io"
      }
    ]
  },
  {
    id: 4,
    title: 'Test4',
    description: "description4",
    imgUrl: 'https://images7.alphacoders.com/722/722029.png',
    tags: [Tag.YouTube],
    links: [
      {
        link: Link.Codepen,
        url: "https://codepen.io"
      },
      {
        link: Link.Github,
        url: "https://github.com"
      },
      {
        link: Link.YouTube,
        url: "https://youtube.com"
      }
    ]
  },
  {
    id: 5,
    title: 'Test5',
    description: "description5",
    imgUrl: 'https://i.pinimg.com/originals/a0/9b/2f/a09b2f34c1916f0ef332d323f79cbbc7.jpg',
    tags: [
      Tag.Firebase,
      Tag.UI_UX
    ],
    links: [
      {
        link: Link.Github,
        url: "https://github.com"
      }
    ]
  },
  // {
  //   id: 6,
  //   title: 'Test6',
  //   description: "description6",
  //   imgUrl: 'https://wallpaper.dog/large/20472229.jpg',
  //   // 'https://images.unsplash.com/photo-1498036882173-b41c28a8ba34?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80',
  //   tags: [
  //     Tag.React, Tag.Firebase
  //   ],
  //   links: [
  //     {
  //       link: Link.Codepen,
  //       url: "https://codepen.io"
  //     }
  //   ]
  // },
  // {
  //   id: 7,
  //   title: 'Test7',
  //   description: "description7",
  //   imgUrl: 'https://images.unsplash.com/photo-1511447333015-45b65e60f6d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=955&q=80',
  //   tags: [
  //     Tag.React
  //   ],
  //   links: [
  //     {
  //       link: Link.Github,
  //       url: "https://github.com"
  //     }
  //   ]
  // },
  // {
  //   id: 8,
  //   title: 'Test8',
  //   description: "description8",
  //   imgUrl: 'https://images.unsplash.com/photo-1573108724029-4c46571d6490?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=527&q=100',
  //   tags: [
  //     Tag.React, Tag.Firebase
  //   ],
  //   links: [
  //     {
  //       link: Link.Codepen,
  //       url: "https://codepen.io"
  //     },
  //     {
  //       link: Link.Github,
  //       url: "https://github.com"
  //     }
  //   ]
  // },
]
const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const filters = ['All', 'UI_UX', 'Web Apps', 'Mobile App', 'React JS', 'Unity'];
  const [filteredList, setFilteredList] = useState<iProject[]>([]);



  useEffect(() => {
    setFilteredList(projects);
  }, [])


  const handleFilter = useCallback((selectFilter: string) => {
    if (selectFilter === "All")
      setFilteredList(projects);
    else {
      let selectFilterTag = (Tag as any)[selectFilter];
      setFilteredList(projects.filter((item) => item.tags?.includes(selectFilterTag)));
    }
    setActiveFilter(selectFilter)
  }, []);


  return (
    <Page id='projects' className='app__projects app__page--padtop' pageTitle='.projects();'>

      <div className="app__projects--filters">
        {filters.map((item, index) => (
          <div key={index} className={`app__projects--filters-item app__flex p-text app__hover-with-shadow ${activeFilter === item ? "app__projects--filters-item-active" : ""}`} onClick={() => handleFilter(item)}>
            {item}
          </div>
        ))}
      </div>

      <p className='app__projects--text'>Here are a few projects I've worked on recently.</p>

      <div className='project__cards'>
        {/* <div className='box' /> */}

        {filteredList.map((item) => (
          <AnimatePresence>
            <ProjectCard
              id={item.id}
              title={item.title}
              description={item.description}
              imgUrl={item.imgUrl}
              tags={item.tags}
              links={item.links}
              gradient={item.gradient}
            />
          </AnimatePresence>
        ))}
      </div>
    </Page>
  )
}

export default Projects