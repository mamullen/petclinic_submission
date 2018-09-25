#Overview
•Exercise Difficulty: 
	-> Between Moderate and Difficult

•How did you feel about the exercise itself? (1 lowest, 10 highest—awesome way to assess coding ability)
	-> 7

•How do you feel about coding an exercise as a step in the interview process?  (1 lowest, 10 highest—awesome way to assess coding ability)
	-> 9

•What would you change in the exercise and/or process?
	-> For the exercise, I believe the idea of "less is more" can be applied here.  There is so much information already present on the website that maybe it would be better to either include a "how to" of all features available at a customer level or a blueprint of the coding methods available. For a real world experience, this was excellent, except I would've asked fellow co-workers about the spots I was stuck on, when I couldnt find a non-tediuous solution online.  

	-> For the process, I would suggest probably a smaller angular based project (maybe something to do with the heroes an villians angular tutorial) and have your interviewees make a new feature of your specifictions based on that.  This is jsut to get a feal of how someone does when starting from scratch vs joining a preexisting project.  


#Issues
	-> So for my code, I had to hardcode a schedule into the edit schedule method in order to test it properly.  As you can tell, this is not correct nor what I intended.  For some reason, the vet that would be chosen on the visit add page was not populating. I kept trying different methods, but nothing would work.  I then realized that I would need to pull the schedule from the backend, and I am not sure how to do that.  I am sure I could learn in a few hours, but I think that might be walking the line of "code plagerism", and I rather be this a test of my current skill, then of my googling skills.


# How To Run
	-> follow the readme at: https://github.com/spring-petclinic/spring-petclinic-rest
	-> follow the readme at: https://github.com/spring-petclinic/spring-petclinic-angular
	-> replace the following files in the "spring-petclinic-angular" folder:
		-> 'src/app/visits/visit.ts' with 'visits/visit.ts'
		-> 'src/app/visits/visit.service.ts' with 'visits/visit.service.ts'
		-> 'src/app/visits/visit.service.spec.ts' with 'visits/visit.service.spec.ts'
		-> 'src/app/visits/visits-routing.module.ts' with 'visits/visits-routing.module.ts'
		-> 'src/app/visits/visits.module.ts' with 'visits/visits.module.ts'
		-> 'src/app/visits/visit-add' with 'visits/visit-add'
		-> 'src/app/vets/vet.ts'
	-> Run backend servers and then run ng serve
	-> Go to http://localhost:4200/

#Steps to produce:
*NOTE: as of right now, all appointments at 10:00am will have a prexisting appointment*
->Click on the owner tab
->Click on one of the owners names
->At the bottom of the page you will see a "Add Visit" button
->Fill out the form as you want. For the time slot, pick 10am.
->Notice an alert will pop up informing you that the appointment has been taken already.  
  This is to simulate if an appointment has already picked at this time.  
->pick a new time and add appointment






