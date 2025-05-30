import { ReactNode } from 'react';
import clsx from 'clsx';

//TODO: Сделать так чтобы была возможность передавать gap в пропсы

interface FlexBoxProps {
  children: ReactNode;
  className?: string;
  justify?: 'start' | 'center' | 'between' | 'end' | 'around';
  align?: 'start' | 'center' | 'end';
  direction?: 'row' | 'col';
  gap?: number | string;
}

export const FlexBox: React.FC<FlexBoxProps> = ({
  children,
  className = '',
  justify = 'between',
  align = 'center',
  direction = 'row',
  gap,
}) => {
  const justifyClass = {
    start: 'justify-start',
    center: 'justify-center',
    between: 'justify-between',
    end: 'justify-end',
    around:  'justify-around'
  }[justify];

  const alignClass = {
    start: 'items-start',
    center: 'items-center',
    end: 'items-end',
  }[align];

  const flexDirection = direction === 'col' ? 'flex-col' : 'flex-row';

  const gapClass = gap !== undefined ? `gap-${gap}` : '';

  return (
    <div className={clsx('flex', flexDirection, justifyClass, alignClass, gapClass, className)}>
      {children}
    </div>
  );
};
