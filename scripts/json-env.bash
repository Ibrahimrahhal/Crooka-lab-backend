for keyval in $(grep -E '": [^\{]' ./env/$1.json | sed -e 's/: /=/' -e "s/\(\,\)$//"); do
    echo "export $keyval"
    eval export $keyval
    eval set $keyval

done