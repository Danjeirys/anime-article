import styles from '../Header/Header.module.css'

export default function Header () {
    return (
        <div style={styles}>
            <nav id = 'nav' style={styles}>
                <ul>
                    <li><a href='Home'>Home</a></li>
                    <br/>
                    <li><a href='About'>About</a></li>
                    <br/>
                    <li><a href='Suggestions'>Suggestions</a></li>
                    <li><a href='Fanart'>Fanart</a></li>
                </ul>
        </nav>
        </div>
        
    )
}