declare module 'gsap' {
  export interface StaggerVars {
    each?: number;
    amount?: number;
    from?: 'start' | 'center' | 'end' | 'edges' | 'random' | number;
    grid?: [number, number] | 'auto';
    axis?: 'x' | 'y';
    ease?: string;
  }

  export namespace gsap {
    export interface StaggerVars {
      each?: number;
      amount?: number;
      from?: 'start' | 'center' | 'end' | 'edges' | 'random' | number;
      grid?: [number, number] | 'auto';
      axis?: 'x' | 'y';
      ease?: string;
    }

    export namespace core {
      export class Timeline {
        paused: (value?: boolean) => boolean | Timeline;
        play: (from?: number) => Timeline;
        kill: () => void;
        to: (targets: any, vars: any, position?: any) => Timeline;
      }
    }

    export const utils: {
      toArray: <T = any>(targets: any) => T[];
    };

    export function timeline(vars?: any): core.Timeline;
    export function set(targets: any, vars: any): void;
    export function to(targets: any, vars: any): void;
    export function killTweensOf(targets: any): void;
    export function registerPlugin(...args: any[]): void;
  }

  export default gsap;
}

declare module 'gsap/ScrollTrigger' {
  export class ScrollTrigger {
    static create(vars: {
      trigger?: any;
      start?: string | number;
      end?: string | number;
      once?: boolean;
      onEnter?: () => void;
      [key: string]: any;
    }): ScrollTrigger;

    kill: () => void;
  }
}
