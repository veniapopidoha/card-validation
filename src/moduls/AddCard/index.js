import { Title } from '../../components/Title';
import { Close, Confirm, Wrap } from './style';
import { useDispatch } from 'react-redux';
import { Input } from '../../components/Input';
import { InputTitle } from '../../components/InputTitle';
import { useEffect, useState } from 'react';
import { Error } from '../../components/Error';

export const AddCard = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [date, setDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [nameEmpty, setNameEmpty] = useState(false);
  const [dateEmpty, setDateEmpty] = useState(false);
  const [numberEmpty, setNumberEmpty] = useState(false);
  const [cvvEmpty, setCvvEmpty] = useState(false);
  const [nameError, setNameError] = useState('Please fill your name');
  const [numberError, setNumberError] = useState(
    'Please fill your card number'
  );
  const [dateError, setDateError] = useState('Please fill your date');
  const [cvvError, setCvvError] = useState('Please fill your cvv');
  const [formValid, setFormValid] = useState(false);

  const addCard = () => {
    dispatch({ type: 'SET_IS_ADD', payload: false });
  };

  const setCardData = (e) => {
    e.preventDefault();

    const card = { name, number, date, cvv };

    dispatch({ type: 'SET_CARD_INFO', payload: card });
    dispatch({ type: 'SET_IS_ADD', payload: false });
  };

  const handleName = (e) => {
    let temp = e.target.value.replace(/[0-9]/g, '');

    if (temp === '') {
      setNameError('Please fill your name');
    } else if (/[0-9]/.test(temp)) {
      setNameError('Please enter a valid name');
    } else {
      setNameError('');
    }

    setName(temp);
  };

  const handleCreditCard = (e) => {
    let temp = e.target.value;

    if (/[0-9]{4}/.test(temp.slice(-4)) && temp.length < 19) {
      temp += ' ';
    }

    if (temp === '') {
      setNumberError('Please fill your card number');
    } else if (/[a-z]/.test(temp) || temp.length !== 19) {
      setNumberError('Please enter a valid number of card');
    } else {
      setNumberError('');
    }
    setNumber(temp);
  };

  const handleDate = (e) => {
    let temp = e.target.value.replace(/[^\d]/g, '');

    if (temp.length >= 3) {
      temp = temp.split('');
      temp.splice(2, 0, '/');
      temp = temp.join('');
    }

    if (temp === '') {
      setDateError('Please fill your expiry date');
    } else if (temp.length < 5) {
      setDateError('Please enter a valid expiry date');
    } else {
      setDateError('');
    }

    setDate(temp);
  };

  const handleCvv = (e) => {
    let temp = e.target.value.replace(/[^\d]/g, '');

    if (temp === '') {
      setCvvError('Please fill your cvv');
    } else if (temp.length < 3) {
      setCvvError('Please enter a valid cvv');
    } else {
      setCvvError('');
    }
    setCvv(temp);
  };

  const blurHandler = (e) => {
    switch (e.target.name) {
      case 'name':
        setNameEmpty(true);
        break;
      case 'number':
        setNumberEmpty(true);
        break;
      case 'date':
        setDateEmpty(true);
        break;
      case 'cvv':
        setCvvEmpty(true);
        break;
    }
  };

  useEffect(() => {
    if (nameError || numberError || dateError || cvvError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [nameError, numberError, dateError, cvvError]);

  return (
    <Wrap>
      <Close onClick={addCard}>x</Close>
      <Title>Add your card details</Title>
      <form onSubmit={setCardData}>
        <InputTitle>Name in card</InputTitle>
        <Input
          type='text'
          onBlur={(e) => blurHandler(e)}
          onChange={handleName}
          name='name'
          placeholder='Venia Popidoha'
          value={name}
          error={nameError}
          empty={nameEmpty}
        />
        {nameEmpty && nameError && <Error>{nameError}</Error>}
        <InputTitle>Card number</InputTitle>
        <Input
          onBlur={(e) => blurHandler(e)}
          onChange={handleCreditCard}
          name='number'
          maxLength='19'
          placeholder='0000 0000 0000 0000'
          value={number}
          error={numberError}
          empty={numberEmpty}
        />
        {numberEmpty && numberError && <Error>{numberError}</Error>}
        <InputTitle>Expiry date</InputTitle>
        <Input
          onBlur={(e) => blurHandler(e)}
          onChange={handleDate}
          maxLength='5'
          name='date'
          placeholder='00/00'
          value={date}
          error={dateError}
          empty={dateEmpty}
        />
        {dateEmpty && dateError && <Error>{dateError}</Error>}
        <InputTitle>CVV(Security code)</InputTitle>
        <Input
          onBlur={(e) => blurHandler(e)}
          onChange={handleCvv}
          maxLength='3'
          name='cvv'
          placeholder='000'
          value={cvv}
          error={cvvError}
          empty={cvvEmpty}
        />
        {cvvEmpty && cvvError && <Error>{cvvError}</Error>}
        <Confirm disabled={!formValid} type='submit'>Confirm</Confirm>
      </form>
    </Wrap>
  );
};
