import styles from './Header.module.css'
import {  GearSix } from 'phosphor-react'

export function Header(){
    return(
        <div className={styles.headerContainer}>
            <h1 className={styles.title}>Monitoramento</h1>
            <GearSix size={20} className={styles.configIcon} />
        </div>
    )
}