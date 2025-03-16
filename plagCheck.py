import pdfplumber
from difflib import SequenceMatcher

# Function to check plagiarism between two text files
def check_plagiarism(user_file, admin_file):
    try:
        with open(user_file, "r", encoding="utf-8") as file1, open(admin_file, "r", encoding="utf-8") as file2:
            file1_data = file1.read()
            file2_data = file2.read()
            return SequenceMatcher(None, file1_data, file2_data).ratio() * 100  # Return plagiarism %
    except Exception as e:
        print(f"Error in check_plagiarism: {e}")
        return -1  # Return 0% plagiarism in case of failure

# Function to assign marks based on plagiarism percentage
def auto_mark_assign(plag_percent):
    if plag_percent > 90:
        return 10
    elif plag_percent > 80:
        return 9
    elif plag_percent > 75:
        return 8
    elif plag_percent > 60:
        return 7
    elif plag_percent > 50:
        return 6
    else:
        return 5

# Function to convert PDF to text
def pdf_to_text(pdf_file):
    try:
        with pdfplumber.open(pdf_file) as pdf:
            return "\n".join([page.extract_text() for page in pdf.pages if page.extract_text()])
    except Exception as e:
        print(f"Error in pdf_to_text: {e}")
        return ""

# Function to extract and write text from PDF to a text file
def write_text_from_pdf(pdf_file, output_text_file):
    try:
        text = pdf_to_text(pdf_file)
        with open(output_text_file, "w", encoding="utf-8") as txt_file:
            txt_file.write(text)
    except Exception as e:
        print(f"Error in write_text_from_pdf: {e}")

# Function to check if a file is acceptable (plagiarism below threshold)
def is_file_acceptable(user_pdf, faculty_pdf, threshold=50):
    write_text_from_pdf(user_pdf, "user.txt")
    write_text_from_pdf(faculty_pdf, "faculty.txt")
    plagiarism_score = check_plagiarism("user.txt", "faculty.txt")
    return plagiarism_score <= threshold
