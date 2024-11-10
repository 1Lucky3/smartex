import {useState} from 'react'
import {range} from 'lodash'
import {RANDOM_RANGES} from '../const'
import {RandomRange, MatrixType, MatrixRow} from '../types'

export const useGenerateNumbers = () => {
  const [initialMatrix, setInitialMatrix] = useState<MatrixType>([[], [], []]);

  const disAllowedNumbers: number[] = [];
  const rangeArray: number[] = range(9);
  const MAX_FILLED_POSITIONS = 5;

  const generateNumber = ([min, max, multiplier = 10]: RandomRange): number => {
    let value: number = 0;

    while (!value || disAllowedNumbers.includes(value)) {
      value = Math.floor(Math.random() * multiplier) + min;

      if (value > max) {
        value = value - 1;
      }
    }

    disAllowedNumbers.push(value);

    return value;
  }

  const generatePosition = (): MatrixRow => {
    let positions: number[] = []

    while (positions.filter(Boolean).length !== MAX_FILLED_POSITIONS) {
      positions = rangeArray.map(() => Math.round(Math.random()));
    }

    return positions;
  }

  const generateCard = () => {
    const positionsToFill = initialMatrix.map(generatePosition);

    const data = positionsToFill.map((row) => row.map((cell, i) => cell ? generateNumber(RANDOM_RANGES[i]) : null));

    setInitialMatrix(data as MatrixType);
  }

  return {
    data: initialMatrix,
    generateCard,
  }
}
