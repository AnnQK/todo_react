import React from 'react';
import styles from './App.module.css';
import AllTasks from './components/routes/AllTasks/AllTasks';
import Aside from './components/UI/Aside/Aside';
import MainSection from './components/UI/MainSection/MainSection';
import NavBar from './components/UI/Nav/NavBar';
import TasksContextProvider from './contexts/TasksContext';

function App() {
  return (
    <div className={styles.app}>
      <Aside className={styles.aside}>
        <NavBar />
      </Aside>
      <MainSection className={styles.section}>
        <TasksContextProvider>
          <AllTasks />
        </TasksContextProvider>
      </MainSection>
    </div>
  );
}

export default App;
