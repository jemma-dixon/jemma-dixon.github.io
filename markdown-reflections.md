# My Reflections - Sprint One 

In addition to the challenge specific reflections, answer the following questions:

# Command Line Primer 

<!-- Copy the answers you wrote in your temporary file earlier, under the sections below -->

### In a couple of sentences, how would you describe the command line in plain English? Can you think of an analogy for it?
- The terminal is just related to using a tool on your computer.
- When I say terminal, I'm referring to some text-based prompt where I can interact with my machine through text.

- **Command Line:** The computer program we use to input Git commands. On a Mac, it’s called Terminal. On a PC, it’s a non-native program that you download when you download Git for the first time (we’ll do that in the next section). In both cases, you type text-based commands, known as prompts, into the screen, instead of using a mouse.

**Definitions:**

1. **Command Line Interface (CLI):** For running commands on your computer.
2. **Terminal:** A Text-based interface to your computer. Originally an object, but now we use software terminals. (Analogy: Terminal = ATM)
3. **Shell:** The program/ the software that runs on the terminal. (Analogy: Shell = Software running on the ATM to make it work). The terminal has different shells that it can run.
- The terminal is a text interface. Think of a hacker scene in a movie.
- It allows you to do stuff you can already do. You can make a folder and save three files inside of it. i.e. html, css, and JS.
- The GUI allows us to do this in an easier, more accessible way.
- The terminal provides a "mainline" into the heart of our computer, giving us access to areas we normally don't interact with. It's not recommended to paste commands from the internet as you could accidentally erase some important stuff.
- We can view hidden files, things that won't show up to your average user if they're navigating using a graphical user interface.



### Did you stick to the timebox guidelines? If not, what change would you make next time?

I spent three days trying to figure out how to git push. It ended up being a problem related to creating an SSH key for authentication. I even spoke with a friend who has been a software engineer for the past five years, and she wasn't sure why I wasn't able to commit to Git. We both think it's related to needing to set up authentication. Today, Wednesday, I'm strictly covering the timebox material to reduce stress and to see if I can find some answers within the provided material. My instructor is sick, too. We were scheduled to meet today, so fingers crossed this can happen. Update: Joseph helped me set up the correct SSH key! Yay!

### Name 5 commands you used, and what they do

1. **LS - List** 
- List - Use ls to list the contents of your current directory. Anytime you type ~ it will reference your home directory.
2. **PW - Print Working Directory**
- Prints the path to the working directory (where you currently are). It's like a compass, it will tell you where you already are. If I want to know where I am specifically - PWD - that's the full path to where I currently am.
3. **CD** / - **Change Directory: Absolute path**
- This takes you to the root directory. Any path that begins with a slash is absolute. Everything is nested inside the root directory.
4. **CD ~ Change Directory: Relative path**
- This takes you to your home directory.
5. **MKDIR - Make Directory**
- This creates a new directory (or directories). I.e., you can make a new folder called Cats. Then another folder called Kittens. E.g.:
- mkdir Cats
- ls
- mkdir Kittens
- ls

# Install and Explore Git 

<!-- Copy your reflection answers into this file -->

### Whats the difference between git and GitHub?

Git is a version control software that allows groups of people to work together on the same code, at the same time, without overwriting each other's work. It is not a programming language like JavaScript, or Ruby, or C#. It is software that you download - and programmers use a form of 'distributed version control', which means it manages changes to a project without overwriting any part of the project. Version control enables web developers to collaborate without writing over each other's work, and it provides an entire history of changes.

1.  **Understand what Git is**

> *The most widely used Version Control Software is called Git*

2. **Understand what GitHub is**

> *GitHub is a company that provides file hosting online*

- For easy access and collaboration, web developers use GitHub (the largest code host on the planet) for storing and sharing code.

So to conclude, **Git is a (software) tool** that you download while **GitHub is a service** that you sign up to.



### Can you think of an analogy to describe them?

- Like snapping a photo of a board game. Each picture is a 'save-point.' This is what version control does. You have the freedom to change anything about your project. The project is tracked with version control.
- So a Version Control System is just software that helps you control (or manage) the different versions...of something (typically source code).
- the *centralized model* - all users connect to a central, master repository
- the *distributed model* - each user has the entire repository on their computer (i.e., Git).

**Recap**

- Remember that the main point of a version control system is to help you maintain a detailed history of the project as well as the ability to work on different versions of it. Having a detailed history of a project is important because it lets you see the progress of the project over time. If needed, you can also jump back to any point in the project to recover data or files.

### What did you notice about your own learning? What did you do when you were confused or blocked?
1. Read affirmations for cultivating a growth mindset. 
2. Ask for help.
3. Google for solutions.
4. Keep searching for alternative, simple solutions.


### Is there anything you'd do differently if you were to repeat the learning exploration again?

1. Have my authentication set up earlier. 
2. Focus on finishing the requirements faster, and then return for greater breadth of understanding.


# Branch, Pull, Merge

<!-- Copy your reflection answers into this file -->

### What is main?
All new source code repositories created on GitHub will be named "main" instead of "master" as part of the company's effort to remove unnecessary references to slavery and replace them with more inclusive terms.


### Why create a Branch?

git branch - Working with multiple collaborators and want to make changes on your own? This command will let you build a new branch, or timeline of commits, of changes and file additions that are completely your own. Your title goes after the command. If you wanted a new branch called “cats” you’d type git branch cats.

### How would you describe stage and commit to your non-tech-savvy friend?  
[See image](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/8d375d68-480f-4fc6-a7ff-3e7f8cdb88ec/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210904%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210904T002718Z&X-Amz-Expires=86400&X-Amz-Signature=d120ef0d1a5b1f6b2c801978ae13d1ca9ece39fa69a2f216d02ea0b4a3cbfde1&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22) 



# GitHub Fork & Clone

<!-- Answer the following questions -->

### What are some examples of when you would fork?

A fork is a copy of a repository. Forking a repository allows you to freely experiment with changes without affecting the original project. Most commonly, forks are used to either propose changes to someone else's project or to use someone else's project as a starting point for your own idea.


### Did you have any moments where it all clicked? What clicked?

Only when it works does it click! I need it to work for me versus stay stuck in Tutorial Hell.



# Setup Repo & Create Blog

### Reflect on this activity. When did you feel frustrated?

I actually want to figure out how to upload my current website www.jemmadixoncodes.com to Git. I need to learn Handlebar documentation and figure out how to zip and unzip the file. This way, I can configure my blog with css, html etc. I need to create a functional Navbar and place to store my reflections related to this course. 

### If you didn't already know that this is the way websites are made; was it what you pictured? How does the reality of this process differ from your preconceptions?

I'm still figuring out how to get to this step... 



# Thinking like a programmer

**Learning Competencies**

- Understand the meaning of 'thinking like a developer.'
- Understand flipped learning

**Reflect**

- **What patterns do you notice about 'thinking like a programmer?'**
1. To think like a programmer is to focus on solutions. If this doesn't work, then try this. If that doesn't work, try X. 
2. Focus on learning how to solve problems versus learning syntax. 
3. Focus on one thing at a time.
4. Apply the principle of "just in time" learning (don't try to learn it all)
5. Before diving into the solution, create a plan.
6. Break down large problems into smaller, more manageable chunks.
7. Remember that errors and bugs are conducive to your development (and that programming is full of them!) Adopt a 'not yet' attitude and go in with curiosity.

> ***But what does this actually mean, to think like a programmer?***

It means pretending to be the computer when you read code. There's an old joke: a programmer's wife tells him "hey, we need a couple things from the grocery store. Get a loaf of bread, and if they have eggs, then get a dozen." The programmer goes to the store and comes back with a dozen loaves of bread.

```jsx
function groceryShop(loaves, storeHasEggs) 
{ if (storeHasEggs === true) 
{ return 12 loaves; } 
return 1 loaves; } A
```

- It's something you learn over time by writing code and solving problems. I think that saying is another way to say that you need to think differently about problems and situations than you would in other areas of life. Programming has a unique way of thinking required to be successful. But it's not one tangible thing you can read a manual and learn. It varies depending on the language, the methodology and more.
- Thinking like a programmer isn't a skill. Its a habit. You start to think in terms of code the more you write code.
- **What does the internet say about flipped learning? What is flipped learning and flipped classroom? How do you think it will relate to your learning journey?**
- Flipped learning puts the onus on the student to learn. i.e., You are responsible for your learning journey.
- The internet: "Look, others have commented on this in great detail, so I'll just throw in and note that there isn't one kind of good teaching. Lecturing and flipped classrooms can both be done lazily or with diligence can care. There is no monopoly on good teaching methods to be found in any single camp."
- Because people are weird: research has shown that students in classes that focus on active learning (often meaning discussing the materials with their classmates) *learn more but think they learn less* than students in lecture-based classes. There's actually a very recent study on this: [https://www.pnas.org/content/116/39/19251](https://www.pnas.org/content/116/39/19251)
- Research has also shown that most students dislike the idea of flipped courses initially, but that large majorities prefer them when they've actually tried them.


### What is your process so far for solving problems?

1. Persistence 
2. Networking in with a more knowlegable other. 
3. Taking care f my health and prioritising sleep, exercise, nutrition. 
4. Not taking myself too seriously. 
5. Trying to enjoy the course and have fun. 



# Introduce yourself

Hello, my name is Jemma and I'm currently based in Auckland. I spent some in France, Germany, and Italy in 2019 and came back to New Zealand in 2020, just one month before the fist lockdown. I just finished a Masters degree in English Literature (based on a French text), and I'd love to travel again, perhaps being able to eventually work remotely. 
I'm not sure why I initially felt like tech wasn't for me, but I'm interested in the connection between Art/Science/Philosophy/Tech/Ethics, and I enjoy learning new things and being challenged. I started teaching mysel some basic code at the beginning of 2021, and realised that if I want to take this seriously as a career, then partaking in a Bootcamp sounded like a good idea in terms of pace and intensity of learning, and also connecting to other people who are also interested in Tech. 

In terms of values, if I were to list them, they would read as follows: 

- Adventure
- Authenticity
- Compassion
- Integrity
- Justice
- Kindness
- Open-mindedness
- Autonomy
- Contribution
- Knowledge/ Learning/ Wisdom

In terms of identity, I'm not entirely sure how to relate to this question; I'm not trying to be contentious. I tend to think of transplace/transregionalism as its own real and valid condition - that constellated intersections are emplacement. I'm mostly repeating ideas from a poet who writes about Transplace Poetics and "The right to be transplace." I mean, growing up in different regions with different people and cultures shapes identity and values in a way that makes it hard to answer the question "Where do you come from?" So, I like this idea - that you belong everywhere.

Why I'm attending Dev Academy: I want to learn new skills, meet new people, expand my future possibilities in terms of work and travel. I'm trying to create a website at the moment to post and write about my interests, and I'd like to figure out how to do this! My goal and central focus right now is to become a web developer and make a difference in people's lives.

### What was it like trying to summarise yourself to a group of strangers? 
It was alright! It takes time to get to know people; I feel I communicated some central ideas about myself and that's all good. 



### Could you feel your ego? Were you self conscious? 
Initially I was self conscious about sounding contentious with regards to identity, so I added this as a point. Reading through other people's responses, it seems as though quite a few people share a similar framework for thinking through identity as something complex and difficult to be reduced to X or Y or Z. 
*testing commits #2 upload.jemma-dixon-patch-2.
