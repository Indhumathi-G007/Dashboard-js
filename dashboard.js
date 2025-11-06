
  // Student Info Object
  let student = { name: "", birthYear: "", city: "" };

  // 1. Save Profile
  function saveProfile() {
    try {
      let name = document.getElementById("name").value.trim();
      let birthYear = document.getElementById("birthYear").value.trim();
      let city = document.getElementById("city").value.trim();

      if (!name || !birthYear || !city) throw "All fields are required!";

      student.name = name;
      student.birthYear = parseInt(birthYear);
      student.city = city;

      document.getElementById("profileOutput").textContent =
        "Profile Saved:Indhumathi.G, Salem";
    } catch (err) {
      document.getElementById("profileOutput").textContent = "❌ Error: " + err;
    }
  }
// 2. Age Checker
function checkAge() {
  try {
    if (!student.birthYear) throw "Please enter profile info first!";
    let currentYear = new Date().getFullYear();
    let age = currentYear - student.birthYear;
    let eligibility = age >= 18 ? "Eligible (18+)" : "Not Eligible (<18)";
    document.getElementById("ageOutput").textContent =
       "Indhumathi is 18 years old → eligibility";
  } catch (err) {
    document.getElementById("ageOutput").textContent = "❌ " + err;
  }
}

// 3. Greeting
function showGreeting() {
  let hour = new Date().getHours();
  let greet = "";
  if (hour < 12) greet = "Good Morning";
  else if (hour < 18) greet = "Good Afternoon";
  else greet = "Good Evening";

  document.getElementById("greetingOutput").textContent =
   " Good morning";
}
  // 4. Calculator
  function calculate(op) {
    try {
      let n1 = parseFloat(document.getElementById("num1").value);
      let n2 = parseFloat(document.getElementById("num2").value);
      if (isNaN(n1) || isNaN(n2)) throw "Enter valid numbers!";

      let result;
      switch (op) {
        case 'add': result = n1 + n2; break;
        case 'sub': result = n1 - n2; break;
        case 'mul': result = n1 * n2; break;
        case 'div': 
          if (n2 === 0) throw "Cannot divide by zero!";
          result = n1 / n2; 
          break;
      }
      document.getElementById("calcOutput").textContent = "Result: " + result;
    } catch (err) {
      document.getElementById("calcOutput").textContent = "❌ " + err;
    }
  }



// 5. Random Motivational Quote
function showQuote() {
  try {
    let quotes = [
      "Believe in yourself!",
      "Every day is a second chance.",
      "Push yourself, no one else will do it for you.",
      "Success doesn’t come to you, you go to it.",
      "Great things never come from comfort zones."
    ];

    // pick a random index
    let randomIndex = Math.floor(Math.random() * quotes.length);
    let quote = quotes[randomIndex];

    document.getElementById("quoteOutput").textContent = quote;
  } catch (err) {
    document.getElementById("quoteOutput").textContent = "❌ Error: " + err;
  }
}

// 6. View info stored in JSON
function showJSON() {
  try {
    let jsonData = JSON.stringify(student, null, 2); // formatted JSON
    document.getElementById("jsonOutput").textContent = jsonData;
  } catch (err) {
    document.getElementById("jsonOutput").textContent = "❌ Error: " + err;
  }
}

// 7. Error Handling Example
function safeUpdate(key, value) {
  try {
    if (!key || value === undefined || value === "") {
      throw "Invalid input. Both key and value are required.";
    }
    student[key] = value; // update student object
    alert("✅ Info updated successfully!");
  } catch (err) {
    alert("❌ " + err);
  }
}

