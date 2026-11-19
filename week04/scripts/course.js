// Create a course object
let aCourse = {
    code: "WDD131",
    title: "Dynamic Web Fundamentals",
    credits: 2,

    sections: [
        {
            section: "001",
            enrolled: 95,
            instructor: "Roberto Diaz Rodriguez"
        },
        {
            section: "002",
            enrolled: 80,
            instructor: "Sarah Gobble"
        }
    ]
};


// Function to display course code and title
function setCourseInformation(course) {
    document.querySelector("#courseName").textContent =
        `${course.code} – ${course.title}`;
}


// Function to display course sections in a table
function renderSections(course) {

    const sectionTable = document.querySelector("#sections");

    // Clear existing table rows
    sectionTable.innerHTML = "";

    // Loop through each section
    course.sections.forEach((section) => {

        // Create a table row
        const row = document.createElement("tr");

        // Create table cells
        const sectionCell = document.createElement("td");
        const enrolledCell = document.createElement("td");
        const instructorCell = document.createElement("td");

        // Add information to each cell
        sectionCell.textContent = section.section;
        enrolledCell.textContent = section.enrolled;
        instructorCell.textContent = section.instructor;

        // Add cells to the row
        row.appendChild(sectionCell);
        row.appendChild(enrolledCell);
        row.appendChild(instructorCell);

        // Add the row to the table
        sectionTable.appendChild(row);
    });
}


// Call the functions
setCourseInformation(aCourse);
renderSections(aCourse);