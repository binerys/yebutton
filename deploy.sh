THEDATE=`date`
middleman build
mkdir ../temp
cd build
cp -a . ../../temp
cd ../../swe-ucla.github.io/
git add -A
git commit -m "Site updated at $THEDATE"
git push origin master