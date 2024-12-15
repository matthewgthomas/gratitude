import re
import requests

def split_markdown_documents_from_url(url, path):
    # Fetch the content from the URL
    try:
        response = requests.get(url)
        response.raise_for_status()  # Raise an error for bad status codes
        input_string = response.text
    except requests.exceptions.RequestException as e:
        print(f"An error occurred while fetching the URL: {e}")
        return

    # Replace '\---' with '---'
    input_string = re.sub(r'\\---', '---', input_string)

    # Remove backslashes from characters in <script> blocks
    input_string = re.sub(r'\\<', '<', input_string)
    input_string = re.sub(r'\\>', '>', input_string)
    input_string = re.sub(r'\\_', '_', input_string)
    input_string = re.sub(r'\\&', '&', input_string)
    input_string = re.sub(r'\\=', '=', input_string)
    input_string = re.sub(r'\\`', '`', input_string)
    input_string = re.sub(r'\\\+', '+', input_string)
    input_string = re.sub(r'\\\)', ')', input_string)

    # Regex pattern to match each Markdown document
    pattern = r'^---\s*\n(.*?)\n---\s*\n(.*?)(?=(^---\s*$|\Z))'
    matches = re.finditer(pattern, input_string, re.DOTALL | re.MULTILINE)

    for match in matches:
        frontmatter = match.group(1)
        content = match.group(2)

        # print("Frontmatter:")
        # print(frontmatter)
        # print("\nContent:")
        # print(content)

        # Process the frontmatter into a dictionary
        fm_lines = frontmatter.strip().split('\n')
        fm_dict = {}
        for line in fm_lines:
            if ':' in line:
                key, value = line.split(':', 1)
                fm_dict[key.strip()] = value.strip()

        # Use the 'slug' from the frontmatter as the filename
        slug = fm_dict.get('slug', 'default')
        filename = f"{path}/{slug}.md"

        # Reconstruct the full document
        full_doc = f"---\n{frontmatter}\n---\n{content}"

        # Write the document to a file
        with open(filename, 'w', encoding='utf-8') as f:
            f.write(full_doc)
        print(f"Created file: {filename}")

def save_google_sheet(url, path, name):
    try:
        response = requests.get(url)
        response.raise_for_status()  # Raise an error for bad status codes
        csv_contents = response.text
    except requests.exceptions.RequestException as e:
        print(f"An error occurred while fetching the URL: {e}")
        return

    filename = f"{path}/{name}.csv"

    # Write the document to a file
    with open(filename, 'w', encoding='utf-8') as f:
        f.write(csv_contents)
    print(f"Created file: {filename}")

# ---- Download story ----
# Construct Google Docs URL
base = "https://docs.google.com"
doc_id = "1gyif1cXtfhWgfqhrlmEEUWJMjb1CPlGJyJkz9FwWaPE"
doc_url = f"{base}/document/d/{doc_id}/export?format=md"

# Save Markdown files
md_path = 'src/content'
split_markdown_documents_from_url(doc_url, md_path)

# ---- Download routes between sections ----
# Construct Google Sheets URL
csv_id = "1jRjzJeVi17uxrwwFbk18fJm6K9cWsAwIwvb0elPwWJo"
csv_url = f"{base}/spreadsheets/d/{csv_id}/export?format=csv"

# Save 
data_path = "src/data"
save_google_sheet(csv_url, data_path, "routes")

# ---- Download list of sections ----
# Construct Google Sheets URL
csv_id = "1jRjzJeVi17uxrwwFbk18fJm6K9cWsAwIwvb0elPwWJo"
sheet_id = "1755339715"
csv_url = f"{base}/spreadsheets/d/{csv_id}/export?gid={sheet_id}&format=csv"

# Save
data_path = "src/data"
save_google_sheet(csv_url, data_path, "sections")
