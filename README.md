# Language_translator
Project Description:
This project is a Language Translation Website that allows users to input text, select a target language, and receive a translated output. The translation functionality is powered by the APYHub Translation API, which processes user input and returns translated content asynchronously.

Features
-Input any English text.
-Choose a language to translate to.
-Get the translated text instantly on the same page.
-Clean and responsive UI.

The web application consists of the following components:
-index.html - The main structure and UI of the website.
-styles.css - Styling and layout enhancements for a visually appealing UI.
-script.js - Handles API calls, user input processing, and response handling.

File Descriptions:
1. index.html (HTML Structure)
The index.html file serves as the backbone of the application. It includes a text input field for users to enter text, a dropdown menu for selecting the target language, a button to initiate the translation, and a display area for the translated text.
Key Elements:
 <input> field for user input.
 <select> dropdown to choose a target language.
 <button> to trigger the translation request.
 <div> to display translated text.

Important Code Snippets:

<input type="text" id="textInput" placeholder="Enter text to translate">
<select id="languageSelect">
    <option value="fr">French</option>
    <option value="es">Spanish</option>
    <option value="de">German</option>
</select>
<button onclick="translateText()">Translate</button>
<p id="translatedOutput"></p>

2. styles.css (Styling and Layout)
The styles.css file enhances the visual appeal of the website by adding styles to buttons, text input fields, dropdown menus, and the results section.

Key Features:
-General styling: Sets font, background color, and alignment.
-Input and button styling: Provides better UX with padding, border-radius, and hover effects.
-Response text styling: Ensures translated text is clearly visible.

3. script.js (JavaScript Logic)
The script.js file contains the core logic that makes API requests and handles responses.The script.js file is responsible for handling user interactions, communicating with the APYHub Translation API, and updating the user interface dynamically.

Workflow:
1.Get User Input: Retrieves text from #textInput and language from #languageSelect.
2.Validate Input: If empty, shows an error message.
3.Send API Request:
-Uses fetch() to call https://api.apyhub.com/sharpapi/api/v1/content/translate.
-Sends { "content": inputText, "to": toLanguage, "from": "en" } in JSON format.
4.Handle API Response:
-If successful, displays result.translated.
-If failed, shows an error message.
5.Error Handling: Catches network or API issues and updates the UI accordingly.

API Key Usage and Security
This project uses the APYHub Translation API to translate text into different languages. To authenticate API requests, an API key (apy-token) is required.
1.Obtain an API Key:
-Signing up at APYHub and generate an API key.
-Copying the key and store it securely.
2.Configure the API Key
-In the frontend (script.js), the API key is passed in the header
headers: {
  "Content-Type": "application/json",
  "apy-token": "APY0xBfo5V8gybI2D9QiW8fAvy1RYfkJ0kYG9lb1cOKGMNhIRVp3OOt1ktmeLkx5fj"
}

Setup & Usage
1. Clone the repository  
   Simply download the files or clone the project.

2. Open index.html in your browser
   Double click the file or run a local server.

How It Works
- The user enters text in a textarea.
- Selects the desired language (dropdown).
- On clicking Translate, the script.js file:
  - Sends a POST request to the translation API.
  - Uses the following endpoint:
    POST https://api.apyhub.com/sharpapi/api/v1/content/translate
    
