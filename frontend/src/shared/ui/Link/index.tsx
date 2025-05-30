import clsx from "clsx";

interface LinkProps {
  href: string;
  hrefText: string;
  className?: string;
  colorClassName?: string;
}

export const Link: React.FC<LinkProps> = ({
  href,
  hrefText,
  className = '',
  colorClassName,
}) => {
  return (
    <a 
      href={href} 
      className={clsx(
        colorClassName || 'text-light-textSecond dark:text-dark-textSecond', 
        className
      )}
    >
      {hrefText}
    </a>
  );
};