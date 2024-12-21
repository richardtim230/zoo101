// Data for topics and their content

const topicsContent = {

  "animal-complexity": {

    title: "Animal Complexity",

    description: "Understand the complexity of animal organization, from acellular to metazoan structures.",

    keyConcepts: [

      "Types: Acellular and Metazoan",

      "Protoplasmic grade (Protozoa)",

      "Cellular grade",

      "Tissue-organ grade",

      "Organ system grade"

    ],

    lecture: `

      <h2>Animal Complexity</h2>

      <p>Animal complexity refers to the levels of structural organization, from simple acellular forms to complex metazoans. Examples include Protozoa for protoplasmic grade and higher animals for organ system grade.</p>

    `

  },

  "animal-embryology": {

    title: "Animal Embryology",

    description: "Explore the development of animals, from egg types to tissue differentiation.",

    keyConcepts: [

      "Types of eggs",

      "Fertilization",

      "Cleavage",

      "Gastrulation",

      "Tissue, organ, and system differentiation"

    ],

    lecture: `

      <h2>Animal Embryology</h2>

      <p>Animal embryology studies the formation and development of embryos, starting from fertilization to tissue and organ formation.</p>

      <h3>Key Processes:</h3>

      <ul>

        <li><strong>Fertilization:</strong> The fusion of male and female gametes to form a zygote.</li>

        <li><strong>Cleavage:</strong> Rapid cell divisions of the zygote.</li>

        <li><strong>Gastrulation:</strong> Formation of germ layers (ectoderm, mesoderm, endoderm).</li>

      </ul>

    `

  },

  "animal-classification": {

    title: "Outline of Animal Classification",

    description: "Understand the diversity of invertebrate animal life and their classification.",

    keyConcepts: [

      "Diversity of invertebrates",

      "Basic animal classification"

    ],

    lecture: `

      <h2>Outline of Animal Classification</h2>

      <p>Animal classification organizes animals into groups based on their evolutionary relationships and shared characteristics.</p>

      <h3>Key Groups:</h3>

      <ul>

        <li><strong>Invertebrates:</strong> Animals without a backbone, such as sponges, cnidarians, and mollusks.</li>

        <li><strong>Vertebrates:</strong> Animals with a backbone, including fishes, amphibians, reptiles, birds, and mammals.</li>

      </ul>

    `

  },

  "protozoa": {

    title: "Acellular Animals (Protozoa)",

    description: "Learn about single-celled animals such as Amoeba and Paramecium.",

    keyConcepts: [

      "Examples: Amoeba, Paramecium, Euglena, Trypanosoma",

      "Structure and functions"

    ],

    lecture: `

      <h2>Acellular Animals (Protozoa)</h2>

      <p>Protozoa are single-celled organisms that exhibit animal-like behaviors, such as movement and predation.</p>

      <h3>Examples:</h3>

      <ul>

        <li><strong>Amoeba:</strong> Moves using pseudopodia and engulfs food by phagocytosis.</li>

        <li><strong>Paramecium:</strong> Uses cilia for movement and feeding.</li>

      </ul>

    `

  },

  "coelenterata": {

    title: "Radiate Animals (Coelenterata)",

    description: "Explore the features of animals like Hydra and Obelia.",

    keyConcepts: [

      "Examples: Hydra, Obelia",

      "Structure and reproduction"

    ],

    lecture: `

      <h2>Radiate Animals (Coelenterata)</h2>

      <p>Coelenterates are aquatic animals characterized by a simple body plan with a single opening for ingestion and egestion.</p>

      <h3>Examples:</h3>

      <ul>

        <li><strong>Hydra:</strong> Freshwater animal capable of both sexual and asexual reproduction.</li>

        <li><strong>Obelia:</strong> A colonial coelenterate with specialized polyps for feeding and reproduction.</li>

      </ul>

    `

  },

  "platyhelminthes": {

    title: "Acoelomate Animals (Platyhelminthes)",

    description: "Learn about flatworms and their characteristics.",

    keyConcepts: [

      "Example: Ascaris (Roundworms)",

      "Features of flatworms"

    ],

    lecture: `

      <h2>Acoelomate Animals (Platyhelminthes)</h2>

      <p>Platyhelminthes are flatworms with a simple body plan, lacking a coelom.</p>

      <h3>Examples:</h3>

      <ul>

        <li><strong>Ascaris:</strong> Parasitic roundworm infecting humans and other animals.</li>

      </ul>

    `

  },

  "segmented-worms": {

    title: "Coelomate Animals (Segmented Worms)",

    description: "Study segmented worms such as earthworms and their importance.",

    keyConcepts: [

      "Example: Earthworm",

      "Segmentation and movement"

    ],

    lecture: `

      <h2>Coelomate Animals (Segmented Worms)</h2>

      <p>Segmented worms have a body divided into segments, aiding in movement and flexibility.</p>

      <h3>Examples:</h3>

      <ul>

        <li><strong>Earthworm:</strong> Important for soil aeration and fertility.</li>

      </ul>

    `

  },

  "mollusca": {

    title: "Mollusca",

    description: "Understand the characteristics of mollusks such as snails and cephalopods.",

    keyConcepts: [

      "Examples: Land snails, Cephalopods",

      "Features of mollusks"

    ],

    lecture: `

      <h2>Mollusca</h2>

      <p>Mollusks are soft-bodied animals, often protected by a hard shell.</p>

      <h3>Examples:</h3>

      <ul>

        <li><strong>Land Snails:</strong> Terrestrial mollusks with coiled shells.</li>

        <li><strong>Cephalopods:</strong> Marine mollusks, such as squids and octopuses, known for their intelligence and mobility.</li>

      </ul>

    `

  },

  "arthropods": {

    title: "Arthropods",

    description: "Study the diversity of arthropods, including insects, crustaceans, and arachnids.",

    keyConcepts: [

      "Aquatic Mandibulates: Crayfish (Crustacea)",

      "Terrestrial Mandibulates: Centipedes, Millipedes, Insects",

      "Chelicerates: Scorpions, Spiders"

    ],

    lecture: `

      <h2>Arthropods</h2>

      <p>Arthropods are characterized by segmented bodies, jointed appendages, and exoskeletons.</p>

      <h3>Examples:</h3>

      <ul>

        <li><strong>Crustacea:</strong> Aquatic arthropods like crayfish.</li>

        <li><strong>Insects:</strong> Terrestrial arthropods, including beetles and butterflies.</li>

        <li><strong>Chelicerates:</strong> Spiders and scorpions.</li>

      </ul>

    `

  },

  "echinodermata": {

    title: "Echinodermata",

    description: "Learn about echinoderms such as starfish and their unique features.",

    keyConcepts: [

      "Example: Starfish",

      "Radial symmetry and water vascular system"

    ],

    lecture: `

      <h2>Echinodermata</h2>

      <p>Echinoderms are marine animals with radial symmetry and a water vascular system for movement and feeding.</p>

      <h3>Example:</h3>

      <ul>

        <li><strong>Starfish:</strong> Known for their ability to regenerate lost limbs.</li>

      </ul>

    `

  },

  "protochordates": {

    title: "Protochordates",

    description: "Study the characteristics of protochordates such as tunicates.",

    keyConcepts: [

      "Example: Tunicates",

      "Features of protochordates"

    ],

    lecture: `

      <h2>Protochordates</h2>

      <p>Protochordates are primitive chordates that exhibit some features of higher chordates.</p>

      <h3>Example:</h3>

      <ul>

        <li><strong>Tunicates:</strong> Sessile marine animals with a sac-like body plan.</li>

      </ul>

    `

  },

  "chordates": {

    title: "Chordates",

    description: "Explore the characteristics and diversity of chordates, including fishes, birds, and mammals.",

    keyConcepts: [

      "General characteristics",

      "Diversity: Fishes, Amphibians, Reptiles, Birds, Mammals"

    ],

    lecture: `

      <h2>Chordates</h2>

      <p>Chordates are animals characterized by a notochord, dorsal nerve cord, and pharyngeal slits at some stage of development.</p>

      <h3>Diversity:</h3>

      <ul>

        <li><strong>Fishes:</strong> Aquatic vertebrates with gills and fins.</li>

        <li><strong>Birds:</strong> Warm-blooded vertebrates with feathers and the ability to fly.</li>

        <li><strong>Mammals:</strong> Vertebrates with hair and mammary glands for nursing young.</li>

      </ul>

    `

  }

};

// Elements

const topicsSection = document.getElementById("topics-section");

const topicDetailsSection = document.getElementById("topic-details-section");

const topicContent = document.getElementById("topic-content");

const backButton = document.getElementById("back-button");

// Event listener for topic links

document.querySelectorAll(".topic-link").forEach(link => {

  link.addEventListener("click", (event) => {

    event.preventDefault();

    const topicId = event.target.dataset.topic;

    loadTopicContent(topicId);

  });

});

// Back button event listener

backButton.addEventListener("click", () => {

  topicsSection.classList.remove("hidden");

  topicDetailsSection.classList.add("hidden");

});

// Function to load topic content dynamically

function loadTopicContent(topicId) {

  const topic = topicsContent[topicId];

  if (topic) {

    topicContent.innerHTML = `

      <h1>${topic.title}</h1>

      <p>${topic.description}</p>

      <h2>Key Concepts</h2>

      <ul>

        ${topic.keyConcepts.map(concept => `<li>${concept}</li>`).join("")}

      </ul>

      <h2>Lecture</h2>

      ${topic.lecture}

    `;

    // Show the topic details section and hide the topics list

    topicsSection.classList.add("hidden");

    topicDetailsSection.classList.remove("hidden");

  }

}