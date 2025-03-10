// Data for topics and their content

const topicsContent = {
  "intro-ecology": {
    title: "Introductory Ecology",
    description: "Learn the basic concepts of ecology, including ecosystems, biomes, and environmental interactions.",
    keyConcepts: [
      "Concepts in Ecology",
      "Definition of Ecology: The Environment and Climate",
      "Habitat and Niche",
      "Autecology",
      "Synecology",
      "Ecosystem and Communities",
      "Biomes",
      "Pollution and Global Warming"
    ],
    lecture: `
      <h2>Introductory Ecology</h2>
      <p>Introductory ecology covers the basic principles of ecology, including the study of ecosystems, biomes, and the interactions between organisms and their environment.</p>
      <h3>Key Topics:</h3>
      <ul>
        <li><strong>Concepts in Ecology:</strong> Fundamental concepts such as energy flow, nutrient cycling, and population dynamics.</li>
        <li><strong>Definition of Ecology:</strong> The study of the relationships between organisms and their environment.</li>
        <li><strong>Habitat and Niche:</strong> The physical environment where an organism lives and its role within that environment.</li>
        <li><strong>Autecology:</strong> The study of individual species in relation to the environment.</li>
        <li><strong>Synecology:</strong> The study of groups of organisms in relation to their environment.</li>
        <li><strong>Ecosystem and Communities:</strong> The structure and function of ecosystems and the interactions within biological communities.</li>
        <li><strong>Biomes:</strong> Large ecological areas with distinct climates and specific plant and animal species.</li>
        <li><strong>Pollution and Global Warming:</strong> The impact of human activities on the environment and climate change.</li>
      </ul>
    `
  },
  "intro-genetics": {
    title: "Introductory Genetics",
    description: "Explore the fundamental principles of genetics, including Mendelian genetics and the molecular basis of heredity.",
    keyConcepts: [
      "Historical Development of the Science of Genetics",
      "Life Cycles and Reproduction",
      "Mendelian Genetics",
      "Chemical Composition of the Gene and Molecular Basis of Heredity"
    ],
    lecture: `
      <h2>Introductory Genetics</h2>
      <p>Introductory genetics covers the basic principles of heredity, including the historical development of genetics, Mendelian inheritance, and the molecular basis of genes.</p>
      <h3>Key Topics:</h3>
      <ul>
        <li><strong>Historical Development:</strong> The history and milestones in the field of genetics.</li>
        <li><strong>Life Cycles and Reproduction:</strong> The processes of sexual and asexual reproduction and life cycles of organisms.</li>
        <li><strong>Mendelian Genetics:</strong> The principles of inheritance discovered by Gregor Mendel, including the laws of segregation and independent assortment.</li>
        <li><strong>Chemical Composition of the Gene:</strong> The molecular structure of DNA and its role in heredity.</li>
      </ul>
    `
  },
  "intro-physiology": {
    title: "Introductory Physiology",
    description: "Understand the basic physiological processes in animals, including nutrition, excretion, respiration, and reproduction.",
    keyConcepts: [
      "Nutrition",
      "Excretions",
      "Respiration",
      "Reproduction in Animals"
    ],
    lecture: `
      <h2>Introductory Physiology</h2>
      <p>Introductory physiology covers the fundamental processes that occur in animals to maintain life, including nutrition, excretion, respiration, and reproduction.</p>
      <h3>Key Topics:</h3>
      <ul>
        <li><strong>Nutrition:</strong> The process by which animals obtain and utilize food for energy and growth.</li>
        <li><strong>Excretions:</strong> The elimination of waste products from the body.</li>
        <li><strong>Respiration:</strong> The process of exchanging gases (oxygen and carbon dioxide) with the environment.</li>
        <li><strong>Reproduction in Animals:</strong> The biological processes by which new individuals are produced.</li>
      </ul>
    `
  },
  "vertebrate-biology": {
    title: "Vertebrate Biology",
    description: "Study the biology of vertebrates, focusing on their anatomy, physiology, and evolutionary adaptations.",
    keyConcepts: [
      "Anatomy of Vertebrates",
      "Physiology of Vertebrates",
      "Evolutionary Adaptations"
    ],
    lecture: `
      <h2>Vertebrate Biology</h2>
      <p>Vertebrate biology explores the unique characteristics of vertebrates, including their anatomical structures, physiological processes, and evolutionary adaptations that enable them to thrive in diverse environments.</p>
      <h3>Key Topics:</h3>
      <ul>
        <li><strong>Anatomy of Vertebrates:</strong> The study of the physical structure of vertebrates, including skeletal, muscular, and organ systems.</li>
        <li><strong>Physiology of Vertebrates:</strong> The study of the functions and processes of vertebrate organ systems.</li>
        <li><strong>Evolutionary Adaptations:</strong> The adaptations that have evolved in vertebrates to enhance their survival and reproduction.</li>
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
