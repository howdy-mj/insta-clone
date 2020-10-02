import React, { FC } from 'react';

export interface SvgProps {
  ariaLabel: string;
  fill?: string;
  height?: string | number;
  width?: string | number;
  viewBox?: string;
  d: string;
  clipRule?: string;
  fillRule?: 'nonzero' | 'evenodd' | 'inherit' | undefined;
}

/**
 * SVG 컴포넌트
 */
export const SVG: FC<SvgProps> = ({
  ariaLabel,
  fill = '#262626',
  height = 22,
  width = 22,
  viewBox = '0 0 48 48',
  d,
  clipRule,
  fillRule,
  ...props
}) => {
  return (
    <svg
      aria-label={ariaLabel}
      fill={fill}
      height={height}
      width={width}
      viewBox={viewBox}
      {...props}
    >
      <path d={d} clipRule={clipRule} fillRule={fillRule} />
    </svg>
  );
};
