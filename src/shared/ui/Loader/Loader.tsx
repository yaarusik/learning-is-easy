import { classNames } from 'shared/lib/classNames/classNames';
import './loader.scss';

interface loaderProps {
  className?: string;
}
export const Loader = ({ className }: loaderProps) => (
    <div className={classNames('lds-ellipsis', {}, [className])}>
        <div />
        <div />
    </div>
);
