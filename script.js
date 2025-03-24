document.getElementById('profile').addEventListener('change', function() {
  var profile = this.value;
  var additionalFields = document.getElementById('additionalFields');
  additionalFields.innerHTML = '';
  if (profile === 'user') {
    additionalFields.innerHTML += `
      <div class="mb-4">
        <label class="block text-white mb-2" for="fullname">Nom utilisateur</label>
        <input type="text" id="fullname" name="fullname" class="w-full px-3 py-2 border rounded">
      </div>

      <div class="mb-4">
        <label class="block text-white mb-2" for="mot de passe">mot de passe</label>
        <input type="tel" id="phone" name="mot de passe" class="w-full px-3 py-2 border rounded">
      </div>


    `;
  } else if (profile === 'admin') {
    additionalFields.innerHTML += `
    <div class="mb-4">
    <label class="block text-white mb-2" for="fullname">Nom utilisateur</label>
    <input type="text" id="fullname" name="fullname" class="w-full px-3 py-2 border rounded">
  </div>

  <div class="mb-4">
    <label class="block text-white mb-2" for="mot de passe">mot de passe</label>
    <input type="tel" id="phone" name="mot de passe" class="w-full px-3 py-2 border rounded">
  </div>

    `;
  }
});

// Ajouter la logique de redirection
document.getElementById("registrationForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const profile = document.getElementById("profile").value;

  if (profile === "user") {
      window.location.href = "accueil.html";
  } else if (profile === "admin") {
      window.location.href = "Accueil-tableau.html";
  }
});
