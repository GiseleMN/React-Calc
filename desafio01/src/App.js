import { Input } from './components/Input/input'
import { Button } from './components/Button/button'
import { Container, Content, Row } from './styles';
import { useState } from 'react';

export function App() {
  const [currentNumber, setCurrentNumber] = useState("0");
  const [firstNumber, setFirstNumber] = useState("0");
  const [operation, setOperation] = useState('');

  const handleClear = () => {
    setCurrentNumber('0');
    setFirstNumber('0');
    setOperation('')
  }

  const handleAddNumber = (number) => {
    setCurrentNumber(prev => `${prev === "0" ? '' : prev}${number}`)
  }

  const sumNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber))
      setCurrentNumber('0')
      setOperation('+')
    } else {
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum))
      setOperation('')
    }
  }
  const minusNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber))
      setCurrentNumber('0')
      setOperation('-')
    } else {
      const minus = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(minus))
      setOperation('')
    }
  }
  const multiplicationNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber))
      setCurrentNumber('0')
      setOperation('*')
    } else {
      const multiplication = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(multiplication))
      setOperation('')
    }
  }
  const divisorNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber))
      setCurrentNumber('0')
      setOperation('/')
    } else {
      const divisor = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(String(divisor))
      setOperation('')
    }
  }

  const handleEquals = () => {
    if (firstNumber !== '0' && operation !== '' && currentNumber !== '0') {
      switch (operation) {
        case '+':
          sumNumbers();
          break;
        case '-':
          minusNumbers();
          break;
        case '*':
          multiplicationNumbers();
          break;
        case '/':
          divisorNumbers();
          break;
        default: break;
      }
    }
  }

  return (
    <Container>
      <Content>
        <Input value={currentNumber} />
        <Row>
          <Button label="1" onClick={() => handleAddNumber('1')} />
          <Button label="2" onClick={() => handleAddNumber('2')} />
          <Button label="3" onClick={() => handleAddNumber('3')} />
          <Button label="+" onClick={sumNumbers} />
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber('4')} />
          <Button label="5" onClick={() => handleAddNumber('5')} />
          <Button label="6" onClick={() => handleAddNumber('6')} />
          <Button label="-" onClick={minusNumbers} />
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNumber('7')} />
          <Button label="8" onClick={() => handleAddNumber('8')} />
          <Button label="9" onClick={() => handleAddNumber('9')} />
          <Button label="÷" onClick={divisorNumbers} />
        </Row>
        <Row>
          <Button label=" C" onClick={handleClear} />
          <Button label="0" onClick={() => handleAddNumber('0')} />
          <Button label="=" onClick={handleEquals} />
          <Button label="x" onClick={multiplicationNumbers} />
        </Row>
      </Content>
    </Container>
  );
}
