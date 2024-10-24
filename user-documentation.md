# Endorsing and Unendorsing a Topic
## Automated Testing
The tests for this feature can be found at test/topics.js on lines 401-421, 459-468, and 716-726. These tests ensure that a topic is initialized as not endorsed upon creation (i.e. the `endorsed` field is set to 0 by default). Additionally, these tests verify that the `endorse` and `unendorse` functions toggle the endorsement status (i.e., the `endorse` function sets the `endorsed` field to 1 and the `unendorse` function sets the `endorsed` field to 0). These tests comprehensively check the backend logic and ensure that the core functionality of endorsing and unendorsing topics works as expected.

## Local Server Testing
Since the automated tests don't fully cover all UI aspects of this feature, we recommend manual testing on a local server. Running the user stories ensures that the UI components update correctly based on backend actions. We concluded that manual testing is necessary after reviewing existing features similar to endorse/unendorse, such as the lock/unlock functionality. These features also involve heavy interaction with UI components and limited automated tests.

These tests can be run by cloning our repo and setting up the redis database and NodeBB server.
### An instructor (admin) can endorse/unendorse a topic (question)
- Log in as an admin
- Navigate to the page of any topic (serving as a “question”)

- Underneath the topic title, use the "Topic Tools" dropdown menu and click "Endorse Topic." The topic will be marked with the "Endorsed" label, and the topic timeline below will update to show that the topic has been endorsed.
<img width="723" alt="Screenshot 2024-10-10 at 10 17 58 PM" src="https://github.com/user-attachments/assets/103bbe13-7db9-4706-8485-a1c50a59ce37">

- To unendorse, use the same dropdown menu "Topic Tools" and click "Unendorse Topic." The "Endorsed" label will be removed, and the topic timeline below will update to show that the topic has been unendorsed.
<img width="724" alt="Screenshot 2024-10-10 at 10 18 18 PM" src="https://github.com/user-attachments/assets/12821820-f62b-45a3-9bed-426aa381e374">
<img width="722" alt="Screenshot 2024-10-10 at 10 18 30 PM" src="https://github.com/user-attachments/assets/bd5604f4-4b94-48e3-9f0c-61db87fc9e7d">

To endorse more than one topic at a time at the category page:
- Navigate to the category page.
- Click to select more than one topic that is not currently endorsed.
<img width="721" alt="Screenshot 2024-10-10 at 10 19 13 PM" src="https://github.com/user-attachments/assets/fe3ee0f8-36e7-4f56-92fd-ff39a9b05a1f">

- Click Topic Tools. Click on the “Endorse Topic” button. This will endorse all the topics selected (give them the endorse label). Clicking on one topic that is endorsed will show the label once again in the topic page.
<img width="721" alt="Screenshot 2024-10-10 at 10 19 00 PM" src="https://github.com/user-attachments/assets/b4794c89-4b4c-4f39-bc2a-0ec5a47ac41e">

### A student (non-admin) cannot endorse/unendorse a topic (question)
- Log in as a non-admin.
- Navigate to a topic.
- You will see that there is no Topic Tools dropdown. The endorse button cannot be found/clicked.
<img width="1439" alt="Screenshot 2024-10-10 at 10 56 47 PM" src="https://github.com/user-attachments/assets/63a5c4a6-10ef-4134-a6bf-7975b2635afc">

- Additionally navigate to a category page.
- You will see that there is also no Topic Tools dropdown. The endorse button cannot be found/clicked.
<img width="1440" alt="Screenshot 2024-10-10 at 10 57 15 PM" src="https://github.com/user-attachments/assets/16bb15a2-a740-4b26-924b-7064de7d7b3b">

# Answered by an Admin
## Automated Testing
This test can be found at test/topics.js on line 620-629. This test ensures that the function addAnswered works correctly by verifying that the field `answered` is set to one of two values, `true` or `undefined`. This test is sufficient because it confirms that the backend logic functions correctly and updates the `answered` field as expected. 

## Local Server Testing
For this user story, since the automated test primarily focused on checking whether the answered attribute was present in the database schema, the feature required more user testing to follow the acceptance criteria. For the acceptance criteria, which is ‘a professor adding a post and the topic now being answered’, this is tested by checked by the following: 

- To check when an admin has responded to a post and the ‘answered by professor’ tag appears, log into NodeBB as an admin, respond to a topic with a new post, and the tag should appear.
<img width="1362" alt="image" src="https://github.com/user-attachments/assets/cf48594d-c65d-4910-b332-b67e90eb68bd">

- To check that when a topic does not have a response from an admin, open NodeBB (do not have to be logged in as an admin) and view a topic without a response from an admin (can be a topic with no response) and the tag will not appear.
<img width="1155" alt="image" src="https://github.com/user-attachments/assets/e36b1e17-8d82-44d5-9eff-189b70747ee6">

