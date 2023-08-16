import classNames from 'classnames';
import {FC, memo, PropsWithChildren, ReactNode} from 'react';

import {SectionId} from '../../data/data';

const Section: FC<
  PropsWithChildren<{
    sectionId: SectionId | string;
    sectionTitle?: string;
    noPadding?: boolean;
    className?: string;
    canvas?: ReactNode;
  }>
> = memo(({canvas, children, sectionId, noPadding = false, className}) => {
  return (
    <section className={classNames(className, {'px-4 py-16 md:py-24 lg:px-8': !noPadding})} id={sectionId}>
      {canvas}
      <div className={classNames({'mx-auto max-w-screen-lg': !noPadding})}>{children}</div>
    </section>
  );
});

Section.displayName = 'Section';
export default Section;
