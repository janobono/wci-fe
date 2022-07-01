import { SVGProps } from 'react';

export { default as FlagSk } from './flag-sk';
export { default as FlagEn } from './flag-en';

export interface IconProps extends SVGProps<SVGSVGElement> {
    size?: number | string;
}
