import { ReactNode } from 'react';
import './App.css';

function App({ children }: Readonly<{ children: ReactNode }>) {
  return <>{children}</>;
}

export default App;
