import React from 'react';
import RootNavigator from '../navigators/RootNavigator';
import {Provider as StoreProvider} from 'react-redux';
import {store, persistor} from '../stores/store';
import { QueryClient, QueryClientProvider } from 'react-query';

import {PersistGate} from 'redux-persist/integration/react';
const queryClient = new QueryClient();

const App = () => {
  return (
    <StoreProvider store={store}>
      <QueryClientProvider client={queryClient}>
        <PersistGate persistor={persistor}>
            <RootNavigator />
        </PersistGate>
      </QueryClientProvider>
    </StoreProvider>
  );
};

export default App;
