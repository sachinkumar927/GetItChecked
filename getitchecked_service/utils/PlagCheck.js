const fs = require('fs');
const pdfParse = require('pdf-parse');
const stringSimilarity = require('string-similarity');

// Function to convert PDF to text
async function pdfToText(filePath) {
    const dataBuffer = fs.readFileSync(filePath);
    const pdfData = await pdfParse(dataBuffer);
    return pdfData.text;
}

// Function to check plagiarism
async function checkPlagiarism(userFile, adminFile) {
    const userText = await pdfToText(userFile);
    const adminText = await pdfToText(adminFile);
    return stringSimilarity.compareTwoStrings(userText, adminText) * 100; // Plagiarism percentage
}

// Function to automatically assign marks based on plagiarism percentage
function autoMarkAssign(plagPercent) {
    if (plagPercent > 90) return 10;
    if (plagPercent > 80) return 9;
    if (plagPercent > 75) return 8;
    if (plagPercent > 60) return 7;
    if (plagPercent > 50) return 6;
    return 5;
}

// Function to check if the file is acceptable
async function isFileAccepting(userFile, adminFile) {
    const plagPercent = await checkPlagiarism(userFile, adminFile);
    return plagPercent > 50 ? true : false;
}

// Example Usage
(async () => {
    const plagPercent = await checkPlagiarism('user.pdf', 'faculty.pdf');
    console.log(`Plagiarism Percentage: ${plagPercent}%`);
    console.log(`Assigned Marks: ${autoMarkAssign(plagPercent)}`);
    console.log(`File Acceptable: ${await isFileAccepting('user.pdf', 'faculty.pdf')}`);
})();
