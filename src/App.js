import React from 'react';

import {Cards, Chart,CountryPicker} from './components'
import {fetchData} from './api'
import styles from './App.module.css';

class App extends React.Component{

    state={
        data: {},
    }

    async componentDidMount(){
        const FetchedData= await fetchData();
        this.setState({data : FetchedData}) 
    
    }
    render() {
        const {data}=this.state
        
        return (
            <div className={styles.container}>
               <Cards data={data}/>
               <Chart />
               <CountryPicker />
            </div>
        )
    }

}

export default App;