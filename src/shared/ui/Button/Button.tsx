import { classNames } from 'shared/lib/classNames/classNames';
import { ButtonHTMLAttributes, FC } from 'react';
import cls from './button.module.scss';

export enum ThemeButton {
  CLEAR = 'clear',
}
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  className?: string;
  theme?: ThemeButton
}
export const Button: FC<ButtonProps> = ({
    className, children, theme, ...props
}) => (
    <button
        type="button"
        className={classNames(cls.button, {}, [className, cls[theme]])}
        {...props}
    >
        {children}
    </button>
);
