import { BookList } from "./book-list.component"
import { SiteHeader } from "./site-header.component"




export function App(){
    //may get this data form service later.
    let books = ['The Accursed God', 'Manas', 'The Count of Monte Cristo'];

    return (<div>
        <SiteHeader title='World of Books' color='blue' />
        <h3>Book List</h3>
        <BookList books={books}/>
    </div>
    )
}



