import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import App from './components/App';
import { ThemeProvider } from '@emotion/react';
import { theme } from './theme';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement as HTMLElement);

root.render(
<StrictMode>
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
</StrictMode>
)
