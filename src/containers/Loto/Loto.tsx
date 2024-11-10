import { useEffect } from 'react';
import CardItem from '../../components/CardItem';
import CardLayout from '../../components/CardLayout';
import RefreshCardButton from '../../components/RefreshCardButton';
import { useGenerateNumbers } from '../../hooks/useGenerateNumbers';

import cn from './styles.module.css';

const Loto = () => {
  const {data, generateCard} = useGenerateNumbers();

  useEffect(() => {
    generateCard();
  }, [])

  return (
    <div className={cn.wrapper}>
      <CardLayout>
        {data.map((row, i) => row.map((cell, j) => <CardItem key={i + j} value={cell}/>))}
      </CardLayout>
      
      <RefreshCardButton onRefresh={generateCard}/>
    </div>
  )
}

export default Loto