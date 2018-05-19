Tech Assessment - Statistics
Logic
User roles
- Leaders
- Managers
- Directors
General Model Logic Explanation
- Leaders can ONLY access (view/edit/delete)
competencies/sub-competencies/levels/activities that they created (through the
createdBy field on each model).
- For example: Leader A cannot view competencies created by Leader B
- Employees are shared for all users in the app.
- For example: Both Leader A and Leader B can add different activities to
Employee XYZ.
Competency structure and details
- Competency
- Sub-Competency
- Level
- Activity
● Activities are the required items to meet a sub-competency level.
● Sub-competency levels are the required items to meet a sub-competency.
● If a competency has sub-competencies, all sub-competencies are required to meet the
competency.
● Each user will only be able to see the competencies (sub-competency, levels &
activities) that he/she created.
○ For example: As the Cybersecurity CoE Leader I can see all Cybersecurity CoE
competencies and manage them.
○ Another example: As a manager whose employees are members of the
Cybersecurity CoE I can see all the Competencies that apply to my employees
○ A third example: As a director whose manager’s employees may be part of three
different CoEs, I can see all three CoE competencies as they apply to the
emplo yees who report to the managers that report to me.
Statistics Endpoint Explanation
All users will get data in the same format but the data will be populated differently based on the
user access level (role).
For the response format, refer to the Swagger API definition.
Leader Admin
● View aggregate totals of Competency roll-ups based on employees completed activities.
○ Leaders will see only the employees competency data they have added and not data
other leaders may have added for that employee
Manager Admin
● View aggregate totals of Competency roll-ups based on employees completed activities.
○ Managers will