import { useContext } from 'react';
import withLoadingDelay from './withLoadingDelay';
import Card from './Card';
import AppContext from '../../context';

const DelayedCard = withLoadingDelay(Card);

const CardsList = () => {
  const { newDataSet } = useContext(AppContext);

  return (
    <ul className="cards" style={{ textAlign: 'center', paddingLeft: '1%' }}>
      {newDataSet.map((card) => (
        <DelayedCard key={card.id} id={card.id} caption={card.caption} text={card.text} />
      ))}
    </ul>
  );
};

export default CardsList;
