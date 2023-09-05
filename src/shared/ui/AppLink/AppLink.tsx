import { classNames } from 'shared/lib/classNames/classNames';
import cls from './appLink.module.scss';
import { Link, LinkProps } from 'react-router-dom';
import { FC } from 'react';

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  RED = 'red'
}
interface AppLinkProps extends LinkProps{
  className?: string;
  theme?: AppLinkTheme;
}
export const AppLink: FC<AppLinkProps> = ({className, children, to, theme = AppLinkTheme.PRIMARY, ...props}) => {

  return (
    <Link
      to={to}
      className={classNames(cls.appLink, {}, [className, cls[theme]])}
      {...props}
    >
      {children}
    </Link>
  );
};