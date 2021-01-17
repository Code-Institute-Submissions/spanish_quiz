<h1 align="center">
  <a href="https://donnaib.github.io/spanish_quiz/">Spanish Quiz</a>
</h1>

![Spanish Quiz](documentation/additional_images/quiz_multi_device_view.png)

[View Spanish Quiz in GitHub Pages](https://donnaib.github.io/spanish_quiz/)


*Note: This is an extention to the fictional organisation created for my Code Institute milestone one project.*

## Introduction
The organisers of Dublin Intercambio wanted to create an additional learning resource for the people that attend their language
exchanges.  They know that building vocabulary is a key element to improving your fluency of the language. They have created a bank of 
questions based on converstaions they have with the language exchange participants, when they overhear participants commenting on a new
word they have learned as well as adding their own interestings words or phrases that you won't find in a text book.

## Scope 

Create a simple, intuitive, and responsive website that hosts a quiz to help their participants learn and provided another way to advertise their intercambio events. 

The site should be no more than 4 pages with the focus being the quiz to provide a simple, fun and intuative to use, language learning tool.  

The structure should adhere to convetion and be simple and intuitive, ensuring the user always knows where they are, how they got there and how to get back to 
where they started.

The design should be similar to the Dublin Intercambio website, utilising the same colour palette, however as the focus is the quiz there will be no images used in this site, this will help to
focus the users attention in the questions and answers.

Any addition features or functionaly are out of scope at this stage.

User goals:
* To enhance their Spanish vocabulary
* To find out how to take part in a language exchange
* To improve their language skills

Website owers goals:
* To create a fun and interactive quiz with no errors
* To provide a free learning tool to their intercambio attendees and the wider public
* To provide a way for users to interact with the organisers
* To use the free quiz to further advertise their intercambio events
 
## UX

#### User stories

##### A typical user of this site would:
* Have an interest in improving their level of Spanish
* 
* 

##### This project is the best way to help them achieve these things because:
* The vocabulary and frases used in this quiz are based on real conversations that happen in our intercambios instead of the standard vocabulary you find in text books.
* Users can submit their own suggestions for words or questions to add to the question bank, interesting words they recently learned, or interesting frases.
* The Spanish Quiz website:
    * Is easy to navigate.
    * Is part of the Dublin Intercambio community and as such has a warm, friendly and inviting feel to it.
    * Ensures the important information is easy to find and access.
    * Encourages users to attend the events and get involved.

##### User stories
1. As a new visitor to the website, I want to understand how to take part in the quiz.
2. As a new visitor to the website, I learn some new Spanish vocabulary.
3. As a new visitor to the website, I want to find out more about the Dublin Intercambio community.
4. As a returning visitor to the website, I was to practise vocabulary and learn new vocabulary.
5. As a returning visitor to the website, I was to suggest new questions to help others in the language exchange community.



### Design (Wireframes and Mockups): 
With this site, I wanted to keep the design very simple, and create a connection with the [Dublin Intercambio](https://donnaib.github.io/dublin_intercambio/) site by utilising the same color pallete.
As I always like to do I began the process of creating wireframes with good old fashioned pen and paper to get a very rough skeleton of the site based on the best layout for the required functionality.

With a basic sketch created I moved to Balsamiq to create more detailed Wireframes for the site. 

### Wireframes

#### Mobile View
![Mobile wireframe](documentation/wireframes/mobile_wireframes.png)

#### Larger Screen View
![Larger Screen wireframe](documentation/wireframes/larger_screen_wireframes.png)

As with my previous project I was very aware that working with yellow in the colour pallete can be problematic. However, as before I was careful to utlize the color in a way that added to the design of the site, but didn't not compromise the accessibility of the site.

## Features

### Pages 

##### Home
As the quiz is the main feature of this site, the home page features an introduction to the quiz and allows users to get start right away with the quiz thanks to a prominent 'Start' button.  

The brief introduction on this page is design to be short and informative. Providing enough information for the users to understant the background, the purpose, and the structure of the quiz, but not too much, that a potential user becomes bored and navigates away from the quiz.

Each time a user plays the quiz, they are give 5 questions, chosen at random from the question bank. They are given a question and are presented with 4 possible answers.

The yellow, green and red from the colour pallete are integral in this page. The yellow is the starting, neutral background, that then changes to either red or green depending on whither the user answers the questions correctly.  This provides fun, visual, and instance feedback to the user on their progress throughout the quiz.  

There is also a score counter in the top right hand corner of the quiz container that counts the users score and they progress. Once a user has completed the quiz, a pop up appears giving the users the option to restart the quiz or save their score (using local storage).

The quiz is response and the layout of the questions and answers adapts different screen sizes.

##### About
The about page establishes the link between this quiz site and the sister Dublin Intercambio site. It tells the story of how this site came about, provides links to the sister site for further information about the language exchanges and also explains to the user how they can help build upon the quiz by submitting suggestions for words of phrases, with a link to the contact page when the use can submit a suggestion using the contact form.

##### Add Name (hidden page)
The page is hidden and doesn't feature in the navigation, this page is visible when a users clicks on the Save Score button that appears in the modal once a user has completed the quiz. 

This page features a form, to allow the user to enter then name to enable their score to be recorded on the Scores page.

##### Scores
The scores page allows users to view their recent scores using local storage. This page initially displays two buttons, providing the user the option to either play the quiz again or to view recent scores.  If the user chooses to view recent score, the buttons are hidden and recents scores are displayed, showing the username that the user entered and their score.

##### Contact
