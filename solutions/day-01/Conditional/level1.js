const age = prompt("Enter your age: ");

if (age >= 18) {
    alert("You are old enough to drive");
} else {
    const leftYear = 18 - age;
    alert(`You are left with ${leftYear} years to drive.`);
}