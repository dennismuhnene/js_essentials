let userRole = "admin";
let accessLevel;

if (userRole === "admin") {
    accessLevel = "Full access granted";
} else if (userRole === "manager") {
    accessLevel = "Limited access granted";
} else {
    accessLevel = "No access granted";
}

console.log("Access Level:", accessLevel);

let isLoggedIn = true;
let userMessage;

if (isLoggedIn) {
    if (userRole === "admin") {
        userMessage = "Welcome, Admin!";
    } else {
        userMessage = "Welcome, User!";
    }
} else {
    userMessage = "Please log in to access the system.";
}

console.log("User Message:", userMessage)

let userType = "subscriber";
let userCategory;

switch (userType) {
    case "admin":
        userCategory = "Administrator";
        break;
    case "manager":
        userCategory = "Manager"; 
        break;
    case "subscriber":
        userCategory = "Subscriber";
        break;
    default:
        userCategory = "Unknown";
}

console.log("User Category:", userCategory);

// Ternary Operator
let isAutheticated = true;
let authenticationStatus = isAutheticated ? "Authenticated" : "Not authenticated";

console.log("Authentication Status:", authenticationStatus);

// Assignment

function authorizeAccess(role) {
    if (role === 'Employee') {
      console.log("You are an Employee. You are authorized to have access to 'Dietary Services'.");
    } else if (role === 'Enrolled Member') {
      console.log("You are an Enrolled Member. You are authorized to have access to 'Dietary Services' and one-on-one interaction with a dietician.");
    } else if (role === 'Subscriber') {
      console.log("You are a Subscriber. You are authorized to have partial access to facilitate 'Dietary Services' only.");
    } else if (role === 'Non-Subscriber') {
      console.log("You are a Non-Subscriber. You need to enroll or at least subscribe first to avail this facility.");
    } else {
      console.log("Invalid role. Please provide a valid role.");
    }
  }
  
  // Test the function with different roles
  authorizeAccess('Employee');
  //authorizeAccess('Enrolled Member');
  //authorizeAccess('Subscriber');
  //authorizeAccess('Non-Subscriber');
  //authorizeAccess('Invalid Role');