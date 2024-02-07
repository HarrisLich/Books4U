import axios from 'axios'
import { motion, useAnimationControls } from 'framer-motion'
import React from 'react'
import Navbar from '../components/Navbar'


export default function ShelfFinder() {

    const [searchQuery, setSearchQuery] = React.useState(null)

    return (
        <>
            <Navbar/>
            <div className="w-full flex flex-col items-center justify-center grid grid-rows-2" style={{ height: "calc(90vh)" }}>

                <div className="text-4xl font-bold font-[sans] flex w-full items-center justify-center">Google Bookshelf Finder</div>
                <div className="w-full h-full flex flex-col items-center justify-center">
                    <div className="input-group2">
                        <input onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                //send post request to google books api with search query
                                axios.get("https://www.googleapis.com/books/v1/users/117522004192189783614/bookshelves").then((res) => {
                                    console.log(res.data.items)
                                })
                            }
                        }} onChange={(e) => setSearchQuery(e.target.value)} id="name" placeholder=' ' type='text'></input>
                        <label for="name">Find a Google Bookshelf...</label>
                    </div>
                </div>
            </div>
        </>
    )
}