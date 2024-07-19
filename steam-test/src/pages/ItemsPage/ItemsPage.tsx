import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Button } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';
import randomColor from 'randomcolor';

import { RootState } from 'store';
import { addItem, removeItem } from 'store/itemsSlice';

import './ItemsPage.css';

export const ItemsPage: FC = () => {
  const dispatch = useDispatch();
  const items = useSelector((state: RootState) => state.items);

  const handleAdd = () => {
    const newItem = {
      id: uuidv4(),
      color: randomColor(),
    };
    dispatch(addItem(newItem));
  };

  const handleRemove = () => {
    dispatch(removeItem());
  };

  return (
    <div className="items-page">
      <div className="buttons">
        <Button variant="contained" onClick={handleAdd}>
          Добавить
        </Button>
        <Button variant="contained" onClick={handleRemove}>
          Удалить
        </Button>
      </div>
      <div className="list-container">
        <TransitionGroup className="list" component="div">
          {items.map(item => (
            <CSSTransition key={item.id} timeout={500} classNames="item">
              <div
                className="list-item"
                style={{ backgroundColor: item.color }}
              ></div>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </div>
    </div>
  );
};
