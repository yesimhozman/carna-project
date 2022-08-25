## Getting started

- Recommended `node js 14.x` and `npm 6+`. (suggestion v14.17.3 / v16.15.0)
- Install dependencies: `npm install` / `yarn install`
- Start the project: `npm run start` / `yarn start`

## Template Information
I used this free template from muı: 
Distributed under the MIT License. See [LICENSE](https://github.com/minimal-ui-kit/minimal.free/blob/main/LICENSE.md) for more information.

## what I used?

I used the React.js framework and Material UI. I used the Apex Chart for the chart. I used the React-Router for the routing. I used Jest for the testing. I used the React-Scripts for the development. The important thing is having organized folders and files for other developers. I used Iconify for the icons. I used Simple-Chat-Bot for the chatbot. To provide form validation, I used Yup and Yup resolver. https://github.com/jquense/yup  To create fake data, I used faker js. I used Axios library and your API link to create the dictionary part. 


## About the project

I choosed student app.
In Sidebar, there is a user part with the user name, avatar  and role. Then, there are the categories : dashboard, courses, review, library, register and login. There is an also a button to download the app.
In Navbar, there are search, practice with AI button, dictionary button as a book, language button, notification button,the profile (home-profile-setting-logout) button.
Notifications: Students will see their completed modules and courses. They will see the upcoming exams, events, new messages and new assignments.

I added the animated pedagogical agent in chatbot part. Because it is important for the interaction with learners. 
I put the chatbot button in navbar because it is one of the most important feature of carna. 

Home: 
In dashboard, students will see the progress of the learning with statistics.
There is a leaderboard with the top 5 learners.
There is a news update section with the latest news about courses and assignments.
There is a todo list. 

Courses:
Students can filter the courses by topic, category and rating. 
They can sort the courses as "ongoing" , "all" or "completed".
In cards, there are the level tag (A1,A2,B1,B2), the progress bar, and the image is designed according to the level. (the colors are matched with the level tag).

Review: 
Learners can do review about the courses they have completed.
Learners can review the courses they have completed. They can search on courses and see whether they have completed the course review or not.

Library: 
There are book cards : image about the story, name of the story, author, the statistics about learner behaviors. Students can search on books and see its author, how many people have read, listen and share it. Students can suggest a new book to the library with the bottom at the top-right corner.

Register:
Designed based on figma. Students can register with their name, email, password and confirm password. They can also register with google-facebook-twitter.
Login: 
Designed based on figma. Students can login with their email and password.

ChatBot: There is just a simple chatbot. It is placed in a new page. Students can chat with the bot.

Dictionary: 
It is provided by https://github.com/meetDeveloper/freeDictionaryAPI API. Students can search on the dictionary and see the definition, listen to the audio and check the example sentence.

exercise: 
When any of the continue buttons on the cards in the course page are clicked, the exercise page will open.
