import './ProjectCard.scss';
import React from 'react'
import { motion } from 'framer-motion'
import { iProject, Link, Tag } from '../Projects';
import { Codepen, Github, ReactIcon, FirebaseIcon, UnityIcon, MobileIcon, YoutubeIcon, ChainLink, Figma, MongoDBIcon, NodeJSIcon, ExpressIcon, CSharpIcon } from '../../../utils/icons';
import { ALink } from '../../../components';

const variantions = {
    variants: {
        hidden: { opacity: 0, x: 200 },
        visible: { opacity: [0, 0.2, 0.3, 1], x: 0 },
    },
    ease: "easeIn",
    duration: 0.3,
    delay: 0.4,
}

const ProjectCard: React.FC<iProject> = (item: iProject) => {
    return (
        <motion.div
            layout
            className="card"
            variants={variantions.variants}
            initial="hidden"
            whileInView="visible"
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
                            case Tag.React:
                            case Tag.ReactNative:
                                return (<ReactIcon />)
                            case Tag.Firebase: return (<FirebaseIcon />)
                            case Tag.MongoDB: return (<MongoDBIcon />)
                            case Tag.Express: return (<ExpressIcon />)
                            case Tag.NodeJS: return (<NodeJSIcon />)
                            case Tag.Unity: return (<UnityIcon />)
                            case Tag.MobileApp: return (<MobileIcon />)
                            case Tag.CSharp: return ( <CSharpIcon /> )
                            case Tag.YouTube: return (<YoutubeIcon />)
                            case Tag.Figma: return (<Figma />)
                            default: break;
                        }
                    })}
                </div>

                {/* Links for the project/website. */}
                <div className="card-footer-links">
                    {item.links?.map((item) => {
                        switch (item.link) {
                            case Link.URL:
                                return ( <ALink path={item.url} className='card-links-item app__hover-with-shadow'><ChainLink /></ALink> )
                            case Link.Codepen:
                                return ( <ALink path={item.url} className='card-links-item app__hover-with-shadow'><Codepen /></ALink> )
                            case Link.Github:
                                return ( <ALink path={item.url} className='card-links-item app__hover-with-shadow'><Github /></ALink> )
                            case Link.YouTube:
                                return ( <ALink path={item.url} className='card-links-item app__hover-with-shadow'><YoutubeIcon /></ALink> )
                            default: break;
                        }
                    })}
                </div>
            </div>
        </motion.div>
    )
}

export default ProjectCard