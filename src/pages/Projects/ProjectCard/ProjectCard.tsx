import './ProjectCard.scss';
import React from 'react'
import { motion } from 'framer-motion'
import { iProject, Link, Tag } from '../Projects';
import { Codepen, Github, ReactIcon, FirebaseIcon, UnityIcon, MobileIcon, YoutubeIcon } from '../../../utils/icons';

const variantions = {
    variants: {
        hidden: { opacity: 0, x: 200 },
        visible: { opacity: [0, 0.2, 0.3, 1], x: 0 },
    },
    ease: "easeIn",
    duration: 0.3,
    delay: 0.4,
}

const ProjectCard: React.FC<iProject> = (item, { ...props }: iProject) => {
    return (
        <motion.div
            layout
            // key={item.id}
            className="card"
            variants={variantions.variants}
            initial="hidden"
            whileInView="visible"
            style={item.gradient ? { background: `linear-gradient(${item.gradient[0]}, ${item.gradient[1]})` } : {}}
            // Play in viewport only once.
            viewport={{ once: true }}
            transition={{
                ease: variantions.ease,
                duration: variantions.duration,
                delay: ((item.id % 3) * variantions.delay),
            }}
        >

            <div className='card-title'>
                {/* <h3>{item.title} {item.gradient[0]} {item.gradient[1]}</h3> */}
                <h3>{item.title}</h3>
            </div>

            <div className='card-img'>
                <img src={item.imgUrl} alt={item.title} />
                {/* <img src={urlFor(item.imgUrl)} alt={item.title} /> */}
            </div>

            {/* <div className='card-description'>
                <p>{item.description}</p>
              </div> */}

            <div className='card-footer'>
                {/* Techs used for project. */}
                <div className='card-footer-techs'>
                    {item.tags?.map((item) => {
                        switch (item) {
                            case Tag.React: return (<ReactIcon />)
                            case Tag.ReactNative: return (<ReactIcon />)
                            case Tag.Firebase: return (<FirebaseIcon />)
                            case Tag.Unity: return (<UnityIcon />)
                            case Tag.MobileApp: return (<MobileIcon />)
                            case Tag.YouTube: return (<YoutubeIcon />)
                            default: break;
                        }
                    })}
                </div>

                {/* Links for the project/website. */}
                <div className='card-footer-links'>
                    {item.links?.map((item) => {
                        switch (item.link) {
                            case Link.Codepen:
                                return (<a href={item.url} className='card-links-item app__hover-with-shadow'><Codepen /></a>)
                            case Link.Github:
                                return (<a href={item.url} className='card-links-item app__hover-with-shadow'><Github /></a>)
                            case Link.YouTube: return (<a href={item.url} className='card-links-item app__hover-with-shadow'><YoutubeIcon /></a>)
                            default: break;
                        }
                    })}
                </div>
            </div>
        </motion.div>
    )
}

export default ProjectCard