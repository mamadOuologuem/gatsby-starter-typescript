interface CSSModule {
  [className: string]: string;
}

// type shims for CSS modules

declare module '*.module.scss' {
  const cssModule: CSSModule;
  export = cssModule;
}

declare module '*.module.css' {
  const cssModule: CSSModule;
  export = cssModule;
}

// Custom Type definitions

// Allow svg imports in .tsx
// https://stackoverflow.com/questions/44717164/unable-to-import-svg-files-in-typescript
declare module '*.svg' {
  const content: string;
  export default content;
}

// Generic CSS import definition
declare module '*.css' {
  interface IClassNames {
    [className: string]: string;
  }
  const classNames: IClassNames;
  export = classNames;
}

declare module '*.png';
declare module '*.jpg';
