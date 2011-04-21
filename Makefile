all: XJSCompatibility.js

clean:
	@@rm -rf dist

XJSCompatibility.js:
	@@mkdir -p dist
	@@cat src/before.js > dist/XJSCompatibility.js
	@@${shell echo -e build/XSHMakeFile/XSHMakeFile.sh -l js src/window} >> dist/XJSCompatibility.js
	@@cat src/after.js >> dist/XJSCompatibility.js
