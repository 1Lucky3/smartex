import cn from './styles.module.css';
import { Props } from './types';

const CardLayout: Props = ({children}) => {
  return (
    <div className={cn.cardsLayout}>
      {children}
    </div>
  )
}

export default CardLayout;
