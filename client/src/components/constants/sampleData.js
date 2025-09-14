export const sampleProfile = {
  id: "1",
  name: "Alex Johnson",
  username: "alex.johnson@example.com",
  about:
    "Passionate learner on a journey to master multiple subjects with AI-powered tutoring. Currently focusing on STEM subjects and literature.",
  avatar: "https://www.w3schools.com/howto/img_avatar.png",
  yourBatches: [
    {
      id: "1",
      title: "Advanced Mathematics",
      description:
        "Personalized mathematics course covering calculus, algebra, and advanced concepts tailored to your learning pace.",
      isCompleted: false,
      progress: "65%",
      subject: "Mathematics",
      level: "Advanced",
      instructor: "AI Tutor Alpha",
      currentChapter: "Chapter 8: Integration",
      nextSession: "Tomorrow, 3:00 PM",
    },
    {
      id: "2",
      title: "Physics Fundamentals",
      description:
        "Interactive physics learning with AI guidance covering mechanics, thermodynamics, and electromagnetism.",
      isCompleted: false,
      progress: "40%",
      subject: "Physics",
      level: "Intermediate",
      instructor: "AI Tutor Beta",
      currentChapter: "Chapter 4: Motion",
      nextSession: "Today, 5:00 PM",
    },
    {
      id: "3",
      title: "Organic Chemistry",
      description:
        "Deep dive into organic chemistry with AI-powered explanations and personalized practice sessions.",
      isCompleted: true,
      progress: "100%",
      subject: "Chemistry",
      level: "Advanced",
      instructor: "AI Tutor Gamma",
      currentChapter: "Course Completed",
      nextSession: "Certificate Available",
    },
    {
      id: "4",
      title: "English Literature",
      description:
        "Explore literature with AI guidance focusing on critical analysis and improving writing skills.",
      isCompleted: false,
      progress: "25%",
      subject: "English",
      level: "Intermediate",
      instructor: "AI Tutor Delta",
      currentChapter: "Chapter 2: Poetry Analysis",
      nextSession: "Friday, 4:00 PM",
    },
    {
      id: "5",
      title: "Computer Science Basics",
      description:
        "Learn programming fundamentals with AI mentor providing personalized coding challenges and guidance.",
      isCompleted: true,
      progress: "100%",
      subject: "Computer Science",
      level: "Beginner",
      instructor: "AI Tutor Epsilon",
      currentChapter: "Course Completed",
      nextSession: "Certificate Available",
    },
    {
      id: "6",
      title: "History & Civics",
      description:
        "Comprehensive study of Indian history and civics with AI-powered interactive learning experience.",
      isCompleted: false,
      progress: "0%",
      subject: "History",
      level: "Intermediate",
      instructor: "AI Tutor Zeta",
      currentChapter: "Not Started",
      nextSession: "Starts March 1st",
    },
  ],
};

// Sample chat messages for each batch - notes related conversations
export const sampleChatMessages = {
  "batch-1": [
    {
      id: 1,
      sender: "ai",
      message:
        "Namaste! Integration ka chapter start kar rahe hain. Koi doubt ho toh poochna, main step by step explain karunga.",
      timestamp: new Date(2024, 8, 14, 9, 0),
      type: "text",
      relatedSection: "integration-basics",
    },
    {
      id: 2,
      sender: "student",
      message:
        "Sir, integration by parts ka formula samajh nahi aa raha. Kya aap explain kar sakte hain?",
      timestamp: new Date(2024, 8, 14, 9, 5),
      type: "text",
      relatedSection: "integration-techniques",
    },
    {
      id: 3,
      sender: "ai",
      message:
        "Bilkul! Integration by parts: ∫u dv = uv - ∫v du. Yahan u aur dv choose karna important hai. ILATE rule use karo - Inverse, Logarithmic, Algebraic, Trigonometric, Exponential.",
      timestamp: new Date(2024, 8, 14, 9, 7),
      type: "text",
      relatedSection: "integration-techniques",
    },
    {
      id: 4,
      sender: "student",
      message: "ILATE rule kya hai sir? Thoda detail mein batayiye.",
      timestamp: new Date(2024, 8, 14, 9, 10),
      type: "text",
      relatedSection: "integration-techniques",
    },
    {
      id: 5,
      sender: "ai",
      message:
        "ILATE rule se hum decide karte hain ki kaun sa function 'u' choose karna hai:\nI - Inverse trig (arcsin, arccos)\nL - Logarithmic (ln x, log x)\nA - Algebraic (x², x³)\nT - Trigonometric (sin x, cos x)\nE - Exponential (eˣ, aˣ)\n\nJo pehle aaye priority list mein, woh 'u' hoga!",
      timestamp: new Date(2024, 8, 14, 9, 12),
      type: "text",
      relatedSection: "integration-techniques",
    },
  ],
  "batch-2": [
    {
      id: 1,
      sender: "ai",
      message:
        "Physics mein motion kafi interesting topic hai! Koi confusion ho toh batana, main examples se explain karunga.",
      timestamp: new Date(2024, 8, 14, 10, 0),
      type: "text",
      relatedSection: "motion-basics",
    },
    {
      id: 2,
      sender: "student",
      message:
        "Sir, displacement aur distance mein kya difference hai? Same toh lagta hai.",
      timestamp: new Date(2024, 8, 14, 10, 5),
      type: "text",
      relatedSection: "motion-basics",
    },
    {
      id: 3,
      sender: "ai",
      message:
        "Good question! Distance total path length hai jo travel kiya, hamesha positive. Displacement shortest path hai starting se ending point tak, yeh negative bhi ho sakta hai. Example: Agar tum ghar se school 5km jaao aur wapas 3km aao, distance = 8km but displacement = 2km.",
      timestamp: new Date(2024, 8, 14, 10, 7),
      type: "text",
      relatedSection: "motion-basics",
    },
    {
      id: 4,
      sender: "student",
      message:
        "Acceleration ka formula v = u + at hai, but derivation kaise karte hain?",
      timestamp: new Date(2024, 8, 14, 10, 12),
      type: "text",
      relatedSection: "kinematics",
    },
    {
      id: 5,
      sender: "ai",
      message:
        "Acceleration = change in velocity / time\na = (v - u) / t\nRearranging: at = v - u\nTherefore: v = u + at\n\nYeh first equation of motion hai. Graphs se bhi derive kar sakte hain!",
      timestamp: new Date(2024, 8, 14, 10, 15),
      type: "text",
      relatedSection: "kinematics",
    },
  ],
  "batch-3": [
    {
      id: 1,
      sender: "ai",
      message:
        "Chemistry mein atomic structure sabse fundamental topic hai. Questions aa rahe hain toh poochte jao!",
      timestamp: new Date(2024, 8, 14, 11, 0),
      type: "text",
      relatedSection: "atomic-structure",
    },
    {
      id: 2,
      sender: "student",
      message:
        "Sir, electron configuration kaise write karte hain? Aufbau principle samajh nahi aa raha.",
      timestamp: new Date(2024, 8, 14, 11, 3),
      type: "text",
      relatedSection: "electron-configuration",
    },
    {
      id: 3,
      sender: "ai",
      message:
        "Aufbau principle kehta hai electrons lowest energy orbitals mein pehle bharte hain. Order hai: 1s, 2s, 2p, 3s, 3p, 4s, 3d, 4p...\nHund's rule: Same energy orbitals mein pehle ek-ek electron, phir pairing.\nPauli exclusion: Ek orbital mein maximum 2 electrons, opposite spins.",
      timestamp: new Date(2024, 8, 14, 11, 6),
      type: "text",
      relatedSection: "electron-configuration",
    },
  ],
  "batch-4": [
    {
      id: 1,
      sender: "ai",
      message:
        "English grammar important hai communication ke liye. Doubts clear karne mein main help karunga!",
      timestamp: new Date(2024, 8, 14, 12, 0),
      type: "text",
      relatedSection: "grammar-basics",
    },
    {
      id: 2,
      sender: "student",
      message:
        "Sir, tenses mein confusion hota hai. Present perfect aur simple past kab use karte hain?",
      timestamp: new Date(2024, 8, 14, 12, 3),
      type: "text",
      relatedSection: "tenses",
    },
    {
      id: 3,
      sender: "ai",
      message:
        "Simple Past: Specific time mein completed action (Yesterday I went to market)\nPresent Perfect: Action completed but time period continues (I have finished my homework - today is not over)\nKey difference: Specific time mention = Simple Past, No specific time/relevance to now = Present Perfect",
      timestamp: new Date(2024, 8, 14, 12, 6),
      type: "text",
      relatedSection: "tenses",
    },
  ],
  "batch-5": [
    {
      id: 1,
      sender: "ai",
      message:
        "Programming concepts clear karne ke liye examples ke saath explain karunga. Koi doubt ho toh batao!",
      timestamp: new Date(2024, 8, 14, 13, 0),
      type: "text",
      relatedSection: "programming-basics",
    },
    {
      id: 2,
      sender: "student",
      message:
        "Sir, loops aur recursion mein kya difference hai? Dono repetition hi karte hain na?",
      timestamp: new Date(2024, 8, 14, 13, 5),
      type: "text",
      relatedSection: "control-structures",
    },
    {
      id: 3,
      sender: "ai",
      message:
        "Good observation! Loops iterative approach hai - ek block ko repeat karte hain. Recursion mein function khud ko call karta hai. Memory usage different hai: loops less memory, recursion more memory (call stack). Use cases: loops for simple repetition, recursion for tree/hierarchical problems.",
      timestamp: new Date(2024, 8, 14, 13, 8),
      type: "text",
      relatedSection: "control-structures",
    },
  ],
  "batch-6": [
    {
      id: 1,
      sender: "ai",
      message:
        "History mein dates aur events connect karna important hai. Timeline based questions aa rahe hain toh poochna!",
      timestamp: new Date(2024, 8, 14, 14, 0),
      type: "text",
      relatedSection: "historical-events",
    },
    {
      id: 2,
      sender: "student",
      message:
        "Sir, World War I aur II ke causes similar the? Kya relation tha dono mein?",
      timestamp: new Date(2024, 8, 14, 14, 5),
      type: "text",
      relatedSection: "world-wars",
    },
    {
      id: 3,
      sender: "ai",
      message:
        "WWI causes: Imperialism, Alliance system, Nationalism, Militarism (MAIN). WWII directly connected to WWI - Treaty of Versailles ne Germany ko weaken kiya, economic depression, Hitler ka rise. WWI ne foundation rakha WWII ke liye. Unfinished business tha basically.",
      timestamp: new Date(2024, 8, 14, 14, 8),
      type: "text",
      relatedSection: "world-wars",
    },
  ],
};

export const sampleBatches = [
  {
    id: "1",
    name: "Advanced Mathematics",
    subject: "Mathematics",
    level: "Advanced",
    duration: "12 weeks",
    progress: "65%",
    rating: 4.8,
    instructor: "AI Tutor Alpha",
    description:
      "Personalized mathematics course covering calculus, algebra, and advanced concepts tailored to your learning pace.",
    bgGradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    isCompleted: false,
    startDate: "2025-01-15",
    category: "Personal Study",
    currentChapter: "Chapter 8: Integration",
    totalChapters: 15,
    nextSession: "Tomorrow, 3:00 PM",
  },
  {
    id: "2",
    name: "Physics Fundamentals",
    subject: "Physics",
    level: "Intermediate",
    duration: "10 weeks",
    progress: "40%",
    rating: 4.6,
    instructor: "AI Tutor Beta",
    description:
      "Interactive physics learning with AI guidance covering mechanics, thermodynamics, and electromagnetism.",
    bgGradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    isCompleted: false,
    startDate: "2025-02-01",
    category: "Personal Study",
    currentChapter: "Chapter 4: Motion",
    totalChapters: 12,
    nextSession: "Today, 5:00 PM",
  },
  {
    id: "3",
    name: "Organic Chemistry",
    subject: "Chemistry",
    level: "Advanced",
    duration: "14 weeks",
    progress: "100%",
    rating: 4.7,
    instructor: "AI Tutor Gamma",
    description:
      "Deep dive into organic chemistry with AI-powered explanations and personalized practice sessions.",
    bgGradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    isCompleted: true,
    startDate: "2025-01-20",
    category: "Personal Study",
    currentChapter: "Course Completed",
    totalChapters: 14,
    nextSession: "Certificate Available",
  },
  {
    id: "4",
    name: "English Literature",
    subject: "English",
    level: "Intermediate",
    duration: "8 weeks",
    progress: "25%",
    rating: 4.5,
    instructor: "AI Tutor Delta",
    description:
      "Explore literature with AI guidance focusing on critical analysis and improving writing skills.",
    bgGradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
    isCompleted: false,
    startDate: "2025-02-10",
    category: "Personal Study",
    currentChapter: "Chapter 2: Poetry Analysis",
    totalChapters: 10,
    nextSession: "Friday, 4:00 PM",
  },
  {
    id: "5",
    name: "Computer Science Basics",
    subject: "Computer Science",
    level: "Beginner",
    duration: "16 weeks",
    progress: "100%",
    rating: 4.9,
    instructor: "AI Tutor Epsilon",
    description:
      "Learn programming fundamentals with AI mentor providing personalized coding challenges and guidance.",
    bgGradient: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
    isCompleted: true,
    startDate: "2025-01-25",
    category: "Personal Study",
    currentChapter: "Course Completed",
    totalChapters: 16,
    nextSession: "Certificate Available",
  },
  {
    id: "6",
    name: "History & Civics",
    subject: "History",
    level: "Intermediate",
    duration: "6 weeks",
    progress: "0%",
    rating: 4.4,
    instructor: "AI Tutor Zeta",
    description:
      "Comprehensive study of Indian history and civics with AI-powered interactive learning experience.",
    bgGradient: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)",
    isCompleted: false,
    startDate: "2025-03-01",
    category: "Personal Study",
    currentChapter: "Not Started",
    totalChapters: 8,
    nextSession: "Starts March 1st",
  },
];

// AI-generated notes for each batch - Demo data created by AI Teacher
export const sampleBatchNotes = {
  1: {
    // Advanced Mathematics - Chapter 8: Integration
    batchId: "1",
    currentChapter: "Chapter 8: Integration",
    chapterContent: {
      title: "Integration - The Reverse Process of Differentiation",
      introduction:
        "Welcome to Chapter 8! Today we'll explore integration, which is essentially the reverse process of differentiation. Think of it as finding the original function when you know its rate of change.",

      sections: [
        {
          id: "8.1",
          title: "What is Integration?",
          content:
            "Integration is the mathematical process of finding the antiderivative of a function. If differentiation tells us the rate of change, integration tells us the accumulated change over an interval.",
          keyPoints: [
            "Integration symbol: ∫ (Integral sign)",
            "Basic formula: ∫f(x)dx = F(x) + C",
            "C is the constant of integration - always added in indefinite integrals",
            "∫ represents the sum of infinitely small parts",
          ],
          diagram:
            "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=500&h=300",
          examples: [
            {
              problem: "Solve ∫3x²dx",
              solution: "x³ + C",
              explanation:
                "Using power rule: increase power by 1 (2+1=3), then divide coefficient by new power (3/3=1)",
            },
          ],
        },
        {
          id: "8.2",
          title: "Basic Integration Rules",
          content:
            "These fundamental rules make integration systematic and predictable. Mastering these rules is essential for solving complex problems.",
          keyPoints: [
            "Power Rule: ∫xⁿdx = x^(n+1)/(n+1) + C (when n ≠ -1)",
            "Constant Rule: ∫k dx = kx + C (constants can be factored out)",
            "Sum Rule: ∫[f(x) + g(x)]dx = ∫f(x)dx + ∫g(x)dx",
            "Difference Rule: ∫[f(x) - g(x)]dx = ∫f(x)dx - ∫g(x)dx",
          ],
          diagram:
            "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=500&h=300",
          examples: [
            {
              problem: "Solve ∫(2x³ + 5x - 7)dx",
              solution: "2x⁴/4 + 5x²/2 - 7x + C = x⁴/2 + 5x²/2 - 7x + C",
              explanation:
                "Apply power rule to each term separately. Keep constants intact.",
            },
          ],
        },
        {
          id: "8.3",
          title: "Definite vs Indefinite Integrals",
          content:
            "Understanding the difference between these two types is crucial for solving real-world problems and applications.",
          keyPoints: [
            "Indefinite: ∫f(x)dx = F(x) + C (no limits, general solution)",
            "Definite: ∫[a to b]f(x)dx = F(b) - F(a) (with limits, specific numerical value)",
            "In definite integrals, the constant C cancels out",
            "Definite integrals represent area under the curve",
          ],
          diagram:
            "https://images.unsplash.com/photo-1596495578065-6e0763fa1178?w=500&h=300",
        },
      ],

      practiceProblems: [
        {
          id: 1,
          question: "Find ∫(4x³ - 2x + 1)dx",
          difficulty: "easy",
          hint: "Apply the power rule to each term separately",
        },
        {
          id: 2,
          question: "Evaluate ∫[0 to 2](x² + 3x)dx",
          difficulty: "medium",
          hint: "First find the antiderivative, then apply the limits",
        },
        {
          id: 3,
          question: "Find the area under the curve y = x² from x = 1 to x = 3",
          difficulty: "hard",
          hint: "Set up a definite integral for area calculation",
        },
      ],

      voiceNotes: {
        introduction:
          "Hello everyone! Main aapka AI teacher hu. Aaj hum integration sikhenge jo bahut interesting aur useful topic hai engineering aur physics mein!",
        keyExplanation:
          "Integration basically differentiation ka reverse process hai. Agar aapko differentiation aati hai, toh integration bhi easily samajh aa jayegi.",
        checkUnderstanding:
          "Integration ka basic concept clear hai na? Main aage proceed karu ya koi doubt hai?",
      },
    },
  },

  2: {
    // Physics Fundamentals - Chapter 4: Motion
    batchId: "2",
    currentChapter: "Chapter 4: Motion",
    chapterContent: {
      title: "Understanding Motion - From Rest to Speed",
      introduction:
        "Motion is everywhere around us! From a car driving to planets moving, everything involves motion. Understanding motion helps us predict and control the world around us.",

      sections: [
        {
          id: "4.1",
          title: "Types of Motion",
          content:
            "Motion can be classified into different types based on the path taken by the object. This classification is fundamental in physics.",
          keyPoints: [
            "Linear Motion: Movement in a straight line (like a car on highway)",
            "Circular Motion: Movement in a circular path (like a fan blade)",
            "Oscillatory Motion: Repeated back and forth motion (like a pendulum)",
            "Random Motion: Unpredictable movement (like gas molecules)",
            "Rotational Motion: Object spins around its own axis",
          ],
          diagram:
            "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=500&h=300",
          examples: [
            {
              problem:
                "A car moving on a straight highway - what type of motion is this?",
              solution: "Linear Motion",
              explanation: "Because the path is a straight line, not curved",
            },
          ],
        },
        {
          id: "4.2",
          title: "Distance vs Displacement - Key Difference",
          content:
            "These are two concepts that are often confused but have distinct meanings in physics. Understanding the difference is very important.",
          keyPoints: [
            "Distance: Total path length traveled (scalar quantity - only magnitude)",
            "Displacement: Shortest distance between start and end point (vector - magnitude + direction)",
            "Distance is always positive, displacement can be negative",
            "Displacement depends only on initial and final positions",
          ],
          diagram:
            "https://images.unsplash.com/photo-1551818255-e6e10975bc17?w=500&h=300",
          examples: [
            {
              problem:
                "You walk 3m east, then 4m west. Find distance and displacement.",
              solution: "Distance = 7m, Displacement = 1m west",
              explanation:
                "Distance adds all paths, displacement shows net change in position",
            },
          ],
        },
        {
          id: "4.3",
          title: "Speed vs Velocity",
          content:
            "Another important concept pair that students often confuse. In physics, precision in terminology is very important.",
          keyPoints: [
            "Speed: Distance per unit time (scalar - only magnitude)",
            "Velocity: Displacement per unit time (vector - magnitude + direction)",
            "Average speed = Total distance / Total time",
            "Average velocity = Total displacement / Total time",
          ],
          diagram:
            "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=300",
        },
      ],

      practiceProblems: [
        {
          id: 1,
          question:
            "A person walks 5km north then 3km south. Calculate total distance and displacement.",
          difficulty: "easy",
          hint: "Remember distance is scalar, displacement is vector",
        },
        {
          id: 2,
          question:
            "Classify the motion: (a) Earth around Sun (b) Pendulum (c) Bullet from gun",
          difficulty: "medium",
          hint: "Think about the path taken by each object - straight, circular, or oscillatory",
        },
        {
          id: 3,
          question:
            "A car travels 60 km/h for 2 hours in east direction. Find speed and velocity.",
          difficulty: "medium",
          hint: "Calculate both speed and velocity with proper units",
        },
      ],

      voiceNotes: {
        introduction:
          "Namaste students! Aaj hum motion ke fundamentals sikhenge. Ye physics ka building block hai aur daily life mein bohot useful hai.",
        keyExplanation:
          "Distance aur displacement mein difference samajhna crucial hai. Ye concept aage ki physics mein bahut use hoga.",
        checkUnderstanding:
          "Motion ke types clear ho gaye? Speed aur velocity ka difference samajh aa gaya? Koi doubt hai toh freely pooch sakte ho!",
      },
    },
  },

  3: {
    // Organic Chemistry - Course Completed
    batchId: "3",
    currentChapter: "Course Completed - Revision Mode",
    chapterContent: {
      title: "Organic Chemistry Mastery - Congratulations!",
      introduction:
        "Congratulations! You have successfully completed the comprehensive organic chemistry course! Here's a summary of the key concepts you've mastered.",

      sections: [
        {
          id: "Rev.1",
          title: "Carbon Bonding Mastery",
          content:
            "You have mastered the bonding properties of carbon, which forms the foundation of organic chemistry.",
          keyPoints: [
            "Carbon's tetravalency (4 bonds) perfectly understood",
            "Hybridization concepts (sp3, sp2, sp) are clear",
            "Chain formation and branching patterns mastered",
            "Functional group identification expertise achieved",
          ],
          diagram:
            "https://images.unsplash.com/photo-1582719471137-c3967ffb1c42?w=500&h=300",
          examples: [
            {
              problem:
                "Identifying functional groups in complex organic compounds",
              solution: "Successfully identified",
              explanation:
                "Through practice and understanding, this has become easy",
            },
          ],
        },
        {
          id: "Rev.2",
          title: "Reaction Mechanisms Expert",
          content:
            "You have detailed understanding of organic reaction mechanisms. Now you can predict how reactions will proceed.",
          keyPoints: [
            "SN1, SN2 mechanisms are clear",
            "Addition and elimination reactions understood",
            "Stereochemistry concepts mastered",
            "Can predict reaction conditions and outcomes",
          ],
          diagram:
            "https://images.unsplash.com/photo-1564325724739-bae0bd08762c?w=500&h=300",
        },
        {
          id: "Rev.3",
          title: "Practical Applications Knowledge",
          content:
            "You understand real-world applications of organic chemistry - from medicines to polymers.",
          keyPoints: [
            "Drug design principles understood",
            "Polymer chemistry basics clear",
            "Role of organic chemistry in industrial processes",
            "Environmental impact and green chemistry awareness",
          ],
          diagram:
            "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=500&h=300",
        },
      ],

      practiceProblems: [
        {
          id: 1,
          question:
            "Design a synthesis route for aspirin from simple starting materials",
          difficulty: "hard",
          hint: "Use multi-step synthesis planning",
        },
        {
          id: 2,
          question:
            "Predict the major product and mechanism for the given complex reaction",
          difficulty: "hard",
          hint: "Apply all learned mechanisms",
        },
      ],

      voiceNotes: {
        introduction:
          "Congratulations! Aapne organic chemistry ko successfully complete kar diya! This is a major achievement!",
        keyExplanation:
          "Ab aap organic chemistry ke concepts ko real-world problems solve karne ke liye use kar sakte hain.",
        checkUnderstanding:
          "Kya aap ready hain advanced topics explore karne ke liye? Ya koi specific area mein aur practice chahiye?",
      },
    },
  },

  4: {
    // English Literature - Chapter 2: Poetry Analysis
    batchId: "4",
    currentChapter: "Chapter 2: Poetry Analysis",
    chapterContent: {
      title: "Poetry Analysis - Reading Between the Lines",
      introduction:
        "Poetry is not just words on a page - it's emotion, imagery, and deep meaning woven together. Let's learn to uncover the hidden layers of poetic expression.",

      sections: [
        {
          id: "2.1",
          title: "Literary Devices in Poetry",
          content:
            "Poets use various tools to create impact and convey meaning beyond literal words. These devices make poetry powerful and memorable.",
          keyPoints: [
            "Metaphor: Indirect comparison (Life is a journey - no 'like' used)",
            "Simile: Direct comparison with 'like' or 'as' (Brave as a lion)",
            "Alliteration: Repetition of initial sounds (Peter Piper picked)",
            "Rhyme Scheme: Rhyming pattern (ABAB, AABB, ABCD)",
            "Imagery: Vivid descriptions that appeal to the senses",
          ],
          diagram:
            "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=500&h=300",
          examples: [
            {
              problem:
                "'The classroom was a zoo' - which literary device is this?",
              solution: "Metaphor",
              explanation:
                "The classroom is compared to a zoo without using 'like' or 'as'",
            },
          ],
        },
        {
          id: "2.2",
          title: "Theme and Tone Analysis",
          content:
            "Understanding what the poet wants to convey and how they feel about their subject. These skills develop critical thinking.",
          keyPoints: [
            "Theme: Central message or main idea of the poem",
            "Tone: Poet's attitude towards the subject (happy, sad, angry, nostalgic)",
            "Mood: Emotional atmosphere created for the reader",
            "Context: Historical and personal background affecting the poem",
          ],
          diagram:
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=300",
          examples: [
            {
              problem:
                "Analyze the tone in 'Shall I compare thee to a summer's day?'",
              solution: "Romantic and admiring tone",
              explanation:
                "The beloved is elevated above nature's beauty through the comparison",
            },
          ],
        },
        {
          id: "2.3",
          title: "Poetry Forms and Structures",
          content:
            "Understanding different poetry forms is important for analysis. Structure enhances meaning and impact.",
          keyPoints: [
            "Sonnet: 14 lines with specific rhyme scheme",
            "Haiku: Japanese form - 5-7-5 syllable pattern",
            "Free Verse: No fixed rhyme or meter",
            "Blank Verse: Unrhymed but rhythmic",
          ],
          diagram:
            "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=500&h=300",
        },
      ],

      practiceProblems: [
        {
          id: 1,
          question:
            "'The fair breeze blew, the white foam flew' - find three literary devices",
          difficulty: "easy",
          hint: "Look for alliteration, imagery, and sound patterns",
        },
        {
          id: 2,
          question: "What is the theme of Robert Frost's 'The Road Not Taken'?",
          difficulty: "medium",
          hint: "Think about choices and their consequences in life",
        },
        {
          id: 3,
          question:
            "Identify the rhyme scheme in a Shakespeare sonnet and analyze its theme",
          difficulty: "hard",
          hint: "Look for ABAB CDCD EFEF GG pattern and explore love themes",
        },
      ],

      voiceNotes: {
        introduction:
          "Hello students! Aaj hum poetry analysis sikhenge jo literature ka bohot beautiful aur interesting part hai. Creative thinking develop karegi ye!",
        keyExplanation:
          "Poetry mein har word deliberate choice hai poet ka. Literary devices samajhna important hai deeper meaning understand karne ke liye.",
        checkUnderstanding:
          "Literary devices clear hain? Metaphor aur simile ka difference samajh aa gaya? Koi confusion hai toh feel free to ask!",
      },
    },
  },

  5: {
    // Computer Science Basics - Course Completed
    batchId: "5",
    currentChapter: "Course Completed - Programming Foundation Complete!",
    chapterContent: {
      title: "Computer Science Foundation Complete - Well Done!",
      introduction:
        "Amazing! You have successfully completed computer science fundamentals! From basic concepts to programming skills, everything has been covered.",

      sections: [
        {
          id: "CS.1",
          title: "Programming Logic Mastery",
          content:
            "From basic programming concepts to complex problem-solving, you have mastered everything. Your foundation is very strong now.",
          keyPoints: [
            "Variables, Data Types, and Operations perfectly clear",
            "Conditional statements (if-else) and loops (for, while) mastered",
            "Functions and modular programming understood",
            "Arrays and basic data structures comfortable",
          ],
          diagram:
            "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&h=300",
          examples: [
            {
              problem: "Handling complex nested loops and conditions",
              solution: "Can solve efficiently",
              explanation: "Logical thinking and practice have been developed",
            },
          ],
        },
        {
          id: "CS.2",
          title: "Algorithm Design Skills",
          content:
            "Your problem-solving approach has become systematic. You have developed skills to design and analyze algorithms.",
          keyPoints: [
            "Problem breakdown approach mastered",
            "Pseudocode writing and flowcharts comfortable",
            "Basic sorting algorithms (bubble, selection) understood",
            "Basic concept of time complexity clear",
          ],
          diagram:
            "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=300",
        },
        {
          id: "CS.3",
          title: "Practical Programming Experience",
          content:
            "You have worked on real programming projects and developed debugging skills. Ready for next level challenges.",
          keyPoints: [
            "Exposure to multiple programming languages (Python/Java basics)",
            "Debugging and error handling comfortable",
            "Code documentation and commenting habits developed",
            "Basic project development cycle understood",
          ],
          diagram:
            "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=500&h=300",
        },
      ],

      practiceProblems: [
        {
          id: 1,
          question:
            "Design an efficient algorithm for a student grade management system",
          difficulty: "hard",
          hint: "Use OOP concepts and data structures",
        },
        {
          id: 2,
          question: "Create a mini project combining all learned concepts",
          difficulty: "hard",
          hint: "Build a calculator, simple game, or utility program",
        },
      ],

      voiceNotes: {
        introduction:
          "Fantastic work! Computer science foundation course complete kar diya! Now you're ready for advanced programming challenges!",
        keyExplanation:
          "Aapne jo programming mindset develop ki hai, ye lifelong useful rahegi. Technology industry mein ye skills very valuable hain.",
        checkUnderstanding:
          "Ready hain advanced topics like web development, mobile apps, ya data science explore karne ke liye? Next goal kya hai?",
      },
    },
  },

  6: {
    // History & Civics - Not Started Yet
    batchId: "6",
    currentChapter: "Course Introduction - Ready to Start!",
    chapterContent: {
      title: "Indian History & Civics - Journey Through Time",
      introduction:
        "Welcome to an exciting journey through Indian history and civics! We will explore India's rich heritage, freedom struggle, and modern governance system.",

      sections: [
        {
          id: "Intro.1",
          title: "Course Overview - What Will We Learn?",
          content:
            "This is a comprehensive course on Indian history and civics, specially designed with current relevance. We'll cover everything from ancient times to modern India.",
          keyPoints: [
            "Ancient India: From Indus Valley to Gupta Dynasty",
            "Medieval Period: Mughal Empire and regional kingdoms",
            "Freedom Struggle: Detailed analysis from 1857 to 1947",
            "Modern India: Constitution, governance, and current affairs",
            "Civics: Rights, duties, and democratic processes",
          ],
          diagram:
            "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=300",
          examples: [
            {
              problem: "Why was the Indian freedom struggle unique globally?",
              solution:
                "Because of the combination of non-violence and mass participation",
              explanation:
                "Gandhi's satyagraha showed the world a new approach",
            },
          ],
        },
        {
          id: "Intro.2",
          title: "Interactive Learning Approach",
          content:
            "We won't just do rote learning - the focus will be on critical thinking and analysis. We'll connect historical lessons with current events.",
          keyPoints: [
            "Timeline-based learning with visual aids",
            "Map work and geographical context integration",
            "Analysis of primary sources and historical documents",
            "Comparative study with world history",
            "Current affairs connection with historical background",
          ],
          diagram:
            "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=500&h=300",
        },
        {
          id: "Intro.3",
          title: "Assessment and Practical Application",
          content:
            "You'll learn to apply knowledge practically. We'll also cover important topics from competitive exam perspectives.",
          keyPoints: [
            "UPSC/State PSC pattern question practice",
            "Essay writing skills development",
            "Current affairs integration",
            "Mock debates and group discussions",
            "Map pointing and timeline activities",
          ],
          diagram:
            "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=500&h=300",
        },
      ],

      practiceProblems: [
        {
          id: 1,
          question:
            "Pre-assessment: List the major civilizations of Ancient India that you know",
          difficulty: "easy",
          hint: "Think about Indus Valley, Vedic period, Mauryan Empire",
        },
        {
          id: 2,
          question:
            "Choose any current Indian political issue and research its historical background",
          difficulty: "medium",
          hint: "You can choose Kashmir, reservation system, or federal structure",
        },
      ],

      voiceNotes: {
        introduction:
          "Namaste students! Main excited hu ki aap History & Civics course start kar rahe hain! Ye journey fascinating hone wali hai!",
        keyExplanation:
          "History sirf past nahi hai - ye present ko samajhne ka key hai. India ki story truly inspiring hai struggle se success tak.",
        checkUnderstanding:
          "Ready hain time travel karne ke liye? Curious hain Indian civilization ki grandeur ke bare mein jaanne ke liye? Let's begin this amazing journey!",
      },
    },
  },
};

export const promptFormData = {
  // Batch basics
  batchName: "",
  subject: "",
  chapters: "",
  durationWeeks: "",
  teachingLevel: "Easy",
  boardType: "CBSE",
  languages: ["English"],
  isCompetitiveExam: "No",
  competitiveExamName: "",

  // Personalization
  learningGoal: "",
  examDate: "",
  priorKnowledge: "Beginner",
  preferredFormat: ["Detailed notes"],
  preferredLength: "Standard",
  visualsPreference: "When helpful",
  diagramTypes: ["Labeled diagram"],
  assessmentStyle: ["MCQ", "Short answers"],

  // Media settings (TTS + audio)
  ttsRateWpm: 115,
  ttsPitch: -2,
  ttsPauses: "Standard",
  ttsAccent: "Indian English",

  // Study plan
  studyDaysPerWeek: 5,
  minutesPerSession: 25,
  startDate: "",
  targetCompletionDate: "",

  // Inputs (syllabus, textbook, notes)
  syllabusSourceType: "none", // none | text | link
  syllabusText: "",
  syllabusUrl: "",

  // Accessibility
  dyslexiaFriendly: false,
  highContrast: false,
  hinglishTransliteration: false,
  audioCaptions: true,

  // Engagement
  gamification: true,
  notifications: ["Reminders"],

  // Misc
  otherDetails: "",
};
