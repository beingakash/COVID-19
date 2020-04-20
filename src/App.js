import React from 'react';

import {Cards, Chart,CountryPicker} from './components'
import {fetchData} from './api'
import styles from './App.module.css';

class App extends React.Component{

    state={
        data: {},
        country:'',
    }

    async componentDidMount(){
        const FetchedData= await fetchData();
        this.setState({data : FetchedData}) 
    
    }

    handleCountryChange= async(country)=>{
        //fetch DAta
        console.log(country)      


    }
    render() {
        const {data}=this.state

        return (
            <div className={styles.container}>
               <Cards data={data}/>
               <CountryPicker handleCountryChange={this.handleCountryChange}/>
               <Chart />               
            </div>
        )
    }

}

export default App;
