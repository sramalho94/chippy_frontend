'use client'

import axios from 'axios'
import { BASE_URL } from '../app/globals.js'
import { useEffect, useState } from 'react'

type Chip = {
  chipName: string
  flavor: string
  brand: string
  MSRP: string
  type: string
  quantity: number
  limited: boolean
  likeCount: number
  dislikeCount: number
  userId: number
}

const FilterForm = () => {
  const [allChips, setAllChips] = useState([])
  const [allFlavors, setAllFlavors] = useState<string[]>([])
  const [allBrands, setAllBrands] = useState<string[]>([])

  const getAllChips = async () => {
    const response = await axios.get(`${BASE_URL}/chips`)
    setAllChips(response.data)
  }

  const getChipFlavors = () => {
    const flavors: string[] = []
    allChips.forEach((chip: Chip) => {
      flavors.push(chip.flavor)
    })
    const uniqueFlavors = flavors.filter(
      (value: string, index: number, self) => {
        return self.indexOf(value) === index
      }
    )
    setAllFlavors(uniqueFlavors)
  }

  const getChipBrands = () => {
    const brands: string[] = []
    allChips.forEach((chip: Chip) => {
      brands.push(chip.brand)
    })
    const uniqueBrands = brands.filter((value: string, index: number, self) => {
      return self.indexOf(value) === index
    })
    setAllBrands(uniqueBrands)
  }

  useEffect(() => {
    getAllChips()
  }, [])

  useEffect(() => {
    getChipFlavors()
    getChipBrands()
  }, [allChips])

  useEffect(() => {
    console.log(allFlavors, allBrands)
  }, [allFlavors, allBrands])

  return (
    <form>
      <h2>Flavors:</h2>
      {allFlavors.map((flavor) => (
        <div key={flavor}>
          <input
            type="checkbox"
            id={flavor}
            name={flavor}
            value={flavor}
          ></input>
          <label htmlFor={flavor}>{flavor}</label>
        </div>
      ))}
      <h2>Brands:</h2>
      {allBrands.map((brand) => (
        <div key={brand}>
          <input type="checkbox" id={brand} name={brand} value={brand}></input>
          <label htmlFor={brand}>{brand}</label>
        </div>
      ))}
    </form>
  )
}

export default FilterForm
