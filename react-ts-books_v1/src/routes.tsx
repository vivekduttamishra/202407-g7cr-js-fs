import { Navigate } from "react-router-dom";
import { AuthorListScreen } from "./screens/authors/author-list.screen";
import { AuthorDetailsScreen } from "./screens/authors/author-details.screen";
import { AuthorAddScreen } from "./screens/authors/author-add.screen";
import { BookListScreen } from "./screens/books/book-list.screen";
import { BookAddScreen } from "./screens/books/book-add.screen";
import { BookDetailsScreen } from "./screens/books/book-details.screen";
import  UserLoginScreen  from "./screens/user/user-login-screen";
import { UserRegistrationScreen } from "./screens/user/user-register.screen";
import { NotFoundScreen } from "./screens/not-found.screen";
import WelcomeScreen  from "./screens/welcome.screen";


export const routes=[

    {path:'/', element:<Navigate to="/authors"/>},
    {path:'/authors', element:<AuthorListScreen/>},
    {path:'/author/details/:id', element:<AuthorDetailsScreen/>},
    {path:'/author/add', element:<AuthorAddScreen/>},
    {path:'/welcome/:name', element:<WelcomeScreen/>},

    {path:"/books", element:<BookListScreen/>},
    {path:"/book/details/:id", element:<BookDetailsScreen/>},
    {path:"/book/add", element:<BookAddScreen/>},

    {path:"/user/login", element:<UserLoginScreen/>},
    {path:"/user/register", element:<UserRegistrationScreen/>},
    {path:"*", element:<NotFoundScreen/>}
];

