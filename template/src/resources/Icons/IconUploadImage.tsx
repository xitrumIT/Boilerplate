import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

import { InjectedProps, withIcon } from '~/resources/Icons/IconDecorator';

const IconUploadImage = ({
  width,
  height,
  style,
  fill,
}: InjectedProps): JSX.Element => {
  return (
    <Svg
      width={width}
      height={height}
      style={style}
      viewBox='0 0 52 52'
      fill={fill}>
      <Path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M9.642 21.042c1.247-1.683 3.285-2.524 7.039-2.87a1.625 1.625 0 00-.299-3.236c-4.003.369-7.251 1.337-9.352 4.171-2.013 2.718-2.697 6.812-2.697 12.614 0 7.69 1.206 12.42 5.157 14.846 1.883 1.157 4.215 1.668 6.884 1.917 2.66.247 5.854.247 9.557.247h.137c3.704 0 6.898 0 9.557-.247 2.67-.249 5.002-.76 6.885-1.917 3.95-2.426 5.157-7.155 5.157-14.846 0-5.802-.684-9.896-2.698-12.614-2.1-2.834-5.348-3.802-9.352-4.171a1.625 1.625 0 10-.298 3.236c3.753.346 5.792 1.187 7.039 2.87 1.334 1.8 2.059 4.931 2.059 10.678 0 7.695-1.297 10.659-3.608 12.078-1.248.767-2.987 1.217-5.485 1.45-2.492.231-5.539.233-9.324.233-3.786 0-6.833-.002-9.325-.233-2.498-.233-4.236-.683-5.484-1.45-2.311-1.42-3.608-4.383-3.608-12.078 0-5.747.725-8.878 2.059-10.678z'
        fill={fill || '#6949FF'}
      />
      <Path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M26.262 32.5a1.625 1.625 0 01-1.625-1.625V4.786a1.625 1.625 0 113.25 0v26.089c0 .898-.728 1.625-1.625 1.625z'
        fill={fill || '#6949FF'}
      />
      <Path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M18.797 12.279a1.625 1.625 0 01-.005-2.298l6.318-6.344a1.625 1.625 0 012.303 0l6.318 6.344a1.625 1.625 0 11-2.303 2.293l-5.166-5.188-5.167 5.188a1.625 1.625 0 01-2.298.005z'
        fill={fill || '#6949FF'}
      />
    </Svg>
  );
};

export default withIcon(IconUploadImage);