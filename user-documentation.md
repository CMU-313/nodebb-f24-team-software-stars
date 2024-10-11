# Endorse/Unendorse Topic
## Automated Testing
The tests for this feature can be found at test/topics.js. The tests ensure that a topic is set to not endorsed upon creation (i.e. the endorsed field is set to 0). The tests also ensure that the endorse and unendorse functions work at endorsing and unendorsing a topic (i.e., the endorse function sets the endorsed field to 1 while the unendorse function sets the endorsed field to 0). These tests are sufficient since they ensure that the backend logic for endorsing/endorsing a topic works. 

## Local Server Testing
Since the automated tests are not fully comprehensive since our new features include a lot of new UI elements, running the code on the local server and enacting the user story to check if UI elements are being updated can be used for our acceptance tests for this user story. We determined that such format of testing (non-automated) was necessary since we examined other features that worked similarly to endorse/unendorse, the existing lock/unlock functionality, and these features also did not have many tests in the test suite, likely because they involve interacting with front-end UI components to call actions as well.

These tests can be run by cloning our repo and setting up the redis database and NodeBB server.
### An instructor (admin) can endorse/unendorse a topic (question)
- Log in as an admin
- Navigate to the page of any topic (this will serve as our “question”)
- Using the Topic Tools drop-down underneath the topic title, click on the button “Endorse Topic”. This will mark the topic as endorsed and given it an “Endorsed” label. It will also mark that the post has been endorsed in the topic timeline below.
- Go back to the Topic Tools dropdown. The button should now show “Unendorse Topic”. Click the button and it will remove the “Endorsed” label and mark that it has been unendorsed in the topic timeline.

To endorse more than one topic at a time at the category page:
- Navigate to the category page.
- Click to select more than one topic that is not currently endorsed.
- Click Topic Tools. Click on the “Endorse Topic” button. This will endorse all the topics selected (give them the endorse label). Clicking on one topic that is endorsed will show the label once again in the topic page.
### A student (non-admin) can not endorse/unendorse a topic (question)
- Log in as a non-admin.
- Navigate to a topic.
- You will see that there is no Topic Tools dropdown. The endorse button cannot be found/clicked.


# Answered by an Admin
## Automated Testing
This test can be found at test/topics.js on line 620-629. This test ensures that the function addAnswered works as intended by verifying that the field answer is set to one of 2 values, ‘true’ or undefined. This function is a part of the answered by Admin feature and is testing the backend logic. This is sufficient testing because it ensures that the backend logic is done correctly and works as expected in changing the database values. 

## Local Server Testing
For this user story, since the automated test primarily focused on checking whether the answered attribute was present in the database schema, the feature required more user testing to follow the acceptance criteria. For the acceptance criteria, which is ‘a professor adding a post and the topic now being answered’, this is tested by checked by the following: 
- To check when an admin has responded to a post and the ‘answered by professor’ tag appears, log into NodeBB as an admin, respond to a topic with a new post, and the tag should appear.
- To check that when a topic does not have a response from an admin, open NodeBB (do not have to be logged in as an admin) and view a topic without a response from an admin (can be a topic with no response) and the tag will not appear.
