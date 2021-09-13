import axios from "axios";

const url = 'https://covid19.mathdro.id/api'

export const fetchData = async (country) => {
    let changeableUrl = url;

    if(country){
        changeableUrl=`${url}/countries/${country}`
    }

    try {
        //destructure data from res, and destructure confirmed, recovered, deaths, lastUpdate from data
        const { data: { confirmed, deaths, lastUpdate } } = await axios.get(changeableUrl);
        
        return { confirmed, deaths, lastUpdate }
    } catch (error) {
        console.log(error)
    }
}

export const fetchDailyData = async () => {
    try {
        const { data } = await axios.get(`${url}/daily`)

        const modifiedData = data.map((dailyData) => ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate
        }))
        // console.log(modifiedData)
        return modifiedData
    } catch (error) {
        console.log(error)
    }
}

export const fetchCountries = async () => {
    try {
        const { data: { countries }} = await axios.get(`${url}/countries`)
        
        return countries.map((country) => country.name)
    } catch (error) {
        console.log(error)
    }
}

const urlC = 'https://api.opencovid.ca'

export const fetchDataC = async () => {
    // let changeableUrl = url;

    // if(country){
    //     changeableUrl=`${url}/countries/${country}`
    // }

    try {
        //destructure data from res, and destructure confirmed, recovered, deaths, lastUpdate from data
        // const { data: { confirmed, deaths, lastUpdate } } = await axios.get(changeableUrl);

        const { data} = await axios.get(urlC);
        // console.log(summary)
        return data
    } catch (error) {
        console.log(error)
    }
}

export const fetchDataCanadaTime = async () => {
    // let changeableUrl = url;

    // if(country){
    //     changeableUrl=`${url}/countries/${country}`
    // }

    try {
        //destructure data from res, and destructure confirmed, recovered, deaths, lastUpdate from data
        // const { data: { confirmed, deaths, lastUpdate } } = await axios.get(changeableUrl);

        const { data} = await axios.get(`${urlC}/timeseries`);
        // console.log(data)
        return data
    } catch (error) {
        console.log(error)
    }
}

export const fetchDataProvSummary = async () => {
    // let changeableUrl = url;

    // if(country){
    //     changeableUrl=`${url}/countries/${country}`
    // }

    try {
        //destructure data from res, and destructure confirmed, recovered, deaths, lastUpdate from data
        // const { data: { confirmed, deaths, lastUpdate } } = await axios.get(changeableUrl);

        const { data} = await axios.get(`${urlC}/summary?loc=prov`);
        // console.log(data)
        return data
    } catch (error) {
        console.log(error)
    }
}

export const fetchDataRegionSummary = async (province) => {
    // let changeableUrl = url;

    // if(country){
    //     changeableUrl=`${url}/countries/${country}`
    // }

    try {
        //destructure data from res, and destructure confirmed, recovered, deaths, lastUpdate from data
        // const { data: { confirmed, deaths, lastUpdate } } = await axios.get(changeableUrl);

        const { data} = await axios.get(`${urlC}/summary?loc=hr`);
        if(province=="British Columbia"){
            province='BC'
        }else if(province=="Newfoundland and Labrador"){
            province="NL"
        }else if(province=="Northwest Territories"){
            province="NWT"
        }else if(province=="Prince Edward Island"){
            province="PEI"
        }else{

        }

        const dataCPR=data.summary.filter((item)=>item.province==province)
        console.log(dataCPR)
        console.log(data)
        return dataCPR
    } catch (error) {
        console.log(error)
    }
}

export const fetchProvinces = async () => {
    // let changeableUrl = url;

    // if(country){
    //     changeableUrl=`${url}/countries/${country}`
    // }

    try {
        //destructure data from res, and destructure confirmed, recovered, deaths, lastUpdate from data
        // const { data: { confirmed, deaths, lastUpdate } } = await axios.get(changeableUrl);

        const { data } = await axios.get(`${urlC}/other`);
        // console.log(data)
        return data
    } catch (error) {
        console.log(error)
    }
}