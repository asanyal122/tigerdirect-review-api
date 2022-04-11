const puppeteer = require("puppeteer")



const fetchPage = async (url) => {
    
    //init browser and goto url
    const browser = await puppeteer.launch({headless:false});
    const page = await browser.newPage();
    await page.goto(url);
    
    //reviews will store required list
    let reviews = await page.evaluate(() => {
        //for storing parsed reviews
        let parsedReviews = []


        //getting all customerReviews items
        let reviewElms = document.querySelectorAll('#customerReviews #customerReviews');
        
        //if nothing is present return blank list
        if(reviewElms.length === 0){
            return [];
        }
        

        console.log(reviewElms.length);

        //iterate for all review elements
        reviewElms.forEach((reviewElm) => {
            //name
            let rName = reviewElm.querySelectorAll('.reviewer dd')[0].innerText;
            
            //date
            let rDate = reviewElm.querySelectorAll('.reviewer dd')[1].innerText;
            
            //comment
            let rComment = reviewElm.querySelector('blockquote').innerText;
            
            
            //rating
            let itemReview = reviewElm.querySelector('.review .leftCol .itemReview');
            let rRatingCategories = itemReview.querySelectorAll('dt');
            let rRatingVals = itemReview.querySelectorAll('dd');
            let ratingObj = {};
            for(let i=0;i<rRatingCategories.length;i++){
                ratingObj[rRatingCategories[i].innerText] = rRatingVals[i].innerText;
                
                //remove newline characters
                ratingObj[rRatingCategories[i].innerText] = ratingObj[rRatingCategories[i].innerText].replaceAll('\n','');
                
                //remove spaces 
                ratingObj[rRatingCategories[i].innerText] = ratingObj[rRatingCategories[i].innerText].replaceAll(/\s/g,'');
            }
            
            parsedReviews.push({"reviewerName":rName,"reviewDate":rDate, "reviewerComment":rComment,"reviewerRating":ratingObj});
        })

        return parsedReviews;
    })

    //closing browser
    await browser.close();

    return {"reviews" : reviews};
  }


module.exports = {
    fetchPage:fetchPage
}