# jwt-decoder
A simple webpage to decode JSON Web Tokens. There are many web token sites out there, but a JWT is a password. It's not a good idea to paste a password in some random website. This site is very slimed down and runs with few dependencies. The intent is for you to copy this site and host it on your own infrastructure that you trust.

npm project was setup according to this guide. https://wweb.dev/blog/how-to-create-static-website-npm-scripts/


# Install guide
```sh
npm run build:all
```

The resulting assets will be produced in the `dist/` folder and are ready to be used on your static site host of choice.


# TODO
- format the produced json so it looks pretty
as an example look at https://github.com/circlecell/jsonlint.com/blob/0c6fb1e2b222f089a886d5c85dfadd384ec9ce88/js/index.js#L171


