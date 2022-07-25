import React from 'react';
import { Card } from '../../components/Card';
import { AddCard } from '../AddCard';
import { Button, CardWrap, SubTitle, Title, Wrap } from './style';
import { useDispatch, useSelector } from 'react-redux';
import { EditCard } from '../EditCard';

export const MainPage = () => {
  const dispatch = useDispatch();

  const isAdd = useSelector((state) => state.isAdd);
  const isEdit = useSelector((state) => state.isEdit);
  const allCard = useSelector((state) => state.card);

  const addCard = () => {
    dispatch({ type: 'SET_IS_ADD', payload: true });
  };

  return (
    <Wrap>
      <div>
        <Title>Your cards</Title>
        <SubTitle>Add, edit or delete your cards any time</SubTitle>
      </div>
      <CardWrap>
        {allCard.map((card = {}, i) => {
          return (
            <React.Fragment key={i}>
              <Card show={true} card={card} i={i} />
            </React.Fragment>
          );
        })}
      </CardWrap>
      <Button onClick={addCard}>Add new card</Button>
      {isAdd && <AddCard />}
      {isEdit && <EditCard />}
    </Wrap>
  );
};
