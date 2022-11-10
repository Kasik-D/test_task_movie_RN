import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

export const SearchIcon = (props: SvgProps) => {
  return (
    <Svg width={22} height={22} viewBox='0 0 16 16' fill='none' {...props}>
      <Path
        d='M14.24 13.478l-3.173-3.3a5.366 5.366 0 001.263-3.461 5.39 5.39 0 00-5.383-5.384 5.39 5.39 0 00-5.384 5.384A5.39 5.39 0 006.947 12.1a5.325 5.325 0 003.084-.974l3.197 3.325a.698.698 0 00.993.02.703.703 0 00.02-.993zM6.948 2.738a3.983 3.983 0 013.979 3.979 3.983 3.983 0 01-3.98 3.979 3.983 3.983 0 01-3.978-3.98 3.983 3.983 0 013.979-3.978z'
        fill='#AFAFAF'
      />
    </Svg>
  );
};
