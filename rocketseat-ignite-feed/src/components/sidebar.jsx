import styles from './Sidebar.module.css';
import {PencilLine} from 'phosphor-react'
import { Avatar } from './Avatar';

export function Sidebar(){
    return(
        <aside className={styles.sidebar}>
            <img 
                className={styles.cover}
                src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" alt="" 
            />

            <div className={styles.profile}>
                <Avatar 
                    src="https://github.com/Celso-jr15.png"
                />
                <strong>Celso Lopes</strong>
                <span>Web Devoloper</span>
            </div>

            <footer>
                
                <a href="#">
                    <PencilLine size={20}/>
                    Editar Perfil
                </a>
            </footer>

        </aside>
    );
}