import { Children } from 'react';
import { ThemeProvider as OriginalThemeProvider } from 'styled-components';

import theme from './theme';

const ThemeProvider = (props: { children: any }) => {
  return (
    <OriginalThemeProvider theme={theme}>
      {Children.only(props.children)}
    </OriginalThemeProvider>
  );
};

export default ThemeProvider;
