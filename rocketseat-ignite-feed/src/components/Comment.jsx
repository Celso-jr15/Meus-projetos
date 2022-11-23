import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';

export function Comment(){
    return(
        <div className={styles.comment}>

            <Avatar 
                hasBorder={false}
                src="https://github.com/Celso-jr15.png" 
            />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Celso Lopes</strong>
                            <time title="22 de Novembro às 08h20" dateTime="2022-11-22 08:20:23">Cerca de 1h</time>                        
                        </div>

                        <button title="Deletar comentário">
                            <Trash size={20} />
                        </button>
                    </header>

                    <p>Muito bom seu comentário</p>

                </div>

                <footer>
                    <button>
                        <ThumbsUp size={24}/>
                        Aplaudir <span>20</span>
                    </button>
                </footer>



            </div>

        </div>
    )
}