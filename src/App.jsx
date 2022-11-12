import { AppProvider } from './context';
import { MainPage } from './pages';

const App = () => {
  return (
    <AppProvider>
      <MainPage />
    </AppProvider>
  )
}

export default App;