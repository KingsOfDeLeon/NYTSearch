$(document).ready(function () {



            //key=MBrHobkG1LBSFpdbWSEH6a6WJnMEDvCF

            var key = "MBrHobkG1LBSFpdbWSEH6a6WJnMEDvCF";

            var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" +
                key + "&q=";


            $("#srchBtn").on("click", function () {

                $.ajax({
                        url: queryURL,
                        method: "GET"
                    })
                    .then(function (response) {
                        // Logging the URL so we have access to it for troubleshooting
                        console.log("------------------------------------");
                        console.log("URL: " + queryURL);
                        console.log("------------------------------------");

                        // Log the NYTData to console, where it will show up as an object
                        console.log(NYTData);
                        console.log("------------------------------------");
                    });


            });