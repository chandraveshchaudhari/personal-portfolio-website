# use rubber first to set everything

import os
import re

root = "/home/chandravesh/PhDWork/PycharmProjects/doctoral-thesis/frontend/public/data/ThesisChapterData/RawTexFiles"
# root = "/home/chandravesh/PhDWork/PycharmProjects/doctoral-thesis/frontend/public/data/ThesisChapterData/RawTexFiles/ChandraveshThesis/Chapters/Chapter1/"
for path, subdirs, files in os.walk(root):
    for name in files:
        if name.endswith('.tex'):

            file_name = os.path.join(path, name)
            with open(file_name, 'r') as f:
                content = f.read()
                #print(content[:1000])
            if '\\begin{document}' in content:
                os.system(f'cd {path}/ \n'
                          f'pdflatex -output-directory=/home/chandravesh/PhDWork/PycharmProjects/doctoral-thesis/frontend'
                          f'/public/data/ThesisChapterData/RawTexFiles/ -interaction=batchmode {file_name}')
            else:
                if '\\Chapter' in content:
                    regex = r'\\Chapter{.*}'
                    # print(regex)
                    to_edit = re.findall(regex, content)
                    # print(to_edit)
                    data = to_edit[0].split('{')[-1].split('}')[0]
                    replace_with = f"\\textbf{{\\huge{{{data}}}}}"
                    content = content.replace(to_edit[0], replace_with)

                temp_file_name = os.path.join(path, f'temp_{name}')
                new_content = f'\\documentclass{{article}} \n' \
                              f'\\usepackage[pdftex]{{graphicx}} \n' \
                              f'\\usepackage{{cite}} \n' \
                              f'\\usepackage[dvipsnames]{{xcolor}} \n' \
                              f'\\begin{{document}} \n' \
                              f'{content} \n' \
                              f'\\bibliographystyle{{unsrtnat}} \n' \
                              f'\\bibliography{{Bibliography}} \n' \
                              f'\\end{{document}}'

                with open(temp_file_name, 'w') as f:
                    f.writelines(new_content)
          #      os.system(f'cd {path}/ \n'
          #                f'pdflatex -output-directory=/home/chandravesh/PhDWork/PycharmProjects/doctoral-thesis/frontend'
       #                   f'/public/data/ThesisChapterData/RawTexFiles/ -interaction=batchmode {temp_file_name}')

# pdflatex -output-directory=../../PdfFiles/ -interaction=batchmode PhD_Thesis.tex
