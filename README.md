# Ehdoroque?

Ehdoroque? is a simple React application that allows you to check if a band is a rock band or not. The project is inspired by the website [isthisbandemo.com](http://isthisbandemo.com/) and is a parody of the Portuguese phrase "é do rock?".

## How to Run Locally

To run the project locally, you will need to have Node.js and npm installed on your machine.

1.  Clone the repository:

    ```bash
    git clone https://github.com/your-github-username/ehdoroque.git
    ```

2.  Navigate to the project directory:

    ```bash
    cd ehdoroque
    ```

3.  Install the dependencies:

    ```bash
    npm install
    ```

4.  Start the development server:

    ```bash
    npm start
    ```

The application will be available at `http://localhost:3000`.

## How to Deploy

The project is configured to be deployed to GitHub Pages.

1.  Update the `homepage` property in the `package.json` file with your GitHub Pages URL:

    ```json
    "homepage": "https://your-github-username.github.io/ehdoroque",
    ```

2.  Deploy the application:

    ```bash
    npm run deploy
    ```

The application will be deployed to your GitHub Pages site.

## How to Contribute

To add new bands to the list, you will need to update the `src/bands.js` file.

1.  Open the `src/bands.js` file.
2.  Add the new band to the `bands` array.
3.  Save the file.

The new band will be available in the application.