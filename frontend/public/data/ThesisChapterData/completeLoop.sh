cd ./RawTexFiles/
python executePdfLatexPython.py
find . -type f -name "*temp*.tex" | xargs rubber
find . -type f -name "*temp*.tex" | xargs pdflatex
