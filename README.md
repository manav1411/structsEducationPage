### site: structs.sh

this repo provides functionality of various tools to build MDX pages for structs.sh. Currently in development.





https://github.com/user-attachments/assets/301672c7-1a43-4cd8-8e2f-02e07ac43f3b



## TODO: 
 1. **chatGPT API:** chatgpt api. GPT suggested quiz questions. could have an 'advanced questions' button for leetcode-level gpt  generated questions. Or another way of getting leetcode-style questions for COMP3821 students.

 2. **roadmap data structure:** (data structure is generic tree. account for case when 2 parents node), arrow graphics.
 
 3. **gamify:** consider adding gamification to quiz part. gamify with how much you've done, and have progress bar on roadmap page.

<LATER>

 4. **visualiser:** add connection to visualiser, perhaps do old one if new ppl taking too long. or leave this till new ppl done.
 
 5. **merge code editor with UI** add progress bar to pages, depending on how many.
 
 6. **API key security:** security of not pushing key to frontend. avoid user agent spoofing, people stealing keys by scraping frontend. make a new express server. copy paste code from getting started->getting ready to use the API. 




 
## FILE STRUCTURE
2 folders:
- learning material: folder with information about each learning module (linked lists, hash-maps, etc). each page has a link to its quiz page, and back button to roadmap.
- quiz pages: folder with quizzes, 1 for each module.

## ROADMAP  
a tree-like structure. has link to every learning module. nodes move slightly. when user hovers over a topic, its text-box grows in size.  
indicator of porgression/completion for each module, by making background of text-box more green based on % quiz completed.
