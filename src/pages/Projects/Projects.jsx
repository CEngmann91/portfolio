import './Projects.scss';
import React from 'react'
import { useThemeContext } from '../../utils/ThemeContext';

const Projects = () => {
  const { theme } = useThemeContext();

  const list = [
    { title: "title1", imgSrc: "https://w7.pngwing.com/pngs/79/518/png-transparent-js-react-js-logo-react-react-native-logos-icon-thumbnail.png" },
    { title: "title2", imgSrc: "https://w7.pngwing.com/pngs/79/518/png-transparent-js-react-js-logo-react-react-native-logos-icon-thumbnail.png" },
    { title: "title3", imgSrc: "https://w7.pngwing.com/pngs/79/518/png-transparent-js-react-js-logo-react-react-native-logos-icon-thumbnail.png" },
    { title: "title4", imgSrc: "https://w7.pngwing.com/pngs/79/518/png-transparent-js-react-js-logo-react-react-native-logos-icon-thumbnail.png" },
    { title: "title5", imgSrc: "https://w7.pngwing.com/pngs/79/518/png-transparent-js-react-js-logo-react-react-native-logos-icon-thumbnail.png" },
    { title: "title6", imgSrc: "https://w7.pngwing.com/pngs/79/518/png-transparent-js-react-js-logo-react-react-native-logos-icon-thumbnail.png" },
    { title: "title7", imgSrc: "https://w7.pngwing.com/pngs/79/518/png-transparent-js-react-js-logo-react-react-native-logos-icon-thumbnail.png" },
    { title: "title8", imgSrc: "https://w7.pngwing.com/pngs/79/518/png-transparent-js-react-js-logo-react-react-native-logos-icon-thumbnail.png" },
  ]

  return (
    <div id={theme} className='app__projects app__pading-horizontal'>
      <p className="app__bottom-border app__projects--title">Projects</p>

      {/* <p className="app__projects--content">Insert Text Here</p> */}
      <div className='list'>
        {list.map((item, index) =>
          <div className='list--item' key={index}>
            <p className='list--item-title'>{item.title}</p>
            <div className='list--item-img'>
              <img src={item.imgSrc} alt={item.title} />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Projects