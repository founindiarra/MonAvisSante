window.onload = function () {
  const hospitalData = {
      commune1: [
          { hospital: 'Hôpital A', accueil: 75, attente: 60, soins: 85, proprete: 80, action: 'Améliorer l\'accueil, réduire les temps d\'attente', date: '2025-03-10' },
          { hospital: 'Hôpital B', accueil: 65, attente: 50, soins: 90, proprete: 70, action: 'Optimiser le temps d\'attente, améliorer la propreté', date: '2025-03-11' },
      ],
      commune2: [
          { hospital: 'Hôpital C', accueil: 80, attente: 55, soins: 70, proprete: 90, action: 'Améliorer les soins, réduire les temps d\'attente', date: '2025-03-12' },
          { hospital: 'Hôpital D', accueil: 70, attente: 65, soins: 85, proprete: 75, action: 'Améliorer l\'accueil et la propreté', date: '2025-03-10' },
      ],
      commune3: [
          { hospital: 'Hôpital E', accueil: 60, attente: 70, soins: 80, proprete: 85, action: 'Améliorer l\'accueil et les soins', date: '2025-03-09' },
          { hospital: 'Hôpital F', accueil: 75, attente: 60, soins: 75, proprete: 80, action: 'Optimiser les temps d\'attente, améliorer la propreté', date: '2025-03-11' },
      ],
      commune4: [
          { hospital: 'Hôpital G', accueil: 90, attente: 80, soins: 70, proprete: 95, action: 'Renforcer la qualité des soins, améliorer l\'accueil', date: '2025-03-10' },
          { hospital: 'Hôpital H', accueil: 85, attente: 65, soins: 75, proprete: 90, action: 'Optimiser le temps d\'attente, renforcer la propreté', date: '2025-03-12' },
      ],
    };

    const communeSelect = document.getElementById('communeSelect');
    const dateSelect = document.getElementById('dateSelect');
    const hospitalTableBody = document.getElementById('hospitalTableBody');

    // Fonction pour appliquer les couleurs selon le pourcentage
    function getColorClass(percentage) {
        if (percentage >= 75) return 'green';
        if (percentage >= 50) return 'yellow';
        if (percentage >= 25) return 'orange';
        return 'red';
    }

    // Fonction pour mettre à jour le tableau
    function updateTable() {
        const selectedCommune = communeSelect.value;
        const selectedDate = dateSelect.value;
        const data = hospitalData[selectedCommune];

        hospitalTableBody.innerHTML = ''; // Clear previous table content

        // Filtrer par date si une date est sélectionnée
        const filteredData = selectedDate ? data.filter(hospital => hospital.date === selectedDate) : data;

        filteredData.forEach(hospital => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${hospital.hospital}</td>
                <td class="${getColorClass(hospital.accueil)}">${hospital.accueil}%</td>
                <td class="${getColorClass(hospital.attente)}">${hospital.attente}%</td>
                <td class="${getColorClass(hospital.soins)}">${hospital.soins}%</td>
                <td class="${getColorClass(hospital.proprete)}">${hospital.proprete}%</td>
                <td>${hospital.action}</td>
            `;
            hospitalTableBody.appendChild(row);
        });
    }

 // Initial table load
 updateTable();

 // Appliquer le filtre lorsque le bouton est cliqué
 document.getElementById('applyFilter').addEventListener('click', function() {
     updateTable();
 });
};