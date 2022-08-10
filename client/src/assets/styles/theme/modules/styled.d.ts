import 'styled-components/macro';
import { Theme } from '../theme';

declare module 'styled-components/macro' {
  export interface DefaultTheme extends Theme {}
}
