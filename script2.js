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
          <label class="block text-white mb-2" for="fullname">adresse email</label>
          <input type="text" id="fullname" name="fullname" class="w-full px-3 py-2 border rounded">
        </div>
  
        <div class="mb-4">
          <label class="block text-white mb-2" for="phone">mot de passe</label>
          <input type="tel" id="phone" name="phone" class="w-full px-3 py-2 border rounded">
        </div>
  
      <div class="mb-4">
          <label class="block text-white mb-2" for="fullname">confirmer mot de passe</label>
          <input type="text" id="fullname" name="fullname" class="w-full px-3 py-2 border rounded">
        </div>
        
  
      `;
    } else if (profile === 'admin') {
      additionalFields.innerHTML += `
        <div class="mb-4">
          <label class="block text-white mb-2" for="fullname">Nom complet</label>
          <input type="text" id="fullname" name="fullname" class="w-full px-3 py-2 border rounded">
        </div>
        <div class="mb-4">
          <label class="block text-white mb-2" for="phone">Numéro de téléphone</label>
          <input type="tel" id="phone" name="phone" class="w-full px-3 py-2 border rounded">
        </div>
        <div class="mb-4">
          <label class="block text-white mb-2" for="adminEmail">Adresse email</label>
          <input type="email" id="adminEmail" name="adminEmail" class="w-full px-3 py-2 border rounded">
        </div>
        <div class="mb-4">
          <label class="block text-white mb-2" for="adminPassword">Mot de passe</label>
          <input type="password" id="adminPassword" name="adminPassword" class="w-full px-3 py-2 border rounded">
        </div>
        <div class="mb-4">
          <label class="block text-white mb-2" for="confirmAdminPassword">Confirmer le mot de passe</label>
          <input type="password" id="confirmAdminPassword" name="confirmAdminPassword" class="w-full px-3 py-2 border rounded">
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
  