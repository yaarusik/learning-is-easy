import { Modal } from 'shared/ui/Modal/Modal';
import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './loginModal.module.scss';
import { LoginForm } from '../LoginForm';

export interface ILoginModalProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal: FC<ILoginModalProps> = ({
    className,
    isOpen,
    onClose,
}) => (
    <Modal
        lazy
        isOpen={isOpen}
        onClose={onClose}
        className={classNames(cls.loginModal, {}, [className])}
    >
        <LoginForm />
    </Modal>
);
