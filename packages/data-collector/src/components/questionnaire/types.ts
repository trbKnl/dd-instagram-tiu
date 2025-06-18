import { 
  isInstanceOf,
  Text,
} from "@eyra/feldspar"

export interface PropsUIQuestionMultipleChoice {
  type: 'PropsUIQuestionMultipleChoice'
  id: number
  question: Text
  choices: Text[]
}

export function isPropsUIQuestionMultipleChoice(arg: any): arg is PropsUIQuestionMultipleChoice {
  return isInstanceOf<PropsUIQuestionMultipleChoice>(arg, 'PropsUIQuestionMultipleChoice', ['id', 'question', 'choices'])
}

export interface PropsUIQuestionMultipleChoiceCheckbox {
  type: 'PropsUIQuestionMultipleChoiceCheckbox'
  id: number
  question: Text
  choices: Text[]
}

export function isPropsUIQuestionMultipleChoiceCheckbox(arg: any): arg is PropsUIQuestionMultipleChoiceCheckbox {
  return isInstanceOf<PropsUIQuestionMultipleChoiceCheckbox>(arg, 'PropsUIQuestionMultipleChoiceCheckbox', ['id', 'question', 'choices'])
}

export interface PropsUIQuestionOpen {
  type: 'PropsUIQuestionOpen'
  id: number
  question: Text
}

export function isPropsUIQuestionOpen(arg: any): arg is PropsUIQuestionOpen {
  return isInstanceOf<PropsUIQuestionOpen>(arg, 'PropsUIQuestionOpen', ['id', 'question'])
}

export type PropsUIQuestion = 
  | PropsUIQuestionMultipleChoice 
  | PropsUIQuestionMultipleChoiceCheckbox 
  | PropsUIQuestionOpen;

export interface PropsUIPromptQuestionnaire {
  type: 'PropsUIPromptQuestionnaire'
  questions: PropsUIQuestion[] 
  description: Text
}

export function isPropsUIPromptQuestionnaire(arg: any): arg is PropsUIPromptQuestionnaire {
  return isInstanceOf<PropsUIPromptQuestionnaire>(arg, 'PropsUIPromptQuestionnaire', ['questions', 'description'])
}
