const express = require('express')
const router = express.Router()

router.get('/users', (req, res) => {
    const userData= [
            {"id": 1,
            "image": "IMG1",
            "title": "Crypto Currency Dashboard & Financial Visualization",
               "github": "https://github.com",
               "demo": "https://dribbble.com/shots/16673715-Crypto-currency-dashboards-and-financial-data-visualization"  
           },
           {   "id": 2,
               "image": "IMG2",
               "title": "Crypto Currency Dashboard & Financial Visualization",
               "github": "https://github.com",
               "demo": "https://dribbble.com/shots/16673715-Crypto-currency-dashboards-and-financial-data-visualization"  
              },
              {"id": 3,
               "image": "IMG3",
               "title": "Crypto Currency Dashboard & Financial Visualization",
               "github": "https://github.com",
               "demo": "https://dribbble.com/shots/16673715-Crypto-currency-dashboards-and-financial-data-visualization"  
              },
              
        
    ]

    res.send(userData)
})

module.exports = router