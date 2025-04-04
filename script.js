async function translateText() {
    const inputText = document.getElementById('textInput').value;
    const toLanguage = document.getElementById('languageSelect').value;
  
    if (!inputText.trim()) {
      document.getElementById('translatedText').innerText = "Please enter some text to translate.";
      return;
    }
  
    try {
      const response = await fetch("https://api.apyhub.com/sharpapi/api/v1/content/translate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "apy-token": "APY0xBfo5V8gybI2D9QiW8fAvy1RYfkJ0kYG9lb1cOKGMNhIRVp3OOt1ktmeLkx5fj"
        },
        body: JSON.stringify({
          content: inputText,
          to: toLanguage,
          from: "en" 
        })
      });
  
      const result = await response.json();
  
      if (result.translated) {
        document.getElementById('translatedText').innerText = result.translated;
      } else {
        document.getElementById('translatedText').innerText = "Translation failed. Please try again.";
      }
    } catch (error) {
      document.getElementById('translatedText').innerText = "Error: " + error.message;
    }
  }
  