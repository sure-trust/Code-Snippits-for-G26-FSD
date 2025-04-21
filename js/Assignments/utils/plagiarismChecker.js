const fs = require('fs');
const path = require('path');

function calculateSimilarity(str1, str2) {
    // Remove whitespace and convert to lowercase for better comparison
    str1 = str1.replace(/\s+/g, '').toLowerCase();
    str2 = str2.replace(/\s+/g, '').toLowerCase();
    
    if (str1 === str2) return 100;
    if (str1.length === 0 || str2.length === 0) return 0;

    // Using Levenshtein distance for similarity
    const matrix = Array(str2.length + 1).fill().map(() => Array(str1.length + 1).fill(0));

    for (let i = 0; i <= str1.length; i++) matrix[0][i] = i;
    for (let j = 0; j <= str2.length; j++) matrix[j][0] = j;

    for (let j = 1; j <= str2.length; j++) {
        for (let i = 1; i <= str1.length; i++) {
            if (str1[i - 1] === str2[j - 1]) {
                matrix[j][i] = matrix[j - 1][i - 1];
            } else {
                matrix[j][i] = Math.min(
                    matrix[j - 1][i - 1] + 1,
                    matrix[j][i - 1] + 1,
                    matrix[j - 1][i] + 1
                );
            }
        }
    }

    const distance = matrix[str2.length][str1.length];
    const maxLength = Math.max(str1.length, str2.length);
    return Math.round((1 - distance / maxLength) * 100);
}

function checkPlagiarism(submissionPath, submissionsDir) {
    const results = [];
    const submissionContent = fs.readFileSync(submissionPath, 'utf8');
    const submissions = fs.readdirSync(submissionsDir);

    for (const otherSubmission of submissions) {
        const otherPath = path.join(submissionsDir, otherSubmission);
        
        // Skip if it's a directory or the same file
        if (!fs.statSync(otherPath).isFile() || otherPath === submissionPath) continue;
        
        const otherContent = fs.readFileSync(otherPath, 'utf8');
        const similarity = calculateSimilarity(submissionContent, otherContent);

        if (similarity > 80) { // Threshold for similarity
            results.push({
                file: otherSubmission,
                similarity
            });
        }
    }

    return results;
}

module.exports = { checkPlagiarism }; 