/// <reference types="solid-js" />

import type { JSX } from "solid-js";

declare module "solid-js" {
  namespace JSX {
    interface HTMLAttributes<T> {
      class?: string;
      href?: string;
      src?: string;
      alt?: string;
      loading?: "lazy" | "eager";
      rel?: string;
    }

    interface IntrinsicElements {
      div: JSX.HTMLAttributes<HTMLDivElement>;
      button: JSX.HTMLAttributes<HTMLButtonElement>;
      span: JSX.HTMLAttributes<HTMLSpanElement>;
      svg: JSX.HTMLAttributes<SVGSVGElement> & {
        fill?: string;
        stroke?: string;
        viewBox?: string;
      };
      path: JSX.HTMLAttributes<SVGPathElement> & {
        "stroke-linecap"?: string;
        "stroke-linejoin"?: string;
        "stroke-width"?: string;
        d?: string;
      };
      h2: JSX.HTMLAttributes<HTMLHeadingElement>;
      h3: JSX.HTMLAttributes<HTMLHeadingElement>;
      p: JSX.HTMLAttributes<HTMLParagraphElement>;
      a: JSX.HTMLAttributes<HTMLAnchorElement>;
      img: JSX.HTMLAttributes<HTMLImageElement>;
    }
  }
}
