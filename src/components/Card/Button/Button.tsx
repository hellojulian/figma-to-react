import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './Button.module.css';

interface Props {
  className?: string;
}
/* @figmaId 1:10 */
export const Button: FC<Props> = memo(function Button(props = {}) {
  return (
    <button className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.clickMe}>Click me</div>
    </button>
  );
});
