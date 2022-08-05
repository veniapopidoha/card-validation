import {
  BankLogo,
  CardInfo,
  Code,
  Edit,
  InfoBlock,
  Number,
  RowEnd,
  RowStart,
  Text,
  Wrap,
} from './style';
import pencil from './img/pencil.png';
import visaImg from './img/visa.svg';
import masterImg from './img/mastercard.svg';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';

export const Card = (props) => {
  const dispatch = useDispatch();
  const editCard = () => {
    dispatch({ type: 'SET_IS_EDIT', payload: true });
    dispatch({ type: 'SET_CARD_INDEX', payload: props.i });
  };

  const [visa, setVisa] = useState(false);
  const [master, setMaster] = useState(false);

  const { cvv = '', number = '', name = '', date = '' } = props.card;

  useEffect(() => {
    if (number[0] === 4) {
      setVisa(true);
      setMaster(false)
    }else if (number[0] === 5) {
      setVisa(false)
      setMaster(true);
    }
  }, [number]);

  return (
    <Wrap $index={props.i}>
      <RowEnd>
        <InfoBlock>
          <Text $index={props.i}>CVV</Text>
          <Code>{cvv}</Code>
        </InfoBlock>
        <InfoBlock>
          <Text $index={props.i}>EXPIRES</Text>
          <Code>{date}</Code>
        </InfoBlock>
      </RowEnd>
      {visa && <BankLogo src={visaImg} />}
      {master && <BankLogo src={masterImg} />}
      {props.show && <Edit src={pencil} onClick={editCard} />}
      <RowStart>
        <CardInfo>
          <Code>{name}</Code>
          <Number $index={props.i}>{number}</Number>
        </CardInfo>
      </RowStart>
    </Wrap>
  );
};
