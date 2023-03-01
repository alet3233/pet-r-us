/***************************************************************************************
*   Title: Week 5-Node.js
*    Author: Alex Thomas
*    Date: 02/1/2023
*   Source Code Attribution: EJS
*   URL: https://ejs.co/
*   Source Code Attribution: Partials
*   URL: https://stackoverflow.com/questions/5404830/node-js-ejs-including-a-partial
*   Source Code Attribution: Week 5 instructions
*   Source Code Attribution: Pet-R-Us 5 instructions
***************************************************************************************/

// importing express and path
const express = require("express");
const mongoose = require("mongoose")
const path = require('path');
const Customer = require('./models/customer');
const Appointment = require('./models/appointment');
const fs = require('fs');

// initializing the express app
const app = express();

// setting up path for EJS views
app.set('views', path.join(__dirname, 'views'));
// setting the views engine to ejs
app.set('view engine', 'ejs');
// setting up express url encode
app.use(express.urlencoded({ extended: true }));
// setting up application type to be JSON
app.use(express.json());

//using public folder for express other static files
app.use(express.static(path.join(__dirname, 'public')));
const CONN = 'mongodb+srv://alet3233:12345@cluster0.ajyynlh.mongodb.net/web340DB'
// setting up the port where the express app will run
const PORT = process.env.PORT || 3000;
mongoose.connect(CONN).then(() => {
    console.log('Connection to MongoDB database was successful\n  If you see this message it means you were able to connect to your MongoDB Atlas cluster');
}).catch(err => {
    console.log('MongoDB Error: ' + err.message);
})

// taking the resuable items as global variables
let navItems = [
    {
        itemName: "Home",
        itemLink: "/"
    },
    {
        itemName: "Grooming",
        itemLink: "/grooming"
    },
    {
        itemName: "Boarding",
        itemLink: "/boarding"
    },
    {
        itemName: "Training",
        itemLink: "/training"
    },
    {
        itemName: "Register",
        itemLink: "/register"
    },
    {
        itemName: "Customers",
        itemLink: "/customers"
    },
    {
        itemName: "Booking",
        itemLink: "/booking"
    },
    {
        itemName: "My appointments",
        itemLink: "/my-appointments"
    }
]
let homeData = {
    navItems,
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
}

// setting up route for index page and passing the relevant data to the index file
app.get('/', (req, res) => {
    res.render("index", homeData)
})

// setting up route for grooming page and passing the relevant data to the grooming file
app.get('/grooming', (req, res) => {
    res.render("grooming", {
        navItems,
        title: "Grooming",
        description: "At Pets-R-Us we take grooming seriously.  We understand that every pet is unique with unique wants and experiences.  We also pride ourselves on achieving the best outcome for every customer so both the pet and customer leave satisified and happy.  We offer an arrange of hair cutting and showering services for pets.  From basic to premiere packages each package comes with the option for specialty requests.  All of our groomers are board certified and have years of experience with grooming pets.  No matter the tpye of dog or cat we will with each customer and pet to deliver it is what you and your loved pet are looking for.  ",
        servicesList: [
            {
                packageName: "Basic",
                price: "29",
                servicesName: ["Monthly shower", "Bi-monthly haircut", "Special request available"]
            },
            {
                packageName: "Standard",
                price: "55",
                servicesName: ["Two showers a month", "Monthly haircut", "Special request available"]
            },
            {
                packageName: "Premium",
                price: "100",
                servicesName: ["Weekly showers", "Two haircuts a month", "Special request available"]
            }
        ]

    })
})

// setting up route for training page and passing the relevant data to the training file
app.get('/training', (req, res) => {
    res.render("training", {
        navItems,
        title: "Training",
        description: "At Pets-R-Us we take pride in seeing pets learn new tricks and become the type of pet their owner wants them to be.  Whether you want your pet to learn to fetch, roll over, or become potty trained we have trainers with multiple decades of experience that can teach your loved one to reach the potential it can.  Our trainers have worked with all sort of dog and cat breeds and have over 20 plus years of collective experience.  We also specialize in teaching dogs tricks that would qualify them for shows.  We take an individualize approached to our training based on age, breed, temperament, personality and other aspects to come up with a plan of action for your pet to reach its full potential.  We understand each pet is a loved one and we take pride in our care of your pet in helping it grow into the type of pet the owner envisions.   ",
        heroImage: "images/panda.png",
        trainerName: "Chris",
        trainerDescription: "Chris is board national board certified with over a decade of experience",
        dogTrainingImage: "images/panda.png",
        servicesList: [
            {
                packageName: "Basic Tier",
                servicesName: ["Basic Training 25$ per classx"]
            },
            {
                packageName: "Standard Tier",
                servicesName: ["Standard training 35$ per class"]
            },
            {
                packageName: "Premium Tier",
                servicesName: ["Premium Training 50$ per class"]
            }
        ]

    })
})

// setting up route for boarding page and passing the relevant data to the boarding file
app.get('/boarding', (req, res) => {
    res.render("boarding", {
        navItems,
        title: 'Pets R Us',
        description: "At Pets-R-Us we take serious care of every pet that boards with us.  When you go on vacation or need to leave your pet for a period of time you don’t want any stress or concern about your pet.  With our boarding services each pet will receive individualized care based on their needs.  Each pet will have daily activities to keep them active and exercising.  Each will receive any individualized care they need whether it be medicine they need to take or special diets they need to maintain while you are away.  All of our boarding and activity rooms have 24/7 cameras so every customer can check up on their loved one at any time of day.  The pets in our care will receive 24/7 supervison as we have employees working at all hours of the morning, day, and night.  We take pride in having each pet being looked after and having all their needs met and that what your pet will get when boarding with Pets-R-Us.  ",
        heroImage: "images/panda.png",
        boardingItems: ["1 dog up to 2 nights: $40/night", "2 dog up to 2 nights: $30/night", "3 dog up to 2 nights: $20/night", "4 dog up to 2 nights: $10/night"],
        boardingHeading: "Our Boarding",
        boardingDescription: "Our boarding offers a safe and secure environment for dogs while their owners are away."
    })
})

// setting up route for register page and passing the relevant data to the register file
app.get('/register', (req, res) => {
    res.render('register', {
        navItems,
        title: 'Register',

    })
})

// setting up route for customers page and passing the relevant data to the customer file
app.get('/customers', (req, res) => {
    // using mongoose find method to fidn all the customers from MongoDB and passing them to customers-list page.
    Customer.find({}, function (err, customers) {
        if (err) {
            console.log(err);
            next(err);
        } else {
            res.render('customer-list', {
                navItems,
                title: 'Pets R Us',
                description: "At Pets-R-Us we take serious care of every pet that boards with us.  When you go on vacation or need to leave your pet for a period of time you don’t want any stress or concern about your pet.  With our boarding services each pet will receive individualized care based on their needs.  Each pet will have daily activities to keep them active and exercising.  Each will receive any individualized care they need whether it be medicine they need to take or special diets they need to maintain while you are away.  All of our boarding and activity rooms have 24/7 cameras so every customer can check up on their loved one at any time of day.  The pets in our care will receive 24/7 supervison as we have employees working at all hours of the morning, day, and night.  We take pride in having each pet being looked after and having all their needs met and that what your pet will get when boarding with Pets-R-Us.  ",
                customers: customers
            })
        }
    })

       
})

// handling the post rqequest
app.post('/register', (req, res, next) => {
    // creating a new user by validating it against the CUstomer schema
    const newCustomer = new Customer({
        customerId: req.body.customerId,
        email: req.body.email,
    })

    // creating a new customer to mongoDB
    Customer.create(newCustomer, function (err, customer) {
        if (err) {
            console.log(err);
            next(err);
        } else {
            res.render('index', homeData)
        }
    })
})

app.get('/booking', (req, res) => {
    let jsonFile = fs.readFileSync('./public/data/services.json');
    let services = JSON.parse(jsonFile);

    console.log(services);

    res.render('booking', {
        navItems,
        title: 'Pets R Us',
        description: "At Pets-R-Us we take serious care of every pet that boards with us.  When you go on vacation or need to leave your pet for a period of time you don’t want any stress or concern about your pet.  With our boarding services each pet will receive individualized care based on their needs.  Each pet will have daily activities to keep them active and exercising.  Each will receive any individualized care they need whether it be medicine they need to take or special diets they need to maintain while you are away.  All of our boarding and activity rooms have 24/7 cameras so every customer can check up on their loved one at any time of day.  The pets in our care will receive 24/7 supervison as we have employees working at all hours of the morning, day, and night.  We take pride in having each pet being looked after and having all their needs met and that what your pet will get when boarding with Pets-R-Us.  ",
        services: services
    })
})

app.post('/booking', (req, res, next) => {
    console.log(req.body)
    const newAppointment = new Appointment({
        username: req.body.username,
        email: req.body.email,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        service: req.body.service,
    })

    Appointment.create(newAppointment, function(err, appointment) {
        if (err) {
            console.log(err);
            next(err);
        } else {
            res.render('index', homeData)
        }
    })
})

app.get('/my-appointments', (req, res) => {
    res.render('my-appointments', {
        navItems,
        title: 'Pets R Us',
        description: "At Pets-R-Us we take serious care of every pet that boards with us.  When you go on vacation or need to leave your pet for a period of time you don’t want any stress or concern about your pet.  With our boarding services each pet will receive individualized care based on their needs.  Each pet will have daily activities to keep them active and exercising.  Each will receive any individualized care they need whether it be medicine they need to take or special diets they need to maintain while you are away.  All of our boarding and activity rooms have 24/7 cameras so every customer can check up on their loved one at any time of day.  The pets in our care will receive 24/7 supervison as we have employees working at all hours of the morning, day, and night.  We take pride in having each pet being looked after and having all their needs met and that what your pet will get when boarding with Pets-R-Us.  ",
    })
})

app.get('/api/appointments/:email', async(req, res, next) => {
    Appointment.find({'email': req.params.email}, function(err, email) {
        if (err) {
            console.log(err);
            next(err);
        } else {
            res.json(email);
        }
    })
})


// running the app on the port which we set up earlier.
app.listen(PORT, () => {
    console.log('Application started and listening on PORT ' + PORT);
});