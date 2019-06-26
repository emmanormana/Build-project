import {createGlobalStyle} from 'styled-components';

import {Reset} from './reset';
import {Styles} from './styles';

export const GlobalStyle = createGlobalStyle`
    ${Reset}
    ${Styles}
    `;