import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './Image.module.css';

interface Props {
  className?: string;
  classes?: {
    rectangle3?: string;
  };
}
/* @figmaId 1:11 */
export const Image: FC<Props> = memo(function Image(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={`${props.classes?.rectangle3 || ''} ${classes.rectangle3}`}></div>
    </div>
  );
});
