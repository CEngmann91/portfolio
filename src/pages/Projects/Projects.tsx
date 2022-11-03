import './Projects.scss';
import React, { useCallback, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { Page } from '../../components/';
import ProjectCard from './ProjectCard/ProjectCard';
import { useEffect } from 'react';
import images from '../../utils/images';

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
    imgUrl: images.LashShack,
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
          <AnimatePresence key={item.id}>
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