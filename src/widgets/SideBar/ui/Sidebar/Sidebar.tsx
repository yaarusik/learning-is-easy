import { classNames } from 'shared/lib/classNames/classNames';
import React, { useState } from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher/LangSwitcher';
import { useTranslation } from 'react-i18next';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

import AboutIcon from 'shared/assets/icons/about-20-20.svg';
import MainIcon from 'shared/assets/icons/main-20-20.svg';
import cls from './sidebar.module.scss';

interface SidebarProps {
  className?: string;
}
export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const { t } = useTranslation();

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };
    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [
                className,
            ])}
        >
            <Button
                theme={ButtonTheme.BACKGROUND_INVERTED}
                data-testid="sidebar-toggle"
                type="button"
                onClick={onToggle}
                square
                size={ButtonSize.L}
                className={cls.collapseButton}
            >
                {collapsed ? '>' : '<'}
            </Button>

            <div className={cls.items}>
                <AppLink
                    to={RoutePath.main}
                    theme={AppLinkTheme.SECONDARY}
                    className={cls.item}
                >
                    <MainIcon className={cls.icon} />

                    <span className={cls.link}>{t('Главная')}</span>
                </AppLink>

                <AppLink
                    to={RoutePath.about}
                    theme={AppLinkTheme.SECONDARY}
                    className={cls.item}
                >
                    <AboutIcon className={cls.icon} />

                    <span className={cls.link}>
                        {t('О сайте')}
                    </span>
                </AppLink>
            </div>
            <div className={cls.switchers}>
                <ThemeSwitcher />

                <LangSwitcher short={collapsed} className={cls.lang} />
            </div>
        </div>
    );
};
