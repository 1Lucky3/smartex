import cn from './styles.module.css';
import { Props } from './types';

const CardItem = ({value}: Props) => {
  return (
    <div className={cn.card}>{value}</div>
  )
}

export default CardItem;
