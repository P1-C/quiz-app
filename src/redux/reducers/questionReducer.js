import { ActionTypes } from './../constants/action-types';

const initialState =  {
    questionList :[{
        id: 1,
        question: 'What is the correct command to create a new React project?',
        option1: 'npm create-react-app myReactApp',
        option2: 'npm create-react-app',
        option3: 'npx create-react-app',
        option4: 'npx create-react-app myReactApp',
        correctOption: 'option4',
        selectedOption: 'npm create-react-app',
        category: 'React'
      },
      {
        id: 2,
        question: 'What command is used to start the React local development server?',
        option1: 'npm start',
        option2: 'npm build',
        option3: 'npm run dev',
        option4: 'npm serve',
        correctOption: 'option1',
        category: 'React'
      },
      {
        id: 3,
        question: 'What is the default local host port that a React development server uses?',
        option1: '8080  ',
        option2: '3500',
        option3: '3000',
        option4: '3200',
        correctOption: 'option3',
        category: 'React'
      },
      {
        id: 4,
        question: 'A copy of the "real" DOM that is kept in memory is called what?',
        option1: 'Shadow DOM',
        option2: 'DOM',
        option3: 'Virtual DOM',
        option4: 'React DOM',
        correctOption: 'option3',
        category: 'React'
      },
      {
        id: 5,
        question: 'Who is making the Web standards ?',
        option1: 'Mozilla',
        option2: 'Google',
        option3: 'Microsoft',
        option4: 'The World Wide Web Consortium',
        correctOption: 'option4',
        category: 'HTML'
      },
      {
        id: 6,
        question: 'What does CSS stand for?',
        option1: 'Creative Style Sheets',
        option2: 'Computer Style Sheets',
        option3: 'Colorful Style Sheets',
        option4: 'Cascading Style Sheets',
        correctOption: 'option4',
        category: 'CSS'
      }, {
        id: 7,
        question: 'Which HTML attribute is used to define inline styles?',
        option1: 'styles',
        option2: 'font',
        option3: 'style',
        option4: 'class',
        correctOption: 'option3',
        category: 'CSS'
      }]
    }

export const questionReducer = (state = initialState, action) => {
    switch(action.type){
        case ActionTypes.GET_QUESTIONS :
            return {...state, questions: action.payload };
        case ActionTypes.ADD_QUESTION :
            return {...state, questions: action.payload };
        default :
            return state;
    }
}