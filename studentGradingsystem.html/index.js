let students = [
    {name: "Alice", subject: "Math", score: 85},
    {name: "John", subject: "English", score: 65},
    {name: "Ahmed", subject: "biology", score: 55},
    {name: "Farhan", subject: "Geology", score: 25},
    {name: "Aisha", subject: "chemistry", score: 70},
];
function getGrade(score){
    if (score >= 80) return'A';
    else if(score >=65) return 'B';
    else if (score >= 50) return 'C';
    else if (score >= 45) return 'D';
    else if (score >= 40) return 'E'
    else return 'F';
}
function updateTable(filteredStudents = students){
    const tbody = document.getElementById('studentTable').getElementsByTagName('tbody')[0];
    tbody.innerHTML = '';
    filteredStudents.forEach(student =>{
        const row = tbody.insertRow();
        row.insertCell().textContent = student.name;
        row.insertCell().textContent = student.subject;
        row.insertCell().textContent = student.score;
        row.insertCell().textContent = getGrade(student.score);
    })
}
 function displayResult(message) {
            const resultsDiv = document.getElementById('results');
            resultsDiv.innerHTML += `<p>${message}</p>`;
            console.log(message);
 }
  function clearResults() {
            document.getElementById('results').innerHTML = '';
 }
         function addStudent() {
            const name = document.getElementById('name').value.trim();
            const subject = document.getElementById('subject').value.trim();
            const score = parseInt(document.getElementById('score').value);
            
            if (name && subject && !isNaN(score) && score >= 0 && score <= 100) {
                students.push({ name, subject, score });
                updateTable();
                clearInputs();
                displayResult(`Added student: ${name} - ${subject} - ${score}`);
            } else {
                alert('Please enter valid name, subject, and score (0-100).');
            }
}
   function clearInputs() {
            document.getElementById('name').value = '';
            document.getElementById('subject').value = '';
            document.getElementById('score').value = '';
            document.getElementById('searchName').value = '';
}

        function calculateAverage() {
            clearResults();
            if (students.length === 0) {
                displayResult('No students available.');
                return;
            }
            const sum = students.reduce((acc, s) => acc + s.score, 0);
            const avg = sum / students.length;
            displayResult(`Class Average: ${avg.toFixed(2)}`);
}
        function highestScore() {
            clearResults();
            if (students.length === 0) {
                displayResult('No students available.');
                return;
            }
            const maxScore = Math.max(...students.map(s => s.score));
            const highest = students.find(s => s.score === maxScore);
            displayResult(`Highest Score: ${highest.name} - ${highest.subject} - ${highest.score}`);
}

        function lowestScore() {
            clearResults();
            if (students.length === 0) {
                displayResult('No students available.');
                return;
            }
            const minScore = Math.min(...students.map(s => s.score));
            const lowest = students.find(s => s.score === minScore);
            displayResult(`Lowest Score: ${lowest.name} - ${lowest.subject} - ${lowest.score}`);
}
function searchStudents() {
            clearResults();
            const searchName = document.getElementById('searchName').value.trim().toLowerCase();
            const searchScore =Number(document.getElementById('searchScore').value) || NaN;
            if (!searchName && isNaN(searchScore)) {
                updateTable(students)
                return;
            }
            
            
}

function searchStudents() {
            clearResults();
            const searchName = document.getElementById('searchName').value.trim().toLowerCase();
            if (!searchName) {
                alert('Please enter a name to search.');
                return;
            }
            const found = students.filter(s => s.name.toLowerCase().includes(searchName));
            displayResult(`Search Results for "${searchName}":`);
            found.forEach(s => displayResult(`${s.name} - ${s.subject} - \( {s.score} ( \){getGrade(s.score)})`));
            if (found.length === 0) displayResult('No students found.');
            updateTable(found);
        }
updateTable();

