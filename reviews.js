const customerReview = [{
        picture: "./images/client-1.jpg",
        name: "Robenson",
        review: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock"
    },

    {
        picture: "./images/client-2.jpg",
        name: "Handeson",
        review: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable."
    },

    {
        picture: "./images/client-3.jpg",
        name: "Zigla",
        review: "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text."
    },

    {
        picture: "./images/client-4.jpg",
        name: "Isabella",
        review: "Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },

    {
        picture: "./images/client-5.jpg",
        name: "Movic",
        review: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable."
    },

    {
        picture: "./images/client-6.jpg",
        name: "Ayockson",
        review: "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text."
    },

    {
        picture: "./images/client-7.jpg",
        name: "Bencason",
        review: "Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
        picture: "./images/client-8.jpg",
        name: "Nightbirde",
        review: "Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },


]

let counter = 0;

const clientImage = document.querySelector('.client-image');
const clientText = document.querySelector('.client-text');
const clientName = document.querySelector('.client-name');

setInterval(customersReviews, 3000);

function customersReviews() {
    counter++;
    if (counter > customerReview.length - 1) {
        counter = 0;
    }
    clientImage.src = customerReview[counter].picture;
    clientName.textContent = customerReview[counter].name;
    clientText.textContent = customerReview[counter].review;
}