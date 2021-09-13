import React, { useState, useEffect } from 'react'
import { NativeSelect, FormControl } from '@material-ui/core'
import styles from './ProvincePicker.module.css'
import { fetchProvinces } from '../../api'

const ProvincePicker = ({  handleProvinceChange }) => {
    const [ fetchedProvinces, setFetchedProvinces ] = useState([])
    const [ fetchedProvincesShort, setFetchedProvincesShort ] = useState([])


    // useEffect(() => {
    //     const fetchAPI = async () => {
    //         setFetchedCountries(await fetchCountries())
    //     }
    //     fetchAPI()
    // },[setFetchedCountries])

    useEffect(() => {
        const fetchAPI = async () => {
            const fetchedProvincesData = await fetchProvinces();
            // console.log(fetchedProvincesData)
            // const provinces=fetchedProvincesData.prov.map((item)=>{
            //     return item.province_full
            // })
            // // console.log(provinces)
            // setFetchedProvinces(provinces);

            const provinces=fetchedProvincesData.prov
            // console.log(provinces)
            setFetchedProvinces(provinces);


        }
        fetchAPI()
    },[setFetchedProvinces])


    return (
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue='' onChange={(e) => handleProvinceChange(e.target.value)}>
                <option value=''>Whole Country</option>
                {fetchedProvinces.map((province,i) => <option key={i} value={province.province_full}>{province.province_full}</option>)}
            </NativeSelect>
        </FormControl>
    )
}

export default ProvincePicker
