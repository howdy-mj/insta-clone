import 'styled-components';
// import { CSSObject, CSSProp } from 'styled-components';

declare module 'styled-components' {
  export interface theme {
    text: {
      skyBlue: string;
      gray: string;
    };

    grayBorder: string;
  }

  // interface Attributes {
  //   css?: CSSProp | CSSObject;
  // }
}
