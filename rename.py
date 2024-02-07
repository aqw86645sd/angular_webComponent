import os
import sys

if len(sys.argv) != 2:
    print('參數數量不對')
    quit()

projectName = sys.argv[1].lower()

# root path
path = 'projects/' + projectName
path_src_app = path + '/src/app'

if os.path.exists(path):
    # rename filename
    for filename in os.listdir(path_src_app):
        if filename.startswith('app.component.'):
            new_filename = filename.replace('app.component.', projectName + '.component.')
            os.rename(os.path.join(path_src_app, filename), os.path.join(path_src_app, new_filename))

else:
    print('Folder is not exists!')
