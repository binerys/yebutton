THEDATE=`date`
middleman build
mkdir ../temp
cd build
cp -a . ../../temp
cd ..
git checkout master
cd ../temp
rsync -r .  ../yebutton
cd ../yebutton
git add -A
git commit -m "Site updated at $THEDATE"
git push origin master
git checkout dev
cd ..
rm -rf temp
