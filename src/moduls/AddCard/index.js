import {
  Close,
  Confirm,
  Delete,
  Error,
  Input,
  InputTitle,
  Shadow,
  Title,
  Wrap,
} from './style';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { Card } from '../../components/Card';

export const AddCard = ({ editMode }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [date, setDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [nameEmpty, setNameEmpty] = useState(false);
  const [dateEmpty, setDateEmpty] = useState(false);
  const [numberEmpty, setNumberEmpty] = useState(false);
  const [cvvEmpty, setCvvEmpty] = useState(false);
  const [errors, setErrors] = useState({
    nameError: 'Please fill your name',
    numberError: 'Please fill your card number',
    dateError: 'Please fill your date',
    cvvError: 'Please fill your cvv',
  });
  // const [nameError, setNameError] = useState('Please fill your name');
  // const [numberError, setNumberError] = useState(
  //   'Please fill your card number'
  // );
  // const [dateError, setDateError] = useState('Please fill your date');
  // const [cvvError, setCvvError] = useState('Please fill your cvv');
  const [formValid, setFormValid] = useState(false);
  const allCards = useSelector((state) => state.card);
  const cardIndex = useSelector((state) => state.cardIndex);

  const addCard = () => {
    dispatch({ type: 'CLOSE', payload: true });
    dispatch({ type: 'SET_EDIT', payload: false });
  };

  const deleteCard = () => {
    dispatch({ type: 'DELETE_CARD' });
    dispatch({ type: 'SET_EDIT', payload: false });
  };

  const setCardData = (e) => {
    e.preventDefault();

    const card = { name, number, date, cvv };

    if (editMode) {
      dispatch({ type: 'EDIT_CARD_INFO', payload: card });
      dispatch({ type: 'SET_EDIT', payload: false });
    } else {
      dispatch({ type: 'SET_CARD_INFO', payload: card });
      dispatch({ type: 'CLOSE', payload: true });
    }
  };

  const handleName = (e) => {
    let temp = e.target.value.trim().replace(/[0-9]/g, '');

    if (temp === '') {
      setErrors({ ...errors, nameError: 'Please fill your name' });
    } else if (/[0-9]/.test(temp)) {
      setErrors({ ...errors, nameError: 'Please enter a valid name' });
    } else {
      setErrors({ ...errors, nameError: '' });
    }

    setName(temp);
  };

  const handleCreditCard = (e) => {
    let temp = e.target.value.trim().replace(/\p{L}+/u, '');

    const currentCard = allCards.find(
      (currentCard) => currentCard.number === temp
    );

    if (/[0-9]{4}/.test(temp.slice(-4)) && temp.length < 19) {
      temp += ' ';
    }

    if (currentCard !== undefined) {
      if (currentCard.number === allCards[cardIndex].number) {
        setErrors({ ...errors, numberError: '' });
      } else {
        setErrors({ ...errors, numberError: 'Such a card has been created' });
      }
    } else if (temp === '') {
      setErrors({ ...errors, numberError: 'Please fill your card number' });
    } else if (
      temp.length < 19 ||
      /[0-3]/.test(temp[0]) ||
      /[6-9]/.test(temp[0]) ||
      /^[\d ]*$/.test(temp) === false
    ) {
      setErrors({ ...errors, numberError: 'Please fill your card number' });
    } else {
      setErrors({ ...errors, numberError: '' });
    }
    setNumber(temp);
  };

  const handleDate = (e) => {
    let temp = e.target.value.replace(/[^\d]/g, '');
    const today = new Date();
    const month = today.getMonth() + 1;

    if (temp.length >= 3) {
      temp = temp.split('');
      temp.splice(2, 0, '/');
      temp = temp.join('');
    }

    if (temp === '') {
      setErrors({ ...errors, dateError: 'Please fill your expiry date' });
    } else if (
      temp.length < 5 ||
      temp[0] + temp[1] > 12 ||
      temp[0] + temp[1] <= 0 ||
      temp[3] + temp[4] < 22
    ) {
      setErrors({ ...errors, dateError: 'Please enter a valid expiry date' });
    } else if (temp[3] + temp[4] <= 22 && temp[0] + temp[1] < month) {
      setErrors({ ...errors, dateError: 'Your card has expired' });
    } else {
      setErrors({ ...errors, dateError: '' });
    }

    setDate(temp);
  };

  const handleCvv = (e) => {
    let temp = e.target.value.replace(/[^\d]/g, '');

    if (temp === '') {
      setErrors({ ...errors, cvvError: 'Please fill your cvv' });
    } else if (temp.length < 3) {
      setErrors({ ...errors, cvvError: 'Please enter a valid cvv' });
    } else {
      setErrors({ ...errors, cvvError: '' });
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
    if (editMode) {
      setName(allCards[cardIndex].name);
      setNumber(allCards[cardIndex].number);
      setDate(allCards[cardIndex].date);
      setCvv(allCards[cardIndex].cvv);

      setErrors({
        nameError: '',
        numberError: '',
        dateError: '',
        cvvError: '',
      });
    }
  }, []);

  useEffect(() => {
    if (errors.nameError || errors.numberError || errors.dateError || errors.cvvError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [errors]);
  console.log(errors);

  return (
    <Shadow>
      <Wrap>
        <Close onClick={addCard}>x</Close>
        {editMode ? (
          <Title>Edit your card details</Title>
        ) : (
          <Title>Add your card</Title>
        )}
        {editMode && (
          <Card show={false} card={allCards[cardIndex]} i={cardIndex} />
        )}
        <form onSubmit={setCardData}>
          <InputTitle>Name in card</InputTitle>
          <Input
            type='text'
            onBlur={(e) => blurHandler(e)}
            onChange={handleName}
            name='name'
            placeholder='Venia'
            value={name}
            error={errors.nameError}
            empty={nameEmpty}
          />
          {nameEmpty && errors.nameError && <Error>{errors.nameError}</Error>}
          <InputTitle>Card number</InputTitle>
          <Input
            onBlur={(e) => blurHandler(e)}
            onChange={handleCreditCard}
            name='number'
            maxLength='19'
            placeholder='0000 0000 0000 0000'
            value={number}
            error={errors.numberError}
            empty={numberEmpty}
          />
          {numberEmpty && errors.numberError && (
            <Error>{errors.numberError}</Error>
          )}
          <InputTitle>Expiry date</InputTitle>
          <Input
            onBlur={(e) => blurHandler(e)}
            onChange={handleDate}
            maxLength='5'
            name='date'
            placeholder='00/00'
            value={date}
            error={errors.dateError}
            empty={dateEmpty}
          />
          {dateEmpty && errors.dateError && <Error>{errors.dateError}</Error>}
          <InputTitle>CVV(Security code)</InputTitle>
          <Input
            onBlur={(e) => blurHandler(e)}
            onChange={handleCvv}
            maxLength='3'
            name='cvv'
            placeholder='000'
            value={cvv}
            error={errors.cvvError}
            empty={cvvEmpty}
          />
          {cvvEmpty && errors.cvvError && <Error>{errors.cvvError}</Error>}
          <Confirm disabled={!formValid} type='submit'>
            Confirm
          </Confirm>
        </form>
        {editMode && <Delete onClick={deleteCard}>Delete card</Delete>}
      </Wrap>
    </Shadow>
  );
};
