import {useContext} from 'react';
import ColorModeContext from '../pages/context/ColorModeContext';

const useColorMode = () => useContext(ColorModeContext);

export default useColorMode;