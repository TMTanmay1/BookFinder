import React, { useState, useContext, useEffect, useCallback } from 'react';

const URL = "http://openlibrary.org/search.json?title=";
const AppContext = React.createContext();

const AppProvider = ({children}) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);  // Set to false initially
    const [resultTitle, setResultTitle] = useState("");

    // Memoize the fetchBooks function to avoid unnecessary re-renders
    const fetchBooks = useCallback(async () => {
        if (!searchTerm.trim()) return;
        setLoading(true);
        try {
            const response = await fetch(`${URL}${searchTerm}`);
            const data = await response.json();
            const { docs } = data;

            if (docs) {
                const newBooks = docs.slice(0, 20).map((bookSingle) => {
                    const { key, author_name, cover_i, edition_count, first_publish_year, title } = bookSingle;

                    // Ensure to handle missing cover images by providing a fallback
                    const coverImg = cover_i 
                        ? `https://covers.openlibrary.org/b/id/${cover_i}-L.jpg`
                        : 'https://via.placeholder.com/150';  // Fallback image

                    return {
                        id: key,
                        author: author_name ? author_name : ["Unknown author"],
                        cover_img: coverImg,
                        edition_count: edition_count || 0,
                        first_publish_year: first_publish_year || "N/A",
                        title: title || "Untitled"
                    };
                });

                setBooks(newBooks);
                setResultTitle(newBooks.length > 1 ? "Your Search Results" : "No Results Found!");
            } else {
                setBooks([]);
                setResultTitle("No Search Results Found!");
            }
        } catch (error) {
            console.error(error);
            setBooks([]);
            setResultTitle("An error occurred. Please try again.");
        }
        setLoading(false);  // Always stop loading after the request
    }, [searchTerm]);

    // Fetch books whenever the searchTerm changes
    useEffect(() => {
        fetchBooks();
    }, [searchTerm, fetchBooks]);

    return (
        <AppContext.Provider value={{ loading, books, setSearchTerm, resultTitle, setResultTitle }}>
            {children}
        </AppContext.Provider>
    );
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppContext, AppProvider };
