import React from "react";
import { fetchData } from "./api"
import Header from "./components/Header/Header";
import Cards from "./components/Cards/Cards";
import CountryPicker from "./components/CountryPicker/CountryPicker";
// import styles from "./App.module.css";


class App extends React.Component{
    state ={
        data:{},
        country: "",

    }

    async componentDidMount(){
        const fetchedData = await fetchData();
        this.setState({data: fetchedData})
    }

    handleCountryChange = async (country) =>{
        const fetchedData = await fetchData();
        this.setState({data: fetchedData, country: country});
    }
    render(){
        const {data} = this.state;
        return(
            <div>
                <Header/>
                <Cards data ={data}/>
                <CountryPicker handleCountryChange={this.handleCountryChange}/>
            </div>
        );
    }
}

export default App;