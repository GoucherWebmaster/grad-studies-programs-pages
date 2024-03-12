module.exports = function (eleventyConfig) {

    eleventyConfig.addPassthroughCopy('./src/style.css');
    eleventyConfig.addPassthroughCopy('./src/assets/images');
    eleventyConfig.addPassthroughCopy('./src/assets/fonts');
    eleventyConfig.addPassthroughCopy('./src/js');

    return {
        dir: {
            input: "src", 
            output: "public", 
            data: "_data"
        }, 
    }
}