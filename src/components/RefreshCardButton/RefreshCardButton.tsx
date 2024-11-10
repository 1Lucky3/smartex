import { Props } from './types';

const RefreshCardButton = ({onRefresh}: Props) => {
  return (
    <button onClick={onRefresh}>Обновить Карточку</button>
  )
}

export default RefreshCardButton;
