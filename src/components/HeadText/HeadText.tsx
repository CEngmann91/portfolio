import '../../res/styles.scss';
import React from 'react'

interface iProps {
    text: string;
}
const HeadText: React.FC<iProps> = (props: iProps) => {

  return (
    <h1 className='head-text'><span>{props.text}</span></h1>
  )
}

export default HeadText