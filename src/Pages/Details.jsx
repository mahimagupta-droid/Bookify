import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { useFirebase } from "../Context/Firebase"
import { Button } from "react-bootstrap"
export default function BookDetails(){
    const params = useParams()
    const [data, setData] = useState(null)
    const firebase = useFirebase()
    useEffect(() => {
        firebase.getBookDetailsById(params.bookId).then((value) => setData(value.data()))
    }, [firebase, params.bookId])
    if(data == null){
         return <h1>Loading...</h1>
    }
    //     return <h1>Data Loaded</h1>
    // }
    console.log(data)
    return (
        <>
            <h1>Book Name: {data.name}</h1>
            <h3>By: {data.author}</h3>
            <h4>Genre: {data.genre}</h4>
            <h5>Price: {data.price}</h5>
            <h5>ISBN No: {data.isbn}</h5>

            <h2>Owner Details</h2>
            <h5>Name: {data.displayName}</h5>
            <h5>Email Id: {data.email}</h5>
            <Button variant="success">Buy Now!</Button>
        </>
    )
}