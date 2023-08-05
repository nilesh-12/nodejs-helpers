find . -iname "*.js.json" -print0 |
  while IFS= read -r -d '' file; do
    echo "$file" "${file%.js.json}.json";
    cp "$file" "${file%.js.json}.json";
  done;

