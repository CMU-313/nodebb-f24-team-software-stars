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

<img width="723" alt="Screenshot 2024-10-10 at 10 17 58 PM" src="https://github.com/user-attachments/assets/103bbe13-7db9-4706-8485-a1c50a59ce37">

- Go back to the Topic Tools dropdown. The button should now show “Unendorse Topic”. Click the button and it will remove the “Endorsed” label and mark that it has been unendorsed in the topic timeline.

<img width="724" alt="Screenshot 2024-10-10 at 10 18 18 PM" src="https://github.com/user-attachments/assets/12821820-f62b-45a3-9bed-426aa381e374">

<img width="722" alt="Screenshot 2024-10-10 at 10 18 30 PM" src="https://github.com/user-attachments/assets/bd5604f4-4b94-48e3-9f0c-61db87fc9e7d">

To endorse more than one topic at a time at the category page:
- Navigate to the category page.
- Click to select more than one topic that is not currently endorsed.

<img width="721" alt="Screenshot 2024-10-10 at 10 19 13 PM" src="https://github.com/user-attachments/assets/fe3ee0f8-36e7-4f56-92fd-ff39a9b05a1f">

- Click Topic Tools. Click on the “Endorse Topic” button. This will endorse all the topics selected (give them the endorse label). Clicking on one topic that is endorsed will show the label once again in the topic page.

<img width="721" alt="Screenshot 2024-10-10 at 10 19 00 PM" src="https://github.com/user-attachments/assets/b4794c89-4b4c-4f39-bc2a-0ec5a47ac41e">

### A student (non-admin) can not endorse/unendorse a topic (question)
- Log in as a non-admin.
- Navigate to a topic.
- You will see that there is no Topic Tools dropdown. The endorse button cannot be found/clicked.

<img width="1439" alt="Screenshot 2024-10-10 at 10 56 47 PM" src="https://github.com/user-attachments/assets/63a5c4a6-10ef-4134-a6bf-7975b2635afc">

- Additionally avigate to a category page.
- You will see that there is also no Topic Tools dropdown. The endorse button cannot be found/clicked.

<img width="1440" alt="Screenshot 2024-10-10 at 10 57 15 PM" src="https://github.com/user-attachments/assets/16bb15a2-a740-4b26-924b-7064de7d7b3b">

# Answered by an Admin
## Automated Testing
This test can be found at test/topics.js on line 620-629. This test ensures that the function addAnswered works as intended by verifying that the field answer is set to one of 2 values, ‘true’ or undefined. This function is a part of the answered by Admin feature and is testing the backend logic. This is sufficient testing because it ensures that the backend logic is done correctly and works as expected in changing the database values. 

## Local Server Testing
For this user story, since the automated test primarily focused on checking whether the answered attribute was present in the database schema, the feature required more user testing to follow the acceptance criteria. For the acceptance criteria, which is ‘a professor adding a post and the topic now being answered’, this is tested by checked by the following: 
- To check when an admin has responded to a post and the ‘answered by professor’ tag appears, log into NodeBB as an admin, respond to a topic with a new post, and the tag should appear.
<img width="1362" alt="image" src="https://github.com/user-attachments/assets/cf48594d-c65d-4910-b332-b67e90eb68bd">

- To check that when a topic does not have a response from an admin, open NodeBB (do not have to be logged in as an admin) and view a topic without a response from an admin (can be a topic with no response) and the tag will not appear.
<img width="1343" alt="image" src="https://github.com/user-attachments/assets/e6388f01-a958-4acc-98b6-88456ec58a68">

