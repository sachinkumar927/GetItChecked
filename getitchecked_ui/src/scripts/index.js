function showForm(formId) {
    document.getElementById('registerForm').classList.add('hidden');
    document.getElementById('loginForm').classList.add('hidden');
    document.getElementById(formId).classList.remove('hidden');
}


//seamless OTP input
const otpBoxes = document.querySelectorAll('.otp-box');

otpBoxes.forEach((box, index) => {
    box.addEventListener('input', (event) => {
        const currentValue = event.target.value;
        if (currentValue.length === 1) {
            // Automatically move to the next input
            if (index < otpBoxes.length - 1) {
                otpBoxes[index + 1].focus();
            }
        } else if (currentValue.length === 0 && index > 0) {
            // If backspace is pressed, move to the previous input
            otpBoxes[index - 1].focus();
        }
    });

    box.addEventListener('keydown', (event) => {
        if (event.key === "Backspace" && event.target.value === '' && index > 0) {
            otpBoxes[index - 1].focus();
        }
    });
});



document.querySelector('form').addEventListener('submit', function(event) {
    const otpBoxes = document.querySelectorAll('.otp-box');
    let otp = '';
    
    // Collect OTP value from all input boxes
    otpBoxes.forEach((box) => {
        otp += box.value;
    });

    // Perform client-side validation
    if (otp.length !== 6 || isNaN(otp)) {  // Check for 6 digits and numeric format
        alert('Please enter a valid 6-digit OTP.');
        event.preventDefault();  // Prevent the form from being submitted
        return;
    }

    // Optional: Make an API call to validate the OTP with the server
    fetch('/validate_otp', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ otp: otp }),
    })
    .then(response => response.json())
    .then(data => {
        if (!data.valid) {
            alert('Invalid OTP. Please try again.');
            event.preventDefault(); // Prevent submission if OTP is invalid
        }
    })
    .catch(error => {
        console.error('Error validating OTP:', error);
        alert('There was an error validating your OTP. Please try again.');
        event.preventDefault();
    });
});



document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        if (link.href === window.location.href) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});


document.getElementById('facultyId').addEventListener('change', function () {
    const facultyId = this.value;
    const assignmentDropdown = document.getElementById('assignmentId');
    assignmentDropdown.disabled = true;
    assignmentDropdown.innerHTML = '<option value="" selected>Loading...</option>';

    if (facultyId) {
        fetch(`/get_assignments?faculty_id=${facultyId}`)
            .then(response => response.json())
            .then(data => {
                assignmentDropdown.innerHTML = '<option value="" selected>Select Assignment</option>';
                data.assignments.forEach(assignment => {
                    const option = document.createElement('option');
                    option.value = assignment.id;
                    option.textContent = assignment.id;
                    assignmentDropdown.appendChild(option);
                });
                assignmentDropdown.disabled = false;
            })
            .catch(error => {
                assignmentDropdown.innerHTML = '<option value="" selected>Error loading assignments</option>';
                console.error('Error fetching assignments:', error);
            });
    }
});
