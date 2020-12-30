import Header from "./components/Header";
import CartContainer from "./containers/CartContainer";
import MessageContainer from "./containers/MessageContainer";
import ProductsContainer from "./containers/ProductsContainer";



function App() {
    return (
        <div className="App">
            <Header />
            <div className="container mt-4">
                <ProductsContainer />
                <MessageContainer />
                <CartContainer />
            </div>
        </div>
    );
}

export default App;
