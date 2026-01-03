// popup.js
// Author: Rahul Paul
// Description: Handles API key configuration and saves it to Chrome Local Storage.

document.addEventListener("DOMContentLoaded", () => {
    const apiKeyInput = document.getElementById("api-key");
    const saveKeyButton = document.getElementById("save-key");
    const status = document.getElementById("status");

    // 1. Load the saved API key if it exists
    chrome.storage.local.get(['apiKey'], (result) => {
        if (result.apiKey) {
            apiKeyInput.value = result.apiKey;
        }
    });

    // 2. Save the API key when the button is clicked
    if (saveKeyButton) {
        saveKeyButton.addEventListener("click", () => {
            const apiKey = apiKeyInput.value.trim();
            
            if (apiKey) {
                chrome.storage.local.set({ apiKey: apiKey }, () => {
                    // Update status message
                    status.textContent = 'API key saved successfully!';
                    status.style.color = '#28a745'; // Success Green
                    
                    // Close the popup window automatically after 1.5 seconds
                    setTimeout(() => {
                        window.close(); 
                    }, 1500);
                });
            } else {
                status.textContent = 'Please enter a valid API key.';
                status.style.color = '#d9534f'; // Error Red
            }
        });
    }
});