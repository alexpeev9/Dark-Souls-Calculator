import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { HelmetProvider } from 'react-helmet-async';

import store from './store';
import ThemeProvider from './assets/styles/theme/ThemeProvider';
import App from './app/index';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Provider store={store}>
    <ThemeProvider>
      <HelmetProvider>
        <StrictMode>
          <App />
        </StrictMode>
      </HelmetProvider>
    </ThemeProvider>
  </Provider>
);
