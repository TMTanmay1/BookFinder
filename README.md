# BookFinder

A React-based web application to help users search for books using the Open Library API. The app displays book details, including the author, publication year, and cover image. Users can easily find books by title and navigate through search results.

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Dependencies](#dependencies)
- [API Used](#api-used)

---

## Features

- **Book Search**: Search for books by title and view a list of related results.
- **Detailed Results**: Each book in the search results includes the title, author(s), publication year, edition count, and cover image.
- **Responsive Design**: The application is mobile-friendly, ensuring a good user experience across devices.
- **Error Handling**: Provides feedback to the user if no results are found or if there's an error with the API.

---

## Installation

To set up this project locally, follow these steps:

1. **Clone the repository**:
    ```bash
    git clone https://github.com/TMTanmay1/BookFinder.git
    cd bookfinder
    ```

2. **Start the Application**:
    ```bash
    npm start
    ```

The app should now be running on `http://localhost:3000`.

---

## Usage

1. **Search for a Book**:
   - Enter a title in the search bar, then click the search button.
   - The app will display a list of books matching your search query.

---

## Dependencies

This project uses the following main libraries:

- **React** - For building the user interface.
- **React Router** - For managing application navigation.
- **react-icons** - For icons used in the project.
- **CSS Modules** - For styling the components in a modular way.

To install these dependencies manually:
```bash

For more detail open the Project-BookFinder.docx file
npm install react react-router-dom react-icons

## API Used
This application uses the Open Library API to fetch book data based on user search queries. The data fetched includes the book title, authors, cover image, edition count, and first publish year.

