import React, { useState, useEffect, useCallback } from "react";

const Password = () => {
  const [length, setLength] = useState(10);
  const [password, setPassword] = useState("");
  const [includeLowercase, setIncludeLowercase] = useState(false);
  const [includeUppercase, setIncludeUppercase] = useState(false);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSymbols, setIncludeSymbols] = useState(false);
  const [copied, setCopied] = useState(false);

  const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
  const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()_+-=[]{}|;:',.<>?/~`";

  const generatePassword = useCallback(() => {
    let characters = "";
    if (includeLowercase) characters += lowercaseLetters;
    if (includeUppercase) characters += uppercaseLetters;
    if (includeNumbers) characters += numbers;
    if (includeSymbols) characters += symbols;

    if (characters.length === 0) return "";

    let newPassword = "";
    for (let i = 0; i < length; i++) {
      newPassword += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    return newPassword;
  }, [includeLowercase, includeUppercase, includeNumbers, includeSymbols, length]);

  useEffect(() => {
    setPassword(generatePassword());
  }, [generatePassword]);

  const copyToClipboard = () => {
    if (password) {
      navigator.clipboard.writeText(password);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
      />
      <div className="container">
        <h1>Password Generator</h1>

        <div className="inputbox">
          <input type="text" className="passBox" value={password} readOnly />
          <span
            className="material-symbols-outlined"
            id="copyIcon"
            onClick={copyToClipboard}
          >
            {copied ? "check" : "content_copy"}
          </span>
        </div>

        <input
          type="range"
          min="10"
          max="30"
          value={length}
          onChange={(e) => setLength(Number(e.target.value))}
        />
        <div className="row">
          <p>Password Length</p>
          <span id="valueRange">{length}</span>
        </div>

        <div className="checkbox-group">
          <label className="checkbox-row">
            <input
              type="checkbox"
              checked={includeLowercase}
              onChange={() => setIncludeLowercase(!includeLowercase)}
            />
            Include Lowercase Letters (a-z)
          </label>
          <label className="checkbox-row">
            <input
              type="checkbox"
              checked={includeUppercase}
              onChange={() => setIncludeUppercase(!includeUppercase)}
            />
            Include Uppercase Letters (A-Z)
          </label>
          <label className="checkbox-row">
            <input
              type="checkbox"
              checked={includeNumbers}
              onChange={() => setIncludeNumbers(!includeNumbers)}
            />
            Include Numbers (0-9)
          </label>
          <label className="checkbox-row">
            <input
              type="checkbox"
              checked={includeSymbols}
              onChange={() => setIncludeSymbols(!includeSymbols)}
            />
            Include Symbols (@-*)
          </label>
        </div>

        <button className="getBtn" id="getBtn" onClick={() => setPassword(generatePassword())}>
          Generate Password
        </button>
      </div>
    </>
  );
};

export default Password;
