import React from "react";

import { Cards, Chart, CountryPicker, ProvincePicker,  Tables } from "./components";
import styles from "./App.module.css";
import { fetchData, fetchDataC, fetchDataCanadaTime, fetchProvinces, fetchDataProvSummary, fetchDataRegionSummary } from "./api";
import covid from "./images/covid.png";
import { ButtonGroup, Button } from "@material-ui/core";

class App extends React.Component {
  state = {
    data: {},
    country: "",
    isCanada: false,
    dataC: {},
    dataCT:{},
    dataCP:{},
    provinces:[],
    dataCPR:{},
  };

  async componentDidMount() {
    const fetchedData = await fetchData();
    // console.log(fetchedData)
    this.setState({ data: fetchedData });

    const fetchedDataC = await fetchDataC();
    // console.log(fetchedDataC)
    this.setState({ dataC: fetchedDataC });

    const fetchedDataCanadaTime = await fetchDataCanadaTime();
    // console.log(fetchedDataCanadaTime)
    this.setState({ dataCT: fetchedDataCanadaTime });

    const fetchedDataProvSummary = await fetchDataProvSummary()
    console.log(fetchedDataProvSummary)
    this.setState({ dataCP: fetchedDataProvSummary });


    // const fetchedProvinces = await fetchProvinces();
    // // console.log(fetchedProvinces.prov)
    //   const provinces=fetchedProvinces.prov.map((item)=>{
    //     return item.province_full
    //   })
    // // console.log(provinces)
    // this.setState({ provinces: provinces });
  }

    



  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);

    this.setState({ data: fetchedData, country: country });
  };

  handleProvinceChange = async (province) => {

    const fetchedCPRData = await fetchDataRegionSummary(province);

    // console.log(fetchedCPRData);

    this.setState({ dataCPR: fetchedCPRData, province: province });
  };



  render() {
    const { data, country, isCanada, dataC, dataCP, provinces, province,dataCPR } = this.state;

    return (
      <div className={styles.container}>
        <img className={styles.image} src={covid} alt="" covid />

        {isCanada ? (
          <>
            <ButtonGroup variant="outlined" color="primary">
              <Button onClick={() => this.setState({ isCanada: false })}>
                Global
              </Button>
              <Button variant="contained" onClick={() => this.setState({ isCanada: true })}>
                Canada
              </Button>
            </ButtonGroup>

            <Cards data={dataC} dataCP={dataCP} isCanada={isCanada} province={province}  />
            <ProvincePicker 
              handleProvinceChange={this.handleProvinceChange} 
            />
            <Tables dataCP={ dataCP } dataCPR ={ dataCPR } province={province}/>
          </>
        ) : (
          <>
            <ButtonGroup variant="outlined" color="primary">
              <Button variant="contained" onClick={() => this.setState({ isCanada: false })}>
                Global
              </Button>
              <Button onClick={() => this.setState({ isCanada: true })}>
                Canada
              </Button>
            </ButtonGroup>
            <Cards data={data} isCanada={isCanada} />
            <CountryPicker handleCountryChange={this.handleCountryChange} />
            <Chart data={data} country={country} />
          </>
        )}
      </div>
    );
  }
}

export default App;
