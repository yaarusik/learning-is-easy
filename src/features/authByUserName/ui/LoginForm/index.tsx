import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import cls from './loginForm.module.scss';

export interface ILoginModalProps {
    className?: string;
}

export const LoginForm: FC<ILoginModalProps> = ({ className }) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.loginForm, {}, [className])}>
            <Input autofocus placeholder={t('Введите имя')} type="text" className={cls.input} />

            <Input placeholder={t('Введите пароль')} type="text" className={cls.input} />

            <Button className={cls.loginButton}>{t('Войти')}</Button>
        </div>
    );
};
