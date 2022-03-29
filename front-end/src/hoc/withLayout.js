import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

const withLayout = (Component) => (props) => {
    return (
        <div>
            <Header />
                <Component {...props} />
            <Footer />
        </div>
    )
}

export default withLayout