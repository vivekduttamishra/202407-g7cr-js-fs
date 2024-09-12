import { delay } from "../utils/delay";
import { Author } from "./author";
import axios from "./api";

const url = '/authors';

export class ApiAuthorService {



    getAllAuthors = async () => {
        try {

            const data = await axios.get(url);
            console.log('data', data);

            return data.data;
        } catch (error) {
            console.log('error', error);
            throw error;
        }
    }

    getAuthorById = async (id?: string) => {

        var authors = await this.getAllAuthors();
        var result = authors.find((author: Author) => author.id === id);
        if (result)
            return result;
        else
            throw new Error(`Invalid Author Id ${id}`);
    }

    addAuthor = async (author: Author) => {
       // const token = localStorage.getItem('token');

        const { data } = await axios.post(url, author)
        //, 
        //     {
        //     headers: {
        //         'Authorization': `Bearer ${token}`
        //     }
        // }
       // );
        return data;
    }

    removeAuthor = async (id: string) => {

    }

    updateAuthor = async (id: string, author: Author) => {

    }
}