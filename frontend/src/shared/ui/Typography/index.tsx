import React, { ElementType, ReactNode } from 'react';
import clsx from 'clsx';

interface TextProps {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  pointer?: boolean;
  title?: boolean;
  id?: string;
  colorClassName?: string;
}

export const Typography: React.FC<TextProps> = ({
  children,
  as: Tag = 'p',
  className,
  pointer = false,
  title = false,
  id,
  colorClassName 
}) => {
  const defaultColorClass = title
    ? 'text-light-textMain dark:text-dark-textMain'
    : 'text-light-textSecond dark:text-dark-textSecond';

  return (
    <Tag
      className={clsx(
        className,
        colorClassName || defaultColorClass, 
        pointer ? 'cursor-pointer' : 'cursor-default',
      )}
      id={id}
    >
      {children}
    </Tag>
  );
};