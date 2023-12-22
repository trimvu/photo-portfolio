# Tri Vu's Personal Photography Portfolio

## Table of Contents

* [Title](https://github.com/trimvu/photo-portfolio#tri-vus-personal-photography-portfolio)
* [Live Demo](https://github.com/trimvu/photo-portfolio#live-demo)
* [About](https://github.com/trimvu/photo-portfolio#about)
* [Technology Stack](https://github.com/trimvu/photo-portfolio#technology-stack)
* [MVP (Minimum Viable Product)](https://github.com/trimvu/photo-portfolio#mvp-minimum-viable-product)
* [Stretch Goals](https://github.com/trimvu/photo-portfolio#completed-stretch-goals)
* [Potential Future Goal](https://github.com/trimvu/photo-portfolio#potential-future-goal)
* [Developer](https://github.com/trimvu/photo-portfolio#developer)

## Live Demo

[https://tri-vu-photography.vercel.app/Japan2019](https://tri-vu-photography.vercel.app/Japan2019)

## About

This Magic: The Gathering (MTG) Price Tracking website is a site that gives users the ability to track the price of Magic: The Gathering cards. Users can register and log in to their personal accounts with an authentication process. Once the user has access into the website, they are greeted to their 'Profile' page, where their name is displayed along with three buttons; a button to edit their name, a button to change their password, and a button to delete the account if they wish to do so.

On the top left of the navigation bar, users are presented with four options: the website's name and 'Home' button, the 'Profile' button, the 'Collection' button, and the 'Log Out' button. Clicking on the website's name or the 'Home' button will direct users to a page with instruction on how to use the website.

When the user click on the 'Collection' button, they have the ability to create lists, view the lists they have created, update the name of lists, and delete any lists the user wants. Users can use the search feature on the top right corner of the navigation bar which will generate a list of cards from the Scryfall API that contain the word or words that were inputted by the user. Alternatively, users can click on the random button to return a random card. 

Once a card is clicked on, users have the ability to add cards to their lists (if they have already created at least one). When viewing the list of cards in a chosen list, users can view all the cards they added to the list, along with the name of the list, and the total cost of the cards in the list. When hovering over the name of the card, a preview image will appear next to the card's name. Here, users can edit the quantity of the card(s) and delete the card(s). 

Clicking on the 'Log Out' button will direct the user back to the 'Log In and Registration' page.

## Technology Stack

* React
* JavaScript
* Jest
* HTML5
* CSS3

## MVP (Minimum Viable Product)

* Register, log in, and log out with authentication
* Generating data from Scryfall's Magic: The Gathering API to populate the contents of the pages and my database
* Create lists, view all lists created by user, update list name, and delete list
* Add cards to lists, view cards in a given list, update the quantity of a card, and deleting a card from the list
* View the list of cards of the user's input
* Automatically updating the price of the cards in the database 
* Formatting the project to properly fit on a 1440p monitor
* A moderately appealing user interface

## Completed Stretch Goals

* Updating the user's name, updating the user's password with encryption, and deleting the user
* A landing page (the home page) that gives users instructions, along with images, on how to use the website
* A 'random button' that generates a random card
* The ability to hover over a card and view a preview image of the card
* A button that allows the user to 'flip' the card if the card has more than one side
* The user log in and registration on one page with conditional rendering to switch between components
* MaKe the project mobile responsive

## Potential Future Goal

* Rework my database (specifically the cards' table) to allow users to view and add more specific cards of a certain set
* Format the project so that it fits properly on monitors with 720p and 1080p resolution

## Developer

Tri - [LinkedIn](https://www.linkedin.com/in/tri-minh-vu/) - [GitHub](https://github.com/trimvu) - [Portfolio](https://tri-vu-dev.netlify.app/)