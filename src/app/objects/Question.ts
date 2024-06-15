export interface Question{
    question: string,
    answer: string |null,
    correct: boolean |null,
    index: number,
    questionId:number
}

export interface Test{
    questions: Question[];
    aprobado: boolean ;
    tipo: string;
}