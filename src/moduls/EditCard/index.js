import { Title } from '../../components/Title';
import { Close, Confirm, Delete, Wrap } from './style';
import { useDispatch, useSelector } from 'react-redux';
import { Input } from '../../components/Input';
import { InputTitle } from '../../components/InputTitle';
import { Card } from '../../components/Card';
import { useEffect, useState } from 'react';
import { Error } from '../../components/Error';

export const EditCard = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [date, setDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [nameEmpty, setNameEmpty] = useState(false);
  const [dateEmpty, setDateEmpty] = useState(false);
  const [numberEmpty, setNumberEmpty] = useState(false);
  const [cvvEmpty, setCvvEmpty] = useState(false);
  const [nameError, setNameError] = useState('');
  const [numberError, setNumberError] = useState('');
  const [dateError, setDateError] = useState('');
  const [cvvError, setCvvError] = useState('');
  const [formValid, setFormValid] = useState(false);

  const allCard = useSelector((state) => state.card);
  const cardIndex = useSelector((state) => state.cardIndex);

  const addCard = () => {
    dispatch({ type: 'SET_IS_EDIT', payload: false });
  };

  const deleteCard = () => {
    dispatch({ type: 'DELETE_CARD', payload: {} });
    dispatch({ type: 'SET_IS_EDIT', payload: false });
  };

  useEffect(() => {
    setName(allCard[cardIndex].name);
    setNumber(allCard[cardIndex].number);
    setDate(allCard[cardIndex].date);
    setCvv(allCard[cardIndex].cvv);
  }, []);

  const editCardInfo = (e) => {
    e.preventDefault();
    const card = { name, number, date, cvv };
    dispatch({ type: 'EDIT_CARD_INFO', payload: card });
    dispatch({ type: 'SET_IS_EDIT', payload: false });
  };

  const handleName = (e) => {
    let temp = e.target.value.replace(/[0-9]/g, '');

    if (/[0-9]/.test(temp)) {
      setNameError('Please fill your name');
    } else if (temp === 0) {
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
    console.log('temp[0] - ', temp[0]);

    if (temp === '') {
      setNumberError('Please fill your card number');
    } else if (
      /[a-z]/.test(temp) ||
      temp.length !== 19 ||
      /[0-3]/.test(temp[0]) ||
      /[6-9]/.test(temp[0])
    ) {
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
    } else if (
      temp.length < 5 ||
      temp[0] + temp[1] > 12 ||
      temp[3] + temp[4] < 22
    ) {
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
      <Title>Edit your Card</Title>
      <Card show={false} card={allCard[cardIndex]} i={cardIndex} />
      <form onSubmit={editCardInfo}>
        <InputTitle>Name in card</InputTitle>
        <Input
          name='name'
          value={name}
          onChange={handleName}
          onBlur={(e) => blurHandler(e)}
          error={nameError}
          empty={nameEmpty}
        />
        {nameEmpty && nameError && <Error>{nameError}</Error>}
        <InputTitle>Card number</InputTitle>
        <Input
          name='number'
          value={number}
          onChange={handleCreditCard}
          onBlur={(e) => blurHandler(e)}
          error={numberError}
          empty={numberEmpty}
          maxLength={19}
        />
        {numberEmpty && numberError && <Error>{numberError}</Error>}
        <InputTitle>Expiry date</InputTitle>
        <Input
          name='date'
          value={date}
          onChange={handleDate}
          onBlur={(e) => blurHandler(e)}
          error={dateError}
          empty={dateEmpty}
          maxLength={5}
        />
        {dateEmpty && dateError && <Error>{dateError}</Error>}
        <InputTitle>CVV(Security code)</InputTitle>
        <Input
          name='cvv'
          value={cvv}
          onChange={handleCvv}
          onBlur={(e) => blurHandler(e)}
          error={cvvError}
          empty={cvvEmpty}
          maxLength={3}
        />
        {cvvEmpty && cvvError && <Error>{cvvError}</Error>}
        <Confirm disabled={!formValid} type='submit'>
          Confirm
        </Confirm>
      </form>
      <Delete onClick={deleteCard}>Delete card</Delete>
    </Wrap>
  );
};
