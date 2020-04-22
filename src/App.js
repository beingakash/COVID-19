import React from 'react';

import {Cards, Chart,CountryPicker} from './components'
import {fetchData} from './api'
import styles from './App.module.css';
import coronaImage from './images/image.png';
import Logo from './images/89.png';

class App extends React.Component{

    state={
        data:{},
        country: '',
    }

    async componentDidMount(){
        const fetchedData= await fetchData();
        this.setState({data : fetchedData}) 
    
    }

    handleCountryChange= async(country)=>{         
        
        const fetchedData = await fetchData(country);

        this.setState({data: fetchedData, country: country});
        //console.log(fetcheddata)

    }
    render() {
        const {data, country}=this.state

        return (
            <div className={styles.container}>
               <img className={styles.image}  src={coronaImage} alt="COVID-19"/>
               <Cards data={data}/>
               <CountryPicker handleCountryChange={this.handleCountryChange}/>
               <Chart data={data} country={country}/>  
               <p>Made with <img src={Logo} alt="Humanity"/> by Akash Kumar</p>             
            </div>
        )
    }

}

export default App;
