I then want to rename all the typescript files to js files => `find . -maxdepth 1 -type f -name "*.ts" | sed -e 'p' -E -e "s/\.ts/\.js/g" | xargs -n2 cp`
These typescript file don't have any type annotations so they are basically valid javascript files
Then I am working on the script that will import javascript files and create json dump 

I finished coding the script:
  Heres the steps to convert ts into json
  1.  cd `/c/Users/Acute/Projects/Ratnafin/public/meta`
  2.  metadata folder copy into `/c/Users/Acute/Projects/Ratnafin/public/meta`
  3.  change file extension to js from ts => `find . -maxdepth 1 -type f -name "*.ts" | sed -e 'p' -E -e "s/\.ts/\.js/g" | xargs -n2 mv`
  4. make sure same dir structure is in output directory. (This path should exist => `outJson/lead/tabs/`)
  5. Run the script => `node run.js lead/tabs outJson/`

  There are cases for the errors:
  1. there are import statements in .ts
  2. there are type annotations in .ts
  3. there is not named export

## Here's some size comparison:
Directory size with .js files 
```sh
$ du -h --max-depth=1 inquiry/
564K    inquiry/
```

Directory size with .js.json files 
```sh
$ du -h --max-depth=1 dist/inquiry/
408K    dist/inquiry/
```

File name ends at .js.json, because I did not truncket the extension
