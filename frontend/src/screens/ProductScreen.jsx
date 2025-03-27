import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Form from 'react-bootstrap/Form'
import { useParams } from "react-router-dom";
import axios from "axios";

function ProductScreen() {
    const { id } = useParams()

    const [game, setGame] = useState([])

    useEffect(() => {
        async function fetchGame() {
            const {data} = await axios.get(`/games/${id}`)
            setGame(data)
        }
        fetchGame()
    }, [])
  return (
    <div>
      
    </div>
  )
}

export default ProductScreen