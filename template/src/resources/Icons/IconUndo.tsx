import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

import { InjectedProps, withIcon } from '~/resources/Icons/IconDecorator';

const IconUndo = ({
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
        d='M6.667 15.833a.807.807 0 01-.595-.24.803.803 0 01-.239-.593c0-.236.08-.434.24-.594.16-.16.358-.24.594-.24h5.083c.875 0 1.635-.277 2.281-.833.647-.555.97-1.25.969-2.083 0-.833-.323-1.528-.97-2.083-.645-.556-1.406-.834-2.28-.834H6.5l1.583 1.584a.79.79 0 01.23.583.79.79 0 01-.23.583.79.79 0 01-.583.23.79.79 0 01-.583-.23l-3-3a.736.736 0 01-.178-.27.902.902 0 01-.052-.313c0-.111.018-.215.053-.313a.74.74 0 01.177-.27l3-3a.79.79 0 01.583-.23.79.79 0 01.583.23.79.79 0 01.23.583.79.79 0 01-.23.583L6.5 6.667h5.25c1.347 0 2.504.437 3.469 1.312.966.875 1.448 1.965 1.447 3.271 0 1.306-.482 2.396-1.448 3.27-.965.876-2.121 1.313-3.468 1.313H6.667z'
        fill={fill || '#6949FF'}
      />
    </Svg>
  );
};
export default withIcon(IconUndo);
