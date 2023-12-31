import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

import { InjectedProps, withIcon } from '~/resources/Icons/IconDecorator';

const IconRedo = ({
  width,
  height,
  fill,
  style,
}: InjectedProps): JSX.Element => {
  return (
    <Svg
      width={width}
      height={height}
      style={style}
      viewBox='0 0 20 20'
      fill={fill}>
      <Path
        d='M8.75 15.833c-1.347 0-2.504-.437-3.47-1.312-.965-.875-1.447-1.965-1.447-3.271 0-1.306.483-2.396 1.449-3.27.965-.876 2.121-1.313 3.468-1.313H14l-1.583-1.584a.79.79 0 01-.23-.583.79.79 0 01.23-.583.79.79 0 01.583-.23.79.79 0 01.583.23l3 3a.735.735 0 01.178.27.901.901 0 01.052.313.916.916 0 01-.053.313.74.74 0 01-.177.27l-3 3a.79.79 0 01-.583.23.79.79 0 01-.583-.23.79.79 0 01-.23-.583.79.79 0 01.23-.583L14 8.333H8.75c-.875 0-1.636.278-2.282.834-.646.555-.969 1.25-.968 2.083 0 .833.323 1.528.97 2.083.645.556 1.406.834 2.28.834h5.083c.236 0 .434.08.595.24.16.16.24.357.239.593 0 .236-.08.434-.24.594a.803.803 0 01-.594.24H8.75z'
        fill='#6949FF'
      />
    </Svg>
  );
};
export default withIcon(IconRedo);
