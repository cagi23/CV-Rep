Challenge Overview

A Company would like to consolidate all of their employee technical competency into a single tool which can be used to track at multiple levels. The goal is to have an application that allows CoE leaders to define roles with their competency requirements, and actions or trainings which prove each competency level. Managers and Directors will be able to track profiles with roll ups of competency in specific sections of the workforce.


Tech Stack Overview

    Node.js (latest version)

    Express.js (latest version)

    MSSQL as DB with Sequelize

Security

All endpoints must be protected and JWT passed in the request header must be used for authentication.
User Roles

    Leader

    Director

    Manager

Detailed Requirements

    Implement all models from the ERD + Swagger.

    You need to implement all endpoints with the tags:

        Authentication

        User

        Competency

        SubCompetencies

        Levels

        Activities

    Provide a command (eg npm run init-db) to initialize the database.

    Create both positive and negative POSTMAN tests.

    Update the README with any new details/instructions needed on how to setup and run the app.

General Notes

    All POST, PUT & DELETE operations must be logged in a separate table. There’s a separate endpoint to get the logs which is out of scope for now.

    Users with Director, or Manager role only have access to the /statistics endpoint.

    All entities must have timestamps (createdBy, createdAt, modifiedBy, modifiedAt).

    Follow the best practices for creating Node.js API.

