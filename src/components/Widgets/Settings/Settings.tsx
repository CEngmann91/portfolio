import React, { useState } from 'react'
import './Settings.scss';

import { useThemeContext } from '../../../providers/ThemeProvider';
import Switch from "react-switch";
import { Crescent, Sun } from '../../../utils/icons';

const Settings : React.FC = () => {
    const [mode, setMode] = useState(true);
    const { toggleTheme } = useThemeContext();

    return (
        <div className="app__settings">
            <div className='app__settings--container app__box-shadow-indent'>
                <Switch
                    checked={mode}
                    onChange={(checked) => { setMode(checked); toggleTheme(); }}
                    checkedIcon={ <Crescent /> }
                    uncheckedIcon={ <Sun /> }
                    // Right side visible
                    offColor="#31ac4a"
                    // Left side visible
                    onColor="#313bac"
                    // boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                    // activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                />
            </div>
        </div>
    )
};

export default Settings;