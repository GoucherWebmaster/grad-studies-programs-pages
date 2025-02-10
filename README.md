# Graduate & Professional Studies at Goucher College

A marketing website for all the graduate programs at Goucher College. 

## This website is built using:

- [Eleventy](https://www.11ty.dev/docs/)
- [Kinsta](https://my.kinsta.com/login)
- [Nunjucks](https://mozilla.github.io/nunjucks/)
- JavaScript
- HTML & CSS

## To start this project

This project requires Node.js. Visit [nodejs.org](https://nodejs.org/en) to download the latest version.

Once node is installed and the project is cloned run:

`npm init`

This will download the dependencies for the project onto your local.

Once the project is initialized, start the dev server by running:

`npm start`

Open http://localhost:8080/ to view it in the browser.

## View main pages live:

-[Homepage](https://gradstudies.goucher.edu)
-[MAAPA](https://gradstudies.goucher.edu/maapa)
-[MACS](https://gradstudies.goucher.edu/macs)
-[MADC](https://gradstudies.goucher.edu/madc)
-[MAES](https://gradstudies.goucher.edu/maes)
-[MAHP](https://gradstudies.goucher.edu/mahp)
-[MAT](https://gradstudies.goucher.edu/mat)
-[MED](https://gradstudies.goucher.edu/med)
-[MFAN](https://gradstudies.goucher.edu/mfan)

## View Thank You pages live:

-[MAAPA](https://gradstudies.goucher.edu/thank-you/maapa)
-[MACS](https://gradstudies.goucher.edu/thank-you/macs)
-[MADC](https://gradstudies.goucher.edu/thank-you/madc)
-[MAES](https://gradstudies.goucher.edu/thank-you/maes)
-[MAHP](https://gradstudies.goucher.edu/thank-you/mahp)
-[MAT](https://gradstudies.goucher.edu/thank-you/mat)
-[MED](https://gradstudies.goucher.edu/thank-you/med)
-[MFAN](https://gradstudies.goucher.edu/thank-you/mfan)
-[Professional Development Certificate](https://gradstudies.goucher.edu/thank-you/professional-development-certificate)


## Additional Info

This Eleventy project uses [pagination](https://www.11ty.dev/docs/pagination/) to create the different program pages. 

Each page is using [global data](https://www.11ty.dev/docs/pagination/#paginate-a-global-or-local-data-file) provided in json files. To edit program info or add additional programs use the `programs.json` file. To edit thank you page info update the `programThanks.json` file.

Program and thank you pages are created using templates. (See `thank-you-page-template.njk` and `program-page-template.njk` ). Each template uses front matter to specify how a page gets created:

    - data: file name where the data is found
    - size: the amount of chunks of data that gets populated per page
    - alias: you can choose a keyword that will specify your data 
    - permalink: you can choose a permalink with an option to slugify the string






