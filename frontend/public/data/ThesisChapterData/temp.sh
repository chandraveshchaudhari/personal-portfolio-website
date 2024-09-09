python executePdfLatexPython.py
cd ./RawTexFiles/
pdflatex -interaction=batchmode  temp_Intro
bibtex temp_Intro
pdflatex -interaction=batchmode temp_Intro
pdflatex -interaction=batchmode temp_Intro
pdflatex -interaction=batchmode  temp_Literature
bibtex temp_Literature
pdflatex -interaction=batchmode temp_Literature
pdflatex -interaction=batchmode temp_Literature
pdflatex -interaction=batchmode  temp_Methodology
bibtex temp_Methodology
pdflatex -interaction=batchmode temp_Methodology
pdflatex -interaction=batchmode temp_Methodology
pdflatex -interaction=batchmode  temp_Results
bibtex temp_Results
pdflatex -interaction=batchmode temp_Results
pdflatex -interaction=batchmode temp_Results
pdflatex -interaction=batchmode  temp_Conclusion
bibtex temp_Conclusion
pdflatex -interaction=batchmode temp_Conclusion
pdflatex -interaction=batchmode temp_Conclusion
