import { Answer } from "./interfaces/answer";
import { Question, QuestionType } from "./interfaces/question";
import { makeBlankQuestion } from "./objects";

/**
 * Consumes an array of questions and returns a new array with only the questions
 * that are `published`.
 */
export function getPublishedQuestions(questions: Question[]): Question[] {
    let publishedQuestions = [];
    for (let i = 0; i < questions.length; i++) {
        if (questions[i].published) {
            publishedQuestions.push(questions[i]);
        }
    }
    return publishedQuestions;
}

/**
 * Consumes an array of questions and returns a new array of only the questions that are
 * considered "non-empty". An empty question has an empty string for its `body` and
 * `expected`, and an empty array for its `options`.
 */
export function getNonEmptyQuestions(questions: Question[]): Question[] {
    let nonEmptyQuestions = [];
    for (let i = 0; i < questions.length; i++) {
        if (
            questions[i].body !== "" ||
            questions[i].expected !== "" ||
            questions[i].options.length > 0
        ) {
            nonEmptyQuestions.push(questions[i]);
        }
    }
    return nonEmptyQuestions;
}

/***
 * Consumes an array of questions and returns the question with the given `id`. If the
 * question is not found, return `null` instead.
 */
export function findQuestion(
    questions: Question[],
    id: number,
): Question | null {
    for (let i = 0; i < questions.length; i++) {
        if (questions[i].id === id) {
            return questions[i];
        }
    }
    return null;
}

/**
 * Consumes an array of questions and returns a new array that does not contain the question
 * with the given `id`.
 * Hint: use filter
 */
export function removeQuestion(questions: Question[], id: number): Question[] {
    let newQuestions = questions.filter((question) => question.id !== id);
    return newQuestions;
}

/***
 * Consumes an array of questions and returns a new array containing just the names of the
 * questions, as an array.
 * Do not modify the input array.
 */
export function getNames(questions: Question[]): string[] {
    let names = [];
    for (let i = 0; i < questions.length; i++) {
        names.push(questions[i].name);
    }
    return names;
}

/**
 * Consumes an array of Questions and produces a corresponding array of
 * Answers. Each Question gets its own Answer, copying over the `id` as the `questionId`,
 * making the `text` an empty string, and using false for both `submitted` and `correct`.
 */
export function makeAnswers(questions: Question[]): Answer[] {
    let answers = [];
    for (let i = 0; i < questions.length; i++) {
        let answer = {
            questionId: questions[i].id,
            text: "",
            submitted: false,
            correct: false,
        };
        answers.push(answer);
    }
    return answers;
}

/***
 * Consumes an array of Questions and produces a new array of questions, where
 * each question is now published, regardless of its previous published status.
 * Hint: as usual, do not modify the input questions array
 */
export function publishAll(questions: Question[]): Question[] {
    let newPublishedQuestions = [];
    for (let i = 0; i < questions.length; i++) {
        let question = { ...questions[i], published: true };
        newPublishedQuestions.push(question);
    }
    return newPublishedQuestions;
}

/***
 * Consumes an array of Questions and produces a new array of the same Questions,
 * except that a blank question has been added onto the end. Reuse the `makeBlankQuestion`
 * you defined in the `objects.ts` file.
 * Hint: as usual, do not modify the input questions array
 */
export function addNewQuestion(
    questions: Question[],
    id: number,
    name: string,
    type: QuestionType,
): Question[] {
    let newQuestion = makeBlankQuestion(id, name, type);
    return [...questions, newQuestion];
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its name should now be `newName`.
 * Hint: as usual, do not modify the input questions array,
 *       to make a new copy of a question with some changes, use the ... operator
 */
export function renameQuestionById(
    questions: Question[],
    targetId: number,
    newName: string,
): Question[] {
    let targetIDRename = [...questions];
    for (let i = 0; i < targetIDRename.length; i++) {
        if (targetIDRename[i].id === targetId) {
            targetIDRename[i] = { ...targetIDRename[i], name: newName };
        }
    }
    return targetIDRename;
}

/**
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `option` array should have a new element.
 * If the `targetOptionIndex` is -1, the `newOption` should be added to the end of the list.
 * Otherwise, it should *replace* the existing element at the `targetOptionIndex`.
 *
 * Remember, if a function starts getting too complicated, think about how a helper function
 * can make it simpler! Break down complicated tasks into little pieces.
 *
 * Hint: you need to use the ... operator for both the question and the options array
 */
export function editOption(
    questions: Question[],
    targetId: number,
    targetOptionIndex: number,
    newOption: string,
): Question[] {
    let newArray: Question[] = [...questions];
    for (let i: number = 0; i < newArray.length; i++) {
        if (newArray[i].id === targetId) {
            let newOptions: string[] = [...newArray[i].options];
            if (targetOptionIndex === -1) {
                newOptions.push(newOption);
            } else {
                newOptions[targetOptionIndex] = newOption;
            }
            newArray[i] = { ...newArray[i], options: newOptions };
        }
    }
    return newArray;
}
