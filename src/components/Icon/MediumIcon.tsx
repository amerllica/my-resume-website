import {FC, memo} from 'react';

import {IconProps} from './Icon';

const MediumIcon: FC<IconProps> = memo(props => (
  <svg fill="currentColor" height={128} viewBox="0 0 64 64" width={128} xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M18.998 15a17.002 17.002 0 0 0 0 34.004 17.002 17.002 0 0 0 0-34.004zm26.5 1a8.502 16.002 0 0 0 0 32.004 8.502 16.002 0 0 0 0-32.004zM58.5 17a3.5 15.002 0 1 0 0 30.004A3.5 15.002 0 1 0 58.5 17z" />
  </svg>
));

export default MediumIcon;
