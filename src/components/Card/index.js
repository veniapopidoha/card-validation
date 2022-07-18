import {
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
import pencil from './pencil.png';
import { useDispatch } from 'react-redux';

export const Card = (props) => {
  const dispatch = useDispatch();
  const editCard = () => {
    dispatch({ type: 'SET_IS_EDIT', payload: true });
    dispatch({ type: 'SET_CARD_INDEX', payload: props.i})
  };

  const { cvv = '', number = '', name = '', date = '' } = props.card;

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
      { props.show && <Edit src={pencil} onClick={editCard} />}
      <RowStart>
        <CardInfo>
          <Code>{name}</Code>
          <Number $index={props.i}>{number}</Number>
        </CardInfo>
      </RowStart>
    </Wrap>
  );
};
