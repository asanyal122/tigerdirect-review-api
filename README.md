<h2>1.First install packages</h2>


```javascript
npm install express
```
```javascript
npm install puppeteer
```

<h2>2.Run command </h2>

```javascript
node index.js
```

</br>

<h2>3.Send post request to localhost:3000/api/reviews</h2>

sample request body: </br>

```json
{
    "url":"https://www.tigerdirect.com/applications/SearchTools/item-details.asp?EdpNo=640254&CatId=3"
}
```

sample response: </br>

```json
{
    "reviews": [
        {
            "reviewerName": "RISHABH",
            "reviewDate": "Aug 20, 2021",
            "reviewerComment": "\nBest deal\nMust buy product at this price\n",
            "reviewerRating": {
                "Overall": "4.0",
                "Value": "4.0",
                "Features": "4.0",
                "Quality": "4.0",
                "Performance": "4.0"
            }
        },
        {
            "reviewerName": "don,",
            "reviewDate": "Jul 10, 2021",
            "reviewerComment": "\nBest product\nIt seems everything is fine, and it has a good sound system, but I looked up why Windows was saying it needs to be Activated from the HP website, and they said once it is up to date that will go away. That changed nothing. It is up to date and it was just never activated. I don't like the small solid state drive, and it has a place for a second drive, so I am thinking about finding all the drivers and installing normal Windows 10.\n",
            "reviewerRating": {
                "Overall": "4.3",
                "Value": "4.0",
                "Features": "5.0",
                "Quality": "4.0",
                "Performance": "4.0"
            }
        },
        {
            "reviewerName": "AChipps,",
            "reviewDate": "Aug 07, 2020",
            "reviewerComment": "\nWindows 10 Pro Unactivated\nIt seems everything is fine, and it has a good sound system, but I looked up why Windows was saying it needs to be Activated from the HP website, and they said once it is up to date that will go away. That changed nothing. It is up to date and it was just never activated.\nI don't like the small solid state drive, and it has a place for a second drive, so I am thinking about finding all the drivers and installing normal Windows 10.\n",
            "reviewerRating": {
                "Overall": "3.5",
                "Value": "5.0",
                "Features": "1.0",
                "Quality": "4.0",
                "Performance": "4.0"
            }
        }
    ]
}
```



