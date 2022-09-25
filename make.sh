#!/bin/bash

# if we are in a subirectory
if [ "$(basename $PWD)" != "project-euler" ]
then
  cd ..
fi

# if we still are not in the directory
if [ "$(basename $PWD)" != "project-euler" ]
then
  echo "Must be in 'project-euler' direcotry or subfolder!"
  exit
fi

name=""
if [ ${#1} == 3 ]
then
  name=$1
else
  for i in {1..999}
  do
    test=$(printf %03d $i)

    if [ ! -d "$PWD/$test" ]
    then
      name=$test
      break
    fi
  done
fi

mkdir $name
cd $name
touch "main.js"
echo "let answer = 0" >> "./main.js"
echo "" >> "./main.js"
echo "console.log(\`Answer: \${answer}\`)" >> "./main.js"
echo "Challenge $name created!"
exit
