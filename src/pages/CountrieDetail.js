import React, {useState, useEffect} from 'react'
import { Table } from 'react-bootstrap'
import { useHistory, useParams } from 'react-router'
import axios from 'axios'

const CountrieDetail = () => {
    const { name } = useParams()
    const history = useHistory()

    const [results, setResults]=useState([])
    const [loading, setLoading]=useState(false)
    const [error, setError]=useState(null)

    const getData=async(name)=>{
        try {
            setLoading(true)
            const res = await axios.get('https://restcountries.eu/rest/v2/name/'+name)
            console.log(res)
        }catch(error){
            console.log(error)
        }finally {
            setLoading(false)
        }
    }

    useEffect(()=>{
        getData(name)
    },[name])

    return (
        <div>
            <h1>Countrie Detail</h1>
            <h2>Contrie Name : </h2>
            
        </div>
    )
}

export default CountrieDetail
