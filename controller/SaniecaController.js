const m ={
    main:(req, res) =>{
       res.render('main', {title:' Salon'});
      
    },
    eyebrows:(req, res) =>{
        res.render('eyebrows', {title:' eyebrows'});
    
    },
    eyelash:(req, res) =>{
        res.render('eyelash', {title:' eyelash'});
     
    },
    hairtreatment:(req, res) =>{
        res.render('hairtreatment', {title:' hairtreatment'});

     
    },
    nails:(req, res) =>{
        res.render('nails', {title:' nails'});
    }
};
module.exports = m;