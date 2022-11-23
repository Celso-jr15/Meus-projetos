import { Header } from './components/Header';
import {Post} from './components/Post';
import { Sidebar } from './components/sidebar';

import styles from './App.module.css';

import './global.css';

export function App() {
  return (
    <div>
      
      <Header/>

      <div className={styles.wrapper}>
        
        <Sidebar />
        
        <main>
          <Post 
            author="Celso Jr"
            content="assddsdsadsa dsa dsa"
          />
          <Post 
            author="Murilo Lopes"
            content="assddsdsadsad dsa ds dsa dsa"
          />
        </main>
        

      </div>
    </div>
  )
}

