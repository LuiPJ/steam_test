import { FC } from 'react';
import { Provider } from 'react-redux';

import { store } from 'store';

import { ItemsPage } from 'pages/ItemsPage/ItemsPage';

export const App: FC = () => {
  return (
    <Provider store={store}>
      <ItemsPage />
    </Provider>
  );
};
