const mentors = [
    {
        name: "Mentor 1",
        email: "mentor1@example.com",
        profession: "Professor",
        imageSrc: "mentor1.jpg",
    },
    {
        name: "Mentor 2",
        email: "mentor2@example.com",
        profession: "Educator",
        imageSrc: "mentor2.jpg",
    },
    {
        name: "Mentor 3",
        email: "mentor3@example.com",
        profession: "Tutor",
        imageSrc: "mentor3.jpg",
    },
    {
        name: "Mentor 4",
        email: "mentor4@example.com",
        profession: "Instructor",
        imageSrc: "mentor4.jpg",
    },
];

let currentMentorIndex = 0;
const mentorImage = document.getElementById("mentor-image");
const mentorName = document.getElementById("mentor-name");
const mentorEmail = document.getElementById("mentor-email");
const mentorProfession = document.getElementById("mentor-profession");
const prevButton = document.getElementById("prev-button");
const nextButton = document.getElementById("next-button");

function displayMentor(index) {
    const mentor = mentors[index];
    mentorImage.src = mentor.imageSrc;
    mentorImage.alt = mentor.name;
    mentorName.textContent = mentor.name;
    mentorEmail.textContent = "Email: " + mentor.email;
    mentorProfession.textContent = "Profession: " + mentor.profession;
}

function showPreviousMentor() {
    if (currentMentorIndex > 0) {
        currentMentorIndex--;
        displayMentor(currentMentorIndex);
    }
}

function showNextMentor() {
    if (currentMentorIndex < mentors.length - 1) {
        currentMentorIndex++;
        displayMentor(currentMentorIndex);
    }
}

// Initially display the first mentor
displayMentor(currentMentorIndex);
