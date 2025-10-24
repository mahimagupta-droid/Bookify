import { useEffect, useState } from "react"
import { useFirebase } from "../Context/Firebase"
import BookCard from "../Context/Components/Card"
export default function HomePage(){
    const [book, setBook] = useState([])
    const firebase = useFirebase()
    useEffect(() => {
        firebase.listAllBooks().then((books) => setBook(books.docs))
    }, [firebase])
    return (
        <div className="container">
            <BookCard books={book} />
        </div>
    )
}
