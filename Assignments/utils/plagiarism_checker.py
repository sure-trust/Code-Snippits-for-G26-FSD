import os
from difflib import SequenceMatcher
import fnmatch

def calculate_similarity(text1, text2):
    """Calculate similarity ratio between two texts using SequenceMatcher."""
    # Remove whitespace and convert to lowercase for better comparison
    text1 = ''.join(text1.split()).lower()
    text2 = ''.join(text2.split()).lower()
    
    return SequenceMatcher(None, text1, text2).ratio() * 100

def check_plagiarism(submission_path, submissions_dir, file_patterns=['*.py', '*.js', '*.html', '*.css']):
    """
    Check submission against other submissions for plagiarism.
    Returns a list of files with similarity above threshold.
    """
    results = []
    
    # Read the submission content
    with open(submission_path, 'r', encoding='utf-8') as f:
        submission_content = f.read()
    
    # Get all files in submissions directory
    for root, _, files in os.walk(submissions_dir):
        for file in files:
            # Check if file matches any of the patterns we're looking for
            if any(fnmatch.fnmatch(file, pattern) for pattern in file_patterns):
                file_path = os.path.join(root, file)
                
                # Skip if it's the same file
                if os.path.samefile(file_path, submission_path):
                    continue
                
                try:
                    with open(file_path, 'r', encoding='utf-8') as f:
                        other_content = f.read()
                        
                    similarity = calculate_similarity(submission_content, other_content)
                    
                    # If similarity is above 90%, add to results
                    if similarity > 90:
                        results.append({
                            'file': os.path.relpath(file_path, submissions_dir),
                            'similarity': round(similarity, 2)
                        })
                except Exception as e:
                    print(f"Error reading file {file_path}: {str(e)}")
    
    return results

if __name__ == "__main__":
    # Example usage
    submission = "path/to/submission/file.py"
    submissions_dir = "Assignments/Submissions"
    results = check_plagiarism(submission, submissions_dir)
    print(results) 