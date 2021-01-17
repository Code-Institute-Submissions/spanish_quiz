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

The quiz is response and the layout of the questions and answers adapts to different screen sizes.

##### About
The about page establishes the link between this quiz site and the sister Dublin Intercambio site. It tells the story of how this site came about, provides links to the sister site for further information about the language exchanges and also explains to the user how they can help build upon the quiz by submitting suggestions for words of phrases, with a link to the contact page when the use can submit a suggestion using the contact form.

##### Add Name (hidden page)
The page is hidden and doesn't feature in the navigation, this page is visible when a users clicks on the Save Score button that appears in the modal once a user has completed the quiz. 

This page features a form, to allow the user to enter then name to enable their score to be recorded on the Scores page.

##### Scores
The scores page allows users to view their recent scores using local storage. This page initially displays two buttons, providing the user the option to either play the quiz again or to view recent scores.  If the user chooses to view recent score, the buttons are hidden and recents scores are displayed, showing the username that the user entered and their score.

##### Contact
The contact pages features map, courtesy of google maps zoomed in to the area wiht Dublin Intercambio (parent organisation) is situated, and has markers added to show the location of Dublin INtercambio HQ (fictional) and where the Dublin Intercambio language exchange events take place.

The page aslo features a contact form, to allow users to contact the website owners. The contact form is connected to the wesite owners GMail account using Email JS, meaning they will receive an email each time someone submits a form.

The form fields have validation added to ensure all fields are completed and have the correct type of data entered.  In additional there is confirmation alert to visually show the user that the form has been successfully submited and a fall back error message asking the user to try again later should the form fail to submit for some reason.

### Site Features 
Every page on this site also incorporates the following features:
* A logo in the top left hand corner, that not only forms part of the branding and design of the site but also as is consitant with a users expectations, clicking the logo will return the user to the 
home page fo the site.
* A responsive, collapsible navigation bar, allowing users to easily navigate the site on any device.
* A responsive footer with social media links. allowing users to easily connect with Dublin Intercambio (parent organisation) via social media. Each link opens in a new tab.

### Possible Features to Implement in Future
- Adding users scores to a database to allow some friendly competition between users.
- Adding GDPR compliant Privacy and Cookie polices.

## Technologies Used for building this site
- This project uses HTML, CSS and JavaScript programming languages.
- Gitpod was used an the IDE for building the site.
- **Bootstrap4** was used to assist with the structure, responsiveness and browswer compatibility of the site. 
- BootstrapCDN was used to provide icons from **Font Awesome**. 
- **Google fonts** was used to style the website fonts.
- **jQuery** to reference Javascript needed for the responsive navbar.
- **Popper.js** reference Javascript needed for the responsive navbar.
- **EmailJS** to connect the contact form to wesite owners Gmail account.

## Testing

I tested the site in the following ways:

1. Initially I used the inspector tool to test the site in all the screen sizes and devices available in the Chrome developer tool.  In addition to this I also tested it on live devices, including but not limted to iPhone, iPad, MacBook Pro, MotoG7. 

2. I also tested my code using the validator tools for both my HTML [W3C HTML Validator Tool](https://validator.w3.org/), CSS [W3C CSS Validator Tool](https://validator.w3.org/) and [JSHint](https://jshint.com/) Running my code through these tools highlighted a few issues with syntax which were fixed at the time and pushed as bug fixes.

Screen shots of the validator results can be viewed below, as you can see there were no errors detected.

![HTML Validation Report - Index](documentation/validation/validator_index.png)
![HTML Validation Report - About](documentation/validation/validator_about.png)
![HTML Validation Report - Scores](documentation/validation/validator_scores.png)
![HTML Validation Report - Add Name](documentation/validation/validator_addName.png)
![HTML Validation Report - Contact](documentation/validation/validator_contact.png)
![CSS Validation Report](documentation/validation/validator_css.png)






## Deployment

To deploy this page to GitHub Pages from its [GitHub repository](https://donnaib.github.io/spanish_quiz/), the following steps were taken: 
1. Log into GitHub. 
2. From the list of repositories on the screen, select 
3. From the menu items near the top of the page, select **Settings**.
4. Scroll down to the **GitHub Pages** section.
5. Under **Source** click the drop-down menu labelled **None** and select **Master Branch**
6. On selecting Master Branch the page is automatically refreshed, the website is now deployed. 
7. Scroll back down to the **GitHub Pages** section to retrieve the link to the deployed website.

At the time of submission, the Development Branch and Master Branch were identical. 

### How to run this project locally
To clone this project from GitHub:
1. Follow this link to the [Project GitHub repository](https://donnaib.github.io/spanish_quiz/).
2. Under the repository name, click 'Code'

!['Code button'](documentation/additional_images/code_button.jpg)

3. In the Clone with HTTPs section, copy the clone URL for the repository. 
4. In your local IDE open Git Bash.
5. Change the current working directory to the location where you want the cloned directory to be made.
6. Type ```git clone```, and then paste the URL you copied in Step 3.
```console
git clone https://github.com/DonnaIB/spanish_quiz.git
```
7. Hit enter and your local clone will be created.

## Credits

### Content
The content of the site was written by myself and inspired by my Ms1 fictional project.

### Code
- Code for my navigation was adapted from my Ms1 project which in turn was adapted and customised from a code snippet found in the Bootstrap documentation.
- Code for my footer was adapted from my Ms1 project. 
- Code for the contact form taken from my Ms1 project and adapted and enhanced for this project.
* I watched a number of JavaScript quiz youtube videos in preparation for this project including the following [How to Make a Quiz App using HTML CSS Javascript](https://www.youtube.com/watch?v=f4fB9Xg2JEY) which the code for my Scores and Add Name pages were based on.

### Acknowledgements
* My color scheme for this site was based on the colors in the Spanish flag and I used a colour scheme from [Scheme Color](https://www.schemecolor.com/spain-flag-colors.php), the specific color combination was created by user Keshav Naidu.

* Thank you to Tim Nelson and Eamonn Smyth in the Slack community for helping me with problem in my score.js file.
* I refered my previous README file which was influenced by AJ Greave's sample README as well as the Code Institute sample to help structure this README file.
* A final thank to my mentor Aaron Sinnott who has advised and guided me through this milestone 2 project.
