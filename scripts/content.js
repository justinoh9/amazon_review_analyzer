// content.js

console.log("Amazon Review Scraper Content Script Loaded!");

// Function to scrape reviews from the current page
function scrapeReviews() {
    // Query for all review elements on the page
    const reviewElements = document.querySelectorAll('.review-text-content');

    // Extract text content from each review element
    const reviews = Array.from(reviewElements).map(element => {
        return element.innerText.trim(); // Remove extra spaces
    });

    // Log the scraped reviews to the console
    console.log("Scraped Reviews:", reviews);

    // Send the reviews to the background script
    chrome.runtime.sendMessage({
        type: "reviews_scraped",
        data: reviews
    });
}

// Add an event listener to trigger scraping
// (Optional: Replace this with specific triggers, like button clicks)
document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM fully loaded and parsed. Starting to scrape reviews...");
    scrapeReviews();
});
