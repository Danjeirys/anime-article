import Body from "./Body/body";
import Footer from "./Footer/footer";
// import Header from "./NavBar/NavBar";
import styles from '../App.css'


export default function Homepage () {
    return (
        <div>
            <header className="App-header">
                {/* <Header/> */}
            </header>
            <Body/>
            <Footer className='footer'style={styles}/>
        </div>
    )
}