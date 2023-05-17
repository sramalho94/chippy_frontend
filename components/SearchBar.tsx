'use client'

import { useState } from "react"
import axios from 'axios'

const SearchBar = () => {
    const [address, setAddress] = useState("")

    const handleChange = (e: any) => {
        setAddress(e.target.value)
    }

    const handleSubmit = async (e: any) => {
        e.preventDefault()
        // const result = await axios.get()
        console.log(address)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input onChange={handleChange} name="address" placeholder="633 Clark St, Evanston, IL 60208" />
            <button>Search</button>
        </form>
    )
}

export default SearchBar