import { inject, InjectionToken } from '@angular/core';
import { Rgb } from './color';

export const DEFAULT_CONFIGURATION: FluidConfiguration = {
  simResolution: 256,
  dyeResolution: 1024,
  densityDissipation: 1,
  velocityDissipation: .25,
  pressure: .75,
  pressureIterations: 20,
  curl: 30,
  splatRadius: .25,
  splatForce: 6000,
  shading: true,
  backColor: { r: 0, g: 0, b: 0 },
  transparent: false,
  bloom: true,
  bloomIterations: 8,
  bloomResolution: 256,
  bloomIntensity: .1,
  bloomThreshold: 0,
  bloomSoftKnee: .7,
  sunrays: true,
  sunraysResolution: 196,
  sunraysWeight: 1
};

export interface FluidConfiguration {
  simResolution: number;
  dyeResolution: number;
  densityDissipation: number;
  velocityDissipation: number;
  pressure: number;
  pressureIterations: number;
  curl: number;
  splatRadius: number;
  splatForce: number;
  shading: boolean;
  transparent: boolean;
  backColor: Rgb;
  bloom: boolean;
  bloomIterations: number;
  bloomResolution: number;
  bloomIntensity: number;
  bloomThreshold: number;
  bloomSoftKnee: number;
  sunrays: boolean;
  sunraysResolution: number;
  sunraysWeight: number;
}

export const INJECT_FLUID_CONFIGURATION = new InjectionToken<Partial<FluidConfiguration>>('INJECT_FLUID_CONFIGURATION');

export const Configuration = () => ({ ...DEFAULT_CONFIGURATION, ...inject(INJECT_FLUID_CONFIGURATION, { optional: true }) });
