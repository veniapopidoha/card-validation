import React from 'react';
import { Card } from '../../components/Card';
import { AddCard } from '../AddCard';
import { Button, CardWrap, SubTitle, Title, Wrap } from './style';
import { useDispatch, useSelector } from 'react-redux';

export const MainPage = () => {
  const dispatch = useDispatch();

  const close = useSelector((state) => state.close);
  const isEdit = useSelector((state) => state.isEdit);
  const allCards = useSelector((state) => state.card);

  const addCard = () => {
    dispatch({ type: 'CLOSE', payload: false });
  };

  return (
    <Wrap>
      <div>
        <Title>Your cards</Title>
        <SubTitle>Add, edit or delete your cards any time</SubTitle>
      </div>
      {allCards.map((card = {}, i) => {
        return (
          <React.Fragment key={i}>
            <Card show={true} card={card} i={i} />
          </React.Fragment>
        );
      })}

      <Button allCards={allCards} onClick={addCard}>
        Add new card
      </Button>
      {!close && <AddCard editMode={false}/>}
      {isEdit && <AddCard editMode={true}/>}
    </Wrap>
  );
};
