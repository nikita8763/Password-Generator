const generatePassword = () => {
  const passwordLength = document.getElementById("password-length").value || 12;

  const symbols = "!@#$%^&*(){}[]=<>/,.";

  const numbers = "1234567890";

  const lowercase = "abcdefghijklmnopqrstuvwxyz";

  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const isIncludeSymbol = document.getElementById("include-symbols").checked;

  const isIncludeNumber = document.getElementById("include-numbers").checked;

  const isIncludeLowercase =
    document.getElementById("include-lowercase").checked;

  const isIncludeUppercase =
    document.getElementById("include-uppercase").checked;

  let charSet = "";

  if (isIncludeSymbol) charSet += symbols;

  if (isIncludeNumber) charSet += numbers;

  if (isIncludeLowercase) charSet += lowercase;

  if (isIncludeUppercase) charSet += uppercase;

  let password = "";

  if (charSet === "") {
    alert("Please select at least one option");
    return;
  }

  for (let i = 0; i < passwordLength; i++) {
    const randomIndex = Math.floor(Math.random() * charSet.length);
    password += charSet[randomIndex];
  }
  document.getElementById("generated-password").innerHTML = password;
};
