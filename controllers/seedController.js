var express = require('express');
var router = express.Router();

var Product = require('../models/products.js');


var productInfo = [

    {
        name: "Jersey Sport Jacket",
        image: "/images/jacket.png",
        price: 250,
        description: "Made from a special double-faced jersey that retains its shape and luster, this Pham Thi Dieu Linh sport coat is constructed in an updated slim fit for contemporary style."
    },
    {
        name: "Stretch Linen Blazer",
        image: "/images/jacket2.png",
        price: 76,
        description: "Neat and stylish: Nicole Portantiere's stretch blazer is superbly crafted to span the season, and your range of movement."
    },
    {
        name: "Sheath Dress",
        image: "/images/dress1.png",
        price: 119,
        description: "Icon 54's classic sheath dress is a perfect pick for the office."
    },
    {
        name: "Maxi Slip Dress",
        image: "/images/dress2.png",
        price: 225,
        description: "Pajama chic. This is a floor length slip dress with a v neck by To Uyen. Due to the nature of this fabric, natural imperfections may be found on each garment."
    },
    {
        name: "Grecian Pleated Dress",
        image: "/images/dress3.png",
        price: 158,
        description: "Soft pleats gather at the shoulders and drape beautifully over the body of this dress for a modern look with Grecian-inspired style by NOPIXEL."
    },
    {
        name: "Long Sleeve Tee",
        image: "/images/longSleeves.png",
        price: 25,
        description: "Stylish to the core. This modern-fit long sleeved t-shirt from Pham Thi Dieu Linh is perfect for casual occasions."
    },
    {
        name: "Black Camisole",
        image: "/images/tank.png",
        price: 20,
        description: "Look your best in this camisole from Folio."
    },
    {
        name: "Fitted Tee",
        image: "/images/tee1.png",
        price: 25,
        description: "This all-purpose shirt features a particularly feminine, curve-hugging cut by Monica Gomez."
    },
    {
        name: "Che Guevara Graphic Tee",
        image: "/images/tee2.png",
        price: 45,
        description: "This premium t-shirt is as close to perfect as can be. It will quickly become your favorite t-shirt. Soft, comfortable and durable, this is a definite must-own and a eTrendy recommended product by Kirill Tomilov."
    },
    {
        name: "Brenton Tee",
        image: "/images/tee3.png",
        price: 45,
        description: "Our genuine Breton shirts can be dressed up or down to suit any occasion with that certain ‘Je Ne Sais Quoi’. Top quality cotton meets understated classic French styling to create a wardrobe staple for every member of the family by Kirill Tomilov."
    },
    {
        name: "Button Down Shirt",
        image: "/images/whiteT.png",
        price: 45,
        description: "In a modern slim cut, this Adam Zubin shirt has all the appointments of your favorite button-down but in a breezy short-sleeve style. A closer fit layers well and keeps you looking sharp in any season."
    },
    {
        name: "Black Tee",
        image: "/images/blackT.png",
        price: 25,
        description: "Powerful performance give this sleek Araujo T-shirt workout-to-weekend versatility."
    },
    {
        name: "Reversible Hoodie",
        image: "/images/hoodie2.png",
        price: 45,
        description: "Two looks in one means added versatility. So opt for this reversible zip-front hoodie from H Alberto Gongora."
    },
    {
        name: "Black Hoodie",
        image: "/images/hoodie.png",
        price: 40,
        description: "Keep your casual look cool with the help of this mid-weight zip-up sweatshirt from Steffen Frys."
    },
    {
        name: "Football Jersey",
        image: "/images/jersey1.png",
        price: 50,
        description: "Play it cool and look great with this Lilit football jersey, with printed mesh fabric that takes its athletic style to the next level."
    },
    {
        name: "Hockey Jersey",
        image: "/images/jersey2.png",
        price: 79,
        description: "A playing favorite—Black Kinling presents a sporty jersey look for weekend fun. Crew neck with lace-up trim; Front, back and sleeve plastisol prints."
    },
    {
        name: "Baseball Jersey",
        image: "/images/jersey3.png",
        price: 55,
        description: "Game day at the park just got a whole lot cooler, with the MLB Baseball Jersey by Susnica!"
    },
    {
        name: "Soccer Jersey",
        image: "/images/sportT.png",
        price: 45,
        description: "Clément Payout's traditional horizontal black and white stripes are back."
    },
    {
        name: "Active Jersey",
        image: "/images/sportT2.png",
        price: 50,
        description: "Through every victory or heartbreaking loss, you're a die-hard Impact fan to the end. Celebrate your pride for the team in this men's replica soccer jersey in home colors."
    },
    {
        name: "Twill Pants",
        image: "/images/pants1.png",
        price: 23,
        description: "Anniken & Andreas' Twill Pants offer a clean, smart look and a stretch fit for great comfort and style"
    },
    {
        name: "Crepe Ankle Pants",
        image: "/images/pants2.png",
        price: 55,
        description: "Step into effortless casual appeal with these slim, pull-on pants by Porrat."
    },
    {
        name: "Cotton Shorts",
        image: "/images/shorts1.png",
        price: 45,
        description: "Add superior skate style and comfort to your casual wardrobe with the classic fit and crisp cotton of these shorts from Creativebin."
    },
    {
        name: "Bermuda Shorts",
        image: "/images/shorts2.png",
        price: 45,
        description: "A wide waistband for extra comfort help to make these bermuda shorts from Brandon Lim the perfect style addition to your closet."
    },
    {
        name: "Pleated Flared Skirt",
        image: "/images/skirt1.png",
        price: 65,
        description: "Liven things up with this vibrant flared skirt from Porrat."
    },
    {
        name: "Crepe Wrap Skirt",
        image: "/images/skirt2.png",
        price: 55,
        description: "Sleek lines and silk bow trim define the appeal of this stretch crepe wrap skirt by Hino Naoya."
    },
    {
        name: "Flower Tulle Skirt",
        image: "/images/skirt3.png",
        price: 25,
        description: "Featuring flower details to make her shine as bright as a star, this darling tulle skirt from Anbileru Analeru is perfect for mixing and matching."
    },
    {
        name: "Luck Maylor's",
        image: "/images/chucks.png",
        price: 60,
        description: "Athletes, artists, experimenters, rebels and visionaries have all turned to the vintage, sporty style of the Pumpkin Juice Hi Casual Sneaker shoe. Designed with simplicity and style in mind, these shoes feature a rugged canvas upper that conforms to each foot, plus a durable rubber outsole that can handle whatever your day contains."
    },
    {
        name: "Mr. Sparten's",
        image: "/images/docs.png",
        price: 125,
        description: "Iconic's classic smooth leather is durable and famously stiff to start with; it molds to your feet and the shoe gets more comfortable with wear. Smooth leather can be polished to a dapper shine, or artfully scuffed up, depending on your preference."
    },
    {
        name: "Leather Oxfords",
        image: "/images/oxford.png",
        price: 95,
        description: "Chirag Shah shoe focuses on both comfort and style with the smooth look of these classic bicycle-toe Oxfords."
    },
    {
        name: "Platform Pumps",
        image: "/images/platform.png",
        price: 69,
        description: "Iconic's Parade pump shoe stylishly bring you from the office to a night out with a subtle pointed toe and retro-inspired platform heel."
    },
    {
        name: "Simon Sneakers",
        image: "/images/sneaker.png",
        price: 50,
        description: "The Simon Child was introduced in 1969 as the first low-top basketball sneaker shoe to feature an all-leather upper and the now famous rubber shell toe."
    },
    {
        name: "Chelsea Boots",
        image: "/images/threeQuarter.png",
        price: 100,
        description: "Tread confidently in the bold, burnished style of Okan Benn's Chelsea boot shoe."
    },
    {
        name: "Wedge Booties",
        image: "/images/wedge.png",
        price: 99,
        description: "A chic covered wedge heel shoe and fashion-forward fold-over cuff add a confident finish to jeans and skirts in Okan Benn ankle booties."
    },
    {
        name: "Contrast Blazer",
        image: "/images/blazer1.png",
        price: 119,
        description: "Contrast trim makes Pham Thi Dieu Linh's chic, open-front blazer stand out with stellar style."
    },
    {
        name: "Multipurpose Work Bag",
        image: "/images/bag1.png",
        price: 115,
        description: "Stow your laptop, documents and other essentials in our chic structured work bag by Tito Balsamo. It's finished with metal feet to protect and help keep its shape."
    },
    {
        name: "Leather Tote",
        image: "/images/bag2.png",
        price: 250,
        description: "Chic, function and right on color cue—The Jet Set Medium Tote from Gabrielle Vallim featuring plenty of pockets to keep you organized"
    },
    {
        name: "Black Beat",
        image: "/images/blackBelt.png",
        price: 25,
        description: "From dresses to trousers, add a stylish accent to your ensemble with this icon54 brand belt, featuring a chic metallic finish"
    },
    {
        name: "Reversible Belt",
        image: "/images/whiteBelt.png",
        price: 20,
        description: "Get two stylish casual looks with this leather belt from Fabián Sanabria, reversible to complement many looks"
    },
    {
        name: "Black Baseball Cap",
        image: "/images/blackHat.png",
        price: 25,
        description: "Stay cool and protected whenever you're outside with this signature baseball cap from FR. It's crafted in a soft, performance nylon fabric for that already broken-in feeling and enhanced comfort"
    },
    {
        name: "Teardrop Earrings",
        image: "/images/earrings.png",
        price: 50,
        description: 'Translucent resin teardrops dangle elegantly on a pair of Pham Thi Dieu Linh earrings artfully crafted in sterling silver with Frenchwire hooks. Approximate diameter: 3/8\". Approximate drop: 1-1/2\"'
    },
    {
        name: "Flower Drop Earrings",
        image: "/images/earrings2.png",
        price: 30,
        description: 'Take a shine to the dazzling sparkle of these stunning glass stone flower earrings from H Alberto Gongora. Crafted of 14k mixed metal plated. Approximate drop: 1".'
    },
    {
        name: "Floppy Sun Hat",
        image: "/images/ladiesHat.png",
        price: 35,
        description: "Creative Stall's chic sun hat goes from classy to casual depending on your outfit"
    },
    {
        name: "Black Silk Tie",
        image: "/images/tie1.png",
        price: 35,
        description: "This tie by Norbert de Graaff is made from a cotton, silk blend and features a new-classic mélange pattern"
    },
    {
        name: "Stripped Tie",
        image: "/images/tie2.png",
        price: 35,
        description: "A cool tone offset by a crisp grid pattern defines the refined, modern style by Norbert de Graaff."
    }
];

router.get('/', function(req, res) {
	Product.create(productInfo, function(err) {
		if (err) {
			console.log(err);
			res.send('Error seeding database');
		} else {
			console.log('SEED EXECUTED');
			res.redirect('/') //this is to see the items in json
		}
	});
});



module.exports = router;
