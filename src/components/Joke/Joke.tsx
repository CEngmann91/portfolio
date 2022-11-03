import React, { useState } from 'react';
import './Joke.scss';
import { AnimatePresence, motion, useAnimation } from 'framer-motion';
import { AnimatedMessage, HeadText } from '../../components';
import { useEffect } from 'react';

interface iJoke {
  question: string;
  punchline: string;
  punchLineDelay: number;
}
const jokes: iJoke[] = [
  {
    question: "I was going to tell you a joke but...",
    punchline: "it was tearable",
    punchLineDelay: 3
  },
  {
    question: "What did the bull say when it's son was leaving?",
    punchline: "Bison",
    punchLineDelay: 4
  },
  {
    question: "Why did the mushroom go to the party?",
    punchline: "because he was a fungi!",
    punchLineDelay: 3
  },
  {
    question: "Why does Peter Pan fly?",
    punchline: "Because he neverlands",
    punchLineDelay: 2
  },
  {
    question: "Did you hear the rumor about butter?",
    punchline: "Well, I’m not going to spread it!",
    punchLineDelay: 5
  },
  {
    question: "What does “idk” stand for?",
    punchline: "Everyone I ask says, “I don’t know.”",
    punchLineDelay: 3
  },
  {
    question: "What do you call cheese that isn't yours?",
    punchline: "Notch-yo-cheese!",
    punchLineDelay: 3
  },
  {
    question: "I really don't like umbrella's!!",
    punchline: "They're shady!",
    punchLineDelay: 3
  },
  {
    question: "What type of room doesn't have any doors?",
    punchline: "A Mushroom",
    punchLineDelay: 3.5
  },
  {
    question: "What type of tea is hard to swallow?",
    punchline: "Reality",
    punchLineDelay: 3.5
  }
];


interface iProps {
  onStart?: () => void;
  onEnd?: () => void;
}
const Joke: React.FC<iProps> = (props: iProps) => {
  const controls = useAnimation();
  const [counter, setCounter] = useState(0);
  const [randomJoke, setRandomJoke] = useState<iJoke>(jokes[counter]);
  const [jokeAnimatedIntoView, setJokeAnimatedIntoView] = useState(false);



  const hideAndRestartAnimation = () => {
    setJokeAnimatedIntoView(false);

    controls.start({
      opacity: 0,
      y: 100,
      transition: {
        duration: 1,
        delay: 0,
      },
    })
    .then(() => {
      setCounter(prev => (prev === jokes.length - 1 ? 0 : prev + 1));
      props.onStart?.();
      controls.start('visible')
    })
  }

  useEffect(() => {
    setRandomJoke(jokes[counter]);
  }, [counter])


  return (
    <div className='app__joke'>
      <div className='app__flex app__joke--pointer'>
        <AnimatedMessage delay={0} controls={controls}>
          <HeadText text={randomJoke.question} />
        </AnimatedMessage>

        <AnimatedMessage delay={randomJoke.punchLineDelay} controls={controls}
          onEnd={() => {
            console.log("Joke end");
            
            setJokeAnimatedIntoView(true);
            props.onEnd?.()
          }}>
          <HeadText text={randomJoke.punchline} />
        </AnimatedMessage>

        {jokeAnimatedIntoView.toString()}
      </div>

      {jokeAnimatedIntoView &&
        <circle onClick={hideAndRestartAnimation}>
          <p>✋</p>
        </circle>
      }
    </div>
  )
}

export default Joke;