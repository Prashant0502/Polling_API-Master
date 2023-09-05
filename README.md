# POLLING API

A simple polling system api where anyone can create questions with options and can also add votes for those options.

## Requirements

- Install [Node.js].
- Install [MongoDB].
- Install [Postman].

## Getting Started

- Clone the repository

```
git clone <repo url> <project_name>
```

- Install dependencies

```
npm install
```

- Open "config/mongoose.js" and add MongoDB URI, local or Atlas

- Build and run the project

```
npm start
```

- Navigate to `http://localhost:8001/`

## Endpoints

- /questions/create (To create a question)
- /questions/:questionId/options/create (To add options to a specific question)
- /questions/:questionId/delete (To delete a question)
- /options/:optionId/delete (To delete an option)
- /options/:optionsId/add_vote (To increment the count of votes)
- /questions/:questionId (To view a question and it’s options)
- /questions/ (To list down all the questions)

---


