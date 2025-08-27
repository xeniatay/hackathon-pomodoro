[xeniatay.com/hackathon-pomodoro](https://xeniatay.com/hackathon-pomodoro/)

---


# Hackathon: Pomodoro Timer++ 
## Summary: 
As a group, implement a pomodoro timer frontend in react, with task tracking and potentially activity feeds for streak/achievement tracking.  Intervals can be customized  Leverage the giphy API to pop up a gif Component to encourage or congratulate upon completion of a good streak.  The candidate will conduct a demo/Q&A session at the end of the day, talking through the project planning, decisions, and implementation.

## Base Knowledge Sources or Other References
[The Pomodoro Technique 101](https://lifehacker.com/productivity-101-a-primer-to-the-pomodoro-technique-1598992730)


## An example Scenario to implement
An individual user wants a work interval of 10 minutes  with 1 minute of time in between for rest periods.  At the start of the X work interval, prompt the user to state what they will be working on (max 64 characters).  At the end of the interval, prompt the user with a yes/no if they accomplished what they intended and ask for the next interval's task.  If the user has amassed a streak of 4 "YES" responses display a congratulatory GIF from giphy or otherwise an encouraging gif for 5 seconds during the rest period, then dismiss it automatically.  

Results can get posted to an API endpoint that maintains a simple feed and stats for percentage completions, latest gifs, etc.  This feed can be displayed separately on a dashboard.

## Roles:
Team Lead/Engineer: Xenia - Responsible for major decisions about what exactly to build, by who, and in what order (with consultation from the team).  This includes decisions on features, data shapes, tasks, etc.  Responsible for keeping the team on schedule.  Expected to contribute code primarily to the Python backend (and/or frontend if desired).  Will lead a demo + Q&A session for the the project at the end with the larger team. 

Pool of non-lead Engineers: Folks from Flourish -- Andrew/Diego in the AM, Scott/Vsevolod in the afternoon.

## Tips/Guidance for the Team Lead
- Prefer defining breaking tasks up in smaller discrete milestones, versus working toward a big bang release
- Make sure to specify responsibilities and dependencies
- Taking time to keep the project moving toward stated milestones is equally as important as coding things yourself.  i.e. it is the responsibility of the Lead to make sure things are moving along across various workstreams.
- Feel free to ask questions and lean on teammates for guidance, what you eventually build and demo can and will be adjusted throughout the project.

## Rough Itinerary:
- 9am - Morning 1 on 1 planning meeting (Xenia + morning group) - figure out scope and tasks (MVP milestones vs final Demo features)
- 09:30 - 10:00 - Group sync up with plan, start development
- Pre-lunch check-in (~Noon) - mid day group debrief
- Lunch Break  12:00-1pm
- After lunch (~1:00pm) - Work toward other features
- ~4:00: MVP Demo - (or earlier if possible)
- Rest of time: other potential features or discussion

## Languages/Tools to use:
- Frontend Javascript/React (Create React App)
- Backend: Node (if needed)

### Backend Setup ###
TBD

### Create React App - Fontend ###
`npm install`
`npm start`.
