import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { Button } from './Button/Button';
import classes from './Card.module.css';
import { Image } from './Image/Image';

interface Props {
  className?: string;
}
/* @figmaId 1:21 */
export const Card: FC<Props> = memo(function Card(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <Image classes={{ rectangle3: classes.rectangle3 }} />
      <div className={classes.heading}>Heading</div>
      <Button />
    </div>
  );
});
