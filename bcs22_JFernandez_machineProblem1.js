/*
    Program:        Computation of Grades using function
    Programmer:     Jerome Fernandez
    Section:        BCS22
    Start Date:     April 20, 2023
    End Date:       April 24, 2023
*/

var classP = [];
var classS = [];

const tableArray = [];

const student1 = new Object();
student1.Name_of_Student =  prompt("Enter student name: ");

for (var a = 0; a < 5; a++){

    classP[a] = prompt('Enter Enabling assessment ' + (a+1));
    var classParticipation = classP.map(Number);

    sum = classParticipation[0] + classParticipation[1] + classParticipation[2] + classParticipation[3] + classParticipation[4];
    averageCP = sum / classParticipation.length;
    average_Class = averageCP.toFixed(2);
}

student1.Class_Participation = average_Class;


for (var b = 0; b < 3; b++){

    classS[b] = prompt('Enter Summative assessment ' + (b+1));
    var classSummative = classS.map(Number);
    
    sum = classSummative[0] + classSummative[1] + classSummative[2];
    averageSA = sum / classSummative.length;
    average_Summ = averageSA.toFixed(2);
}

student1.Summative_Assessment = average_Summ;


let student1_ME = prompt('Major Exam grade ');
let student1_gradeME = parseInt(student1_ME);

student1.Exam_Grade = student1_gradeME;

    let stud1_Grade = (averageCP * 0.3) + (averageSA * 0.3) + (student1_gradeME * 0.4);
    stud1_FinalGrade = stud1_Grade.toFixed(2);

student1.Grade_Score = stud1_FinalGrade;
letterGrade = getletter(stud1_Grade);
student1.Letter_Grade = letterGrade;




const student2 = new Object();
student2.Name_of_Student =  prompt("Enter student name: ");

for (var a = 0; a < 5; a++){

    classP[a] = prompt('Enter Enabling assessment ' + (a+1));
    var classParticipation = classP.map(Number);

    sum = classParticipation[0] + classParticipation[1] + classParticipation[2] + classParticipation[3] + classParticipation[4];
    averageCP = sum / classParticipation.length;
    average_Class = averageCP.toFixed(2);
}

student2.Class_Participation = average_Class;


for (var b = 0; b < 3; b++){

    classS[b] = prompt('Enter Summative assessment ' + (b+1));
    var classSummative = classS.map(Number);
    
    sum = classSummative[0] + classSummative[1] + classSummative[2];
    averageSA = sum / classSummative.length;
    average_Summ = averageSA.toFixed(2);
}

student2.Summative_Assessment = average_Summ;


let student2_ME = prompt('Major Exam grade ');
let student2_gradeME = parseInt(student2_ME);

student2.Exam_Grade = student2_gradeME;

    let stud2_Grade = (averageCP * 0.3) + (averageSA * 0.3) + (student2_gradeME * 0.4);
    stud2_FinalGrade = stud2_Grade.toFixed(2);

student2.Grade_Score = stud2_FinalGrade;
letterGrade = getletter(stud2_Grade);
student2.Letter_Grade = letterGrade;




const student3 = new Object();
student3.Name_of_Student =  prompt("Enter student name: ");

for (var a = 0; a < 5; a++){

    classP[a] = prompt('Enter Enabling assessment ' + (a+1));
    var classParticipation = classP.map(Number);

    sum = classParticipation[0] + classParticipation[1] + classParticipation[2] + classParticipation[3] + classParticipation[4];
    averageCP = sum / classParticipation.length;
    average_Class = averageCP.toFixed(2);
}

student3.Class_Participation = average_Class;


for (var b = 0; b < 3; b++){

    classS[b] = prompt('Enter Summative assessment ' + (b+1));
    var classSummative = classS.map(Number);
    
    sum = classSummative[0] + classSummative[1] + classSummative[2];
    averageSA = sum / classSummative.length;
    average_Summ = averageSA.toFixed(2);
}

student3.Summative_Assessment = average_Summ;


let student3_ME = prompt('Major Exam grade ');
let student3_gradeME = parseInt(student3_ME);

student3.Exam_Grade = student3_gradeME;

    let stud3_Grade = (averageCP * 0.3) + (averageSA * 0.3) + (student3_gradeME * 0.4);
    stud3_FinalGrade = stud3_Grade.toFixed(2);

student3.Grade_Score = stud3_FinalGrade;
letterGrade = getletter(stud3_Grade);
student3.Letter_Grade = letterGrade;




const student4 = new Object();
student4.Name_of_Student =  prompt("Enter student name: ");

for (var a = 0; a < 5; a++){

    classP[a] = prompt('Enter Enabling assessment ' + (a+1));
    var classParticipation = classP.map(Number);

    sum = classParticipation[0] + classParticipation[1] + classParticipation[2] + classParticipation[3] + classParticipation[4];
    averageCP = sum / classParticipation.length;
    average_Class = averageCP.toFixed(2);
}

student4.Class_Participation = average_Class;


for (var b = 0; b < 3; b++){

    classS[b] = prompt('Enter Summative assessment ' + (b+1));
    var classSummative = classS.map(Number);
    
    sum = classSummative[0] + classSummative[1] + classSummative[2];
    averageSA = sum / classSummative.length;
    average_Summ = averageSA.toFixed(2);
}

student4.Summative_Assessment = average_Summ;


let student4_ME = prompt('Major Exam grade ');
let student4_gradeME = parseInt(student4_ME);

student4.Exam_Grade = student4_gradeME;

    let stud4_Grade = (averageCP * 0.3) + (averageSA * 0.3) + (student4_gradeME * 0.4);
    stud4_FinalGrade = stud4_Grade.toFixed(2);

student4.Grade_Score = stud4_FinalGrade;
letterGrade = getletter(stud4_Grade);
student4.Letter_Grade = letterGrade;




const student5 = new Object();
student5.Name_of_Student =  prompt("Enter student name: ");

for (var a = 0; a < 5; a++){

    classP[a] = prompt('Enter Enabling assessment ' + (a+1));
    var classParticipation = classP.map(Number);

    sum = classParticipation[0] + classParticipation[1] + classParticipation[2] + classParticipation[3] + classParticipation[4];
    averageCP = sum / classParticipation.length;
    average_Class = averageCP.toFixed(2);
}

student5.Class_Participation = average_Class;


for (var b = 0; b < 3; b++){

    classS[b] = prompt('Enter Summative assessment ' + (b+1));
    var classSummative = classS.map(Number);
    
    sum = classSummative[0] + classSummative[1] + classSummative[2];
    averageSA = sum / classSummative.length;
    average_Summ = averageSA.toFixed(2);
}

student5.Summative_Assessment = average_Summ;


let student5_ME = prompt('Major Exam grade ');
let student5_gradeME = parseInt(student5_ME);

student5.Exam_Grade = student5_gradeME;

    let stud5_Grade = (averageCP * 0.3) + (averageSA * 0.3) + (student5_gradeME * 0.4);
    stud5_FinalGrade = stud5_Grade.toFixed(2);

student5.Grade_Score = stud5_FinalGrade;
letterGrade = getletter(stud5_Grade);
student5.Letter_Grade = letterGrade;




function getletter(letterGrade){

    if (letterGrade >=90){
        letterGrade = "A";
    } else if (letterGrade >=80 && letterGrade <=89){
        letterGrade = "B";
    } else if (letterGrade >=70 && letterGrade <=79){
        letterGrade = "C";
    } else if (letterGrade >=60 && letterGrade <=69){
        letterGrade = "D";
    } else {
        letterGrade = "F";
    }
    return letterGrade;
}

tableArray.push(student1, student2, student3, student4, student5);

console.table(tableArray);
document.write(student1.Name_of_Student + ' Class participation: ' + student1.Class_Participation + ' Summative assssment: ' + student1.Summative_Assessment + ' Major exam: ' + student1.Exam_Grade + ' Final grade: ' + student1.Grade_Score);
document.write("<br>");
document.write(student2.Name_of_Student + ' Class participation: ' + student2.Class_Participation + ' Summative assssment: ' + student2.Summative_Assessment + ' Major exam: ' + student2.Exam_Grade + ' Final grade: ' + student2.Grade_Score);
document.write("<br>");
document.write(student3.Name_of_Student + ' Class participation: ' + student3.Class_Participation + ' Summative assssment: ' + student3.Summative_Assessment + ' Major exam: ' + student3.Exam_Grade + ' Final grade: ' + student3.Grade_Score);
document.write("<br>");
document.write(student4.Name_of_Student + ' Class participation: ' + student4.Class_Participation + ' Summative assssment: ' + student4.Summative_Assessment + ' Major exam: ' + student4.Exam_Grade + ' Final grade: ' + student4.Grade_Score);
document.write("<br>");
document.write(student5.Name_of_Student + ' Class participation: ' + student5.Class_Participation + ' Summative assssment: ' + student5.Summative_Assessment + ' Major exam: ' + student5.Exam_Grade + ' Final grade: ' + student5.Grade_Score);

