document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("generateBtn");
  const output = document.getElementById("output");

  button.addEventListener("click", () => {
    const ingredients = document.getElementById("ingredients").value;
    const meal = document.getElementById("meal").value;
    const time = document.getElementById("time").value;
    const complexity = document.getElementById("complexity").value;

    if (!ingredients || !meal || !time || !complexity) {
      output.innerHTML = "<p style='color:red;'>Please fill in all fields.</p>";
      return;
    }

    output.innerHTML = `
      <h3>Your Recipe Request:</h3>
      <ul>
        <li><strong>Ingredients:</strong> ${ingredients}</li>
        <li><strong>Meal Type:</strong> ${meal}</li>
        <li><strong>Cooking Time:</strong> ${time}</li>
        <li><strong>Complexity:</strong> ${complexity}</li>
      </ul>
      <p>🔧 Now connect to an API or generate a recipe here...</p>
    `;
  });
});
