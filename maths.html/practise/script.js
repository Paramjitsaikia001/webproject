const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000; // Choose any available port

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html'); // Replace with the path to your HTML file
});

app.post('/process_form', (req, res) => {
    // Get form data
    const username = req.body.username;
    const mothername = req.body.mothername;
    const fathername = req.body.Fathername;
    const address = req.body.address;
    const dob = req.body.DOB;
    const contactNo = req.body.PHno;
    const passedPreviousExam = req.body.checkbox ? "Yes" : "No";

    // Perform any additional processing or validation here

    // Send a response (you may want to store the data in a database)
    res.send(`
        <h2>Submitted Information:</h2>
        <p><strong>Name:</strong> ${username}</p>
        <p><strong>Mother Name:</strong> ${mothername}</p>
        <p><strong>Father Name:</strong> ${fathername}</p>
        <p><strong>Address:</strong> ${address}</p>
        <p><strong>Date of Birth:</strong> ${dob}</p>
        <p><strong>Contact No.:</strong> ${contactNo}</p>
        <p><strong>Passed Previous Examination:</strong> ${passedPreviousExam}</p>
    `);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
