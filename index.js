const express = require("express");
const path = require('path');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine','ejs');

app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 3000;

app.get('/',(req,res)=>{
    res.render("index", {
        navItems: [
            {
                itemName: "Home",
                itemLink: "/"
            },
            {
                itemName: "Grooming",
                itemLink: "/grooming"
            }
        ],
        title: 'Pets R Us',
        description: "Pets- R-Us has been an the goto place for the metro area for years.  We special;ize in aopdtion services and pet goods.  We are looking to expand as a store and company to incl;ude grooming services, training, and doarding services.  All of our groomers and trainers are board certified and collectively have over 20 years of experience.  We strive to have our customers satisified and our pets happy.  Our grooming services will include hair cuts and shower services.  Our training services will include both private classes and 8 week courses that start from beginner to intermediate and finally advance classes.  We have an 100% refund policy if a customer is not satisfied with the grooming or training services and an 50% refund policy on boarding services if you feel your pet didn't come out feeling satisfied.  With Pets-R-Us your pet will be taken care of and loved.",
        heroImage: "images/panda.png",
        locationHeading: "Our location is located in Midtown",
        locationAddressOne: "1945 Billings Way",
        locationAddressTwo: "Omaha, Nebraska 68164",
        locationAddressThree: "United States",
        locationHoursHeading: "Location Hours",
        locationHours: ["Monday: 8AM - 8PM", "Tuesday: 8AM - 8PM", "Wednesday: 8AM - 8PM", "Thursday: 8AM - 8PM", "Friday: 8AM - 8PM", "Saturday: 8AM - 6PM", "Sunday: Closed"],
        dogHeading: "Dog of the Week",
        dogName: "Storm",
        dogDescription: "Golden Retriever",
        testimonialsHeading: "What people are saying about us",
        testiomonials: [
            {
                review: "Used Pets-R-Us training services and our little guy is now potty trained and doing basic tricks, highly recommend.",
                author: "Samuel"
            },
            {
                review: "Used the grooming services for our British Bulldawg and he came out feeling flluffy and happy",
                author: "Kris"
            },
            {
                review: "Used the borarding services and my dog, a Husky, came out happy and refreshed.",
                author: "George"
            }
        ],
        contactHeading: "Contact us"
    })
})

app.get('/grooming',(req,res)=>{
    res.render("grooming", {
        navItems: [
            {
                itemName: "Home",
                itemLink: "/"
            },
            {
                itemName: "Grooming",
                itemLink: "/grooming"
            }
        ], 
        title: "Grooming",
        description: "At Pets-R-Us we take grooming seriously.  We understand that every pet is unique with unique wants and experiences.  We also pride ourselves on achieving the best outcome for every customer so both the pet and customer leave satisified and happy.  We offer an arrange of hair cutting and showering services for pets.  From basic to premiere packages each package comes with the option for specialty requests.  All of our groomers are board certified and have years of experience with grooming pets.  No matter the tpye of dog or cat we will with each customer and pet to deliver it is what you and your loved pet are looking for.  ",
        heroImage: "images/panda.png",
        servicesList: [
            {
                packageName: "Basic",
                price: "29",
                servicesName: [ "Monthly shower", "Bi-monthly haircut", "Special request available"]
            },
            {
                packageName: "Standard",
                price: "55",
                servicesName: [ "Two showers a month", "Monthly haircut", "Special request available"]
            },
            {
                packageName: "Premium",
                price: "100",
                servicesName: [ "Weekly showers", "Two haircuts a month", "Special request available"]
            }
        ]
           
    })
})
app.listen(PORT, () => {
    console.log('Application started and listening on PORT ' + PORT);
});