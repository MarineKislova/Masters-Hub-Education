const persons = [
  /* ------- Developer ------- */
  {
    name: "Isaac White",
    photo: "img/person/Isaac-White.png",
    alt: "Isaac-White",
    jobTitle: "Developer",
    rating: "4.5",
    skills: "JavaScript, React, Angular",
    dataTab: "developer",
    about:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi exercitationem dicta porro aliquam suscipit nisi aperiam error temporibus id quia. Modi, ad amet. Quas neque molestias architecto debitis in.",
  },
  {
    name: "Delilah Graham",
    photo: "img/person/Delilah-Graham.png",
    alt: "Delilah-Graham",
    jobTitle: "Developer",
    rating: "4.3",
    skills: "JavaScript, React, Angular",
    dataTab: "developer",
    about:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi exercitationem dicta porro aliquam suscipit nisi aperiam error temporibus id quia. Modi, ad amet. Quas neque molestias architecto debitis in.",
  },
  {
    name: "Jaxon Cox ",
    photo: "img/person/Jaxon-Cox.png",
    alt: "Jaxon-Cox",
    jobTitle: "Developer",
    rating: "4.3",
    skills: "JavaScript, React, Angular",
    dataTab: "developer",
    about:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi exercitationem dicta porro aliquam suscipit nisi aperiam error temporibus id quia. Modi, ad amet. Quas neque molestias architecto debitis in.",
  },
  {
    name: "Luna Mackay",
    photo: "img/person/Luna-Mackay.png",
    alt: "Luna-Mackay",
    jobTitle: "Developer",
    rating: "4.2",
    skills: "JavaScript, React, Angular",
    dataTab: "developer",
    about:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi exercitationem dicta porro aliquam suscipit nisi aperiam error temporibus id quia. Modi, ad amet. Quas neque molestias architecto debitis in.",
  },
  {
    name: "John Brooks",
    photo: "img/person/John-Brooks.png",
    alt: "John-Brooks",
    jobTitle: "Developer",
    rating: "5.0",
    skills: "JavaScript, React, Angular",
    dataTab: "developer",
    about:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi exercitationem dicta porro aliquam suscipit nisi aperiam error temporibus id quia. Modi, ad amet. Quas neque molestias architecto debitis in.",
  },
  {
    name: "Maisie Clark",
    photo: "img/person/Maisie-Clark.png",
    alt: "Maisie-Clark",
    jobTitle: "Developer",
    rating: "4.6",
    skills: "JavaScript, React, Angular",
    dataTab: "developer",
    about:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi exercitationem dicta porro aliquam suscipit nisi aperiam error temporibus id quia. Modi, ad amet. Quas neque molestias architecto debitis in.",
  },
  {
    name: "Sienna Bell",
    photo: "img/person/Sienna-Bell.png",
    alt: "Sienna-Bell",
    jobTitle: "Developer",
    rating: "4.5",
    skills: "JavaScript, React, Angular",
    dataTab: "developer",
    about:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi exercitationem dicta porro aliquam suscipit nisi aperiam error temporibus id quia. Modi, ad amet. Quas neque molestias architecto debitis in.",
  },
  {
    name: "Emily Henderson",
    photo: "img/person/Emily-Henderson.png",
    alt: "Emily-Henderson",
    jobTitle: "Developer",
    rating: "4.6",
    skills: "JavaScript, React, Angular",
    dataTab: "developer",
    about:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi exercitationem dicta porro aliquam suscipit nisi aperiam error temporibus id quia. Modi, ad amet. Quas neque molestias architecto debitis in.",
  },
  /* ------- UI Designer ------- */
  {
    name: "Robert Campbell ",
    photo: "img/person/Robert-Campbell.png",
    alt: "Robert-Campbell",
    jobTitle: "UI Designer",
    rating: "4.7",
    skills: "Figma, Adobe XD, Sketch, Photoshop",
    dataTab: "uiDesigner",
    about:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi exercitationem dicta porro aliquam suscipit nisi aperiam error temporibus id quia. Modi, ad amet. Quas neque molestias architecto debitis in.",
  },
  {
    name: "Ella Martin",
    photo: "img/person/Ella-Martin.png",
    alt: "Ella-Martin",
    jobTitle: "UI Designer",
    rating: "4.4",
    skills: "Figma, Adobe XD, Sketch, Photoshop",
    dataTab: "uiDesigner",
    about:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi exercitationem dicta porro aliquam suscipit nisi aperiam error temporibus id quia. Modi, ad amet. Quas neque molestias architecto debitis in.",
  },
  {
    name: "Walker Hall",
    photo: "img/person/Walker-Hall.png",
    alt: "Walker-Hall",
    jobTitle: "UI Designer",
    rating: "4.9",
    skills: "Figma, Adobe XD, Sketch, Photoshop",
    dataTab: "uiDesigner",
    about:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi exercitationem dicta porro aliquam suscipit nisi aperiam error temporibus id quia. Modi, ad amet. Quas neque molestias architecto debitis in.",
  },
  {
    name: "Evelyn Thomson",
    photo: "img/person/Evelyn-Thomson.png",
    alt: "Evelyn-Thomson",
    jobTitle: "UI Designer",
    rating: "4.6",
    skills: "Figma, Adobe XD, Sketch, Photoshop",
    dataTab: "uiDesigner",
    about:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi exercitationem dicta porro aliquam suscipit nisi aperiam error temporibus id quia. Modi, ad amet. Quas neque molestias architecto debitis in.",
  },
  {
    name: "Florence Ferguson",
    photo: "img/person/Florence-Ferguson.png",
    alt: "Florence-Ferguson",
    jobTitle: "UI Designer",
    rating: "5.0",
    skills: "Figma, Adobe XD, Sketch, Photoshop",
    dataTab: "uiDesigner",
    about:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi exercitationem dicta porro aliquam suscipit nisi aperiam error temporibus id quia. Modi, ad amet. Quas neque molestias architecto debitis in.",
  },
  {
    name: "Miles Price ",
    photo: "img/person/Miles-Price.png",
    alt: "Miles-Price",
    jobTitle: "UI Designer",
    rating: "4.9",
    skills: "Figma, Adobe XD, Sketch, Photoshop",
    dataTab: "uiDesigner",
    about:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi exercitationem dicta porro aliquam suscipit nisi aperiam error temporibus id quia. Modi, ad amet. Quas neque molestias architecto debitis in.",
  },
  {
    name: "Sofia Kerr",
    photo: "img/person/Sofia-Kerr.png",
    alt: "Sofia-Kerr",
    jobTitle: "UI Designer",
    rating: "5.0",
    skills: "Figma, Adobe XD, Sketch, Photoshop",
    dataTab: "uiDesigner",
    about:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi exercitationem dicta porro aliquam suscipit nisi aperiam error temporibus id quia. Modi, ad amet. Quas neque molestias architecto debitis in.",
  },
  {
    name: "Evelyn Gray",
    photo: "img/person/Evelyn-Gray.png",
    alt: "Evelyn-Gray",
    jobTitle: "UI Designer",
    rating: "4.5",
    skills: "Figma, Adobe XD, Sketch, Photoshop",
    dataTab: "uiDesigner",
    about:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi exercitationem dicta porro aliquam suscipit nisi aperiam error temporibus id quia. Modi, ad amet. Quas neque molestias architecto debitis in.",
  },

  /* ------- Project Manager ------- */
  {
    name: "Ada Johnston",
    photo: "img/person/Ada-Johnston.png",
    alt: "Ada-Johnston",
    jobTitle: "Project Manager",
    rating: "4.2",
    skills: "project integration management, scope management, quality assurance etc.",
    dataTab: "projectManager",
    about:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi exercitationem dicta porro aliquam suscipit nisi aperiam error temporibus id quia. Modi, ad amet. Quas neque molestias architecto debitis in.",
  },
  {
    name: "Mila Black",
    photo: "img/person/Mila-Black.png",
    alt: "Mila-Black",
    jobTitle: "Project Manager",
    rating: "4.8",
    skills: "project integration management, scope management, quality assurance etc.",
    dataTab: "projectManager",
    about:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi exercitationem dicta porro aliquam suscipit nisi aperiam error temporibus id quia. Modi, ad amet. Quas neque molestias architecto debitis in.",
  },
  {
    name: "Matilda Macleod",
    photo: "img/person/Matilda-Macleod.png",
    alt: "Matilda-Macleod",
    jobTitle: "Project Manager",
    rating: "5.0",
    skills: "project integration management, scope management, quality assurance etc.",
    dataTab: "projectManager",
    about:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi exercitationem dicta porro aliquam suscipit nisi aperiam error temporibus id quia. Modi, ad amet. Quas neque molestias architecto debitis in.",
  },
  {
    name: "Evelyn Young",
    photo: "img/person/Evelyn-Young.png",
    alt: "Evelyn-Young",
    jobTitle: "Project Manager",
    rating: "4.9",
    skills: "project integration management, scope management, quality assurance etc.",
    dataTab: "projectManager",
    about:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi exercitationem dicta porro aliquam suscipit nisi aperiam error temporibus id quia. Modi, ad amet. Quas neque molestias architecto debitis in.",
  },
  {
    name: "Beau Gray",
    photo: "img/person/Beau-Gray.png",
    alt: "Beau-Gray",
    jobTitle: "Project Manager",
    rating: "5.0",
    skills: "project integration management, scope management, quality assurance etc.",
    dataTab: "projectManager",
    about:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi exercitationem dicta porro aliquam suscipit nisi aperiam error temporibus id quia. Modi, ad amet. Quas neque molestias architecto debitis in.",
  },
  {
    name: "Ruby Black",
    photo: "img/person/Ruby-Black.png",
    alt: "Ruby-Black",
    jobTitle: "Project Manager",
    rating: "4.7",
    skills: "project integration management, scope management, quality assurance etc.",
    dataTab: "projectManager",
    about:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi exercitationem dicta porro aliquam suscipit nisi aperiam error temporibus id quia. Modi, ad amet. Quas neque molestias architecto debitis in.",
  },
  {
    name: "Leo Myers",
    photo: "img/person/Leo-Myers.png",
    alt: "Leo-Myers",
    jobTitle: "Project Manager",
    rating: "5.0",
    skills: "project integration management, scope management, quality assurance etc.",
    dataTab: "projectManager",
    about:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi exercitationem dicta porro aliquam suscipit nisi aperiam error temporibus id quia. Modi, ad amet. Quas neque molestias architecto debitis in.",
  },
  {
    name: "Rowan Nelson",
    photo: "img/person/Rowan-Nelson.png",
    alt: "Rowan-Nelson",
    jobTitle: "Project Manager",
    rating: "4.4",
    skills: "project integration management, scope management, quality assurance etc.",
    dataTab: "projectManager",
    about:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi exercitationem dicta porro aliquam suscipit nisi aperiam error temporibus id quia. Modi, ad amet. Quas neque molestias architecto debitis in.",
  },

  /* ------- Designer ------- */
  {
    name: "Maya Paterson",
    photo: "img/person/Maya-Paterson",
    alt: "Maya-Paterson",
    jobTitle: "Designer",
    rating: "4.4",
    skills: "Figma, Webflow, Elementor, Gatsby, WordPress",
    dataTab: "designer",
    about:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi exercitationem dicta porro aliquam suscipit nisi aperiam error temporibus id quia. Modi, ad amet. Quas neque molestias architecto debitis in.",
  },
  {
    name: "Daisy Gray",
    photo: "img/person/Daisy-Gray.png",
    alt: "Daisy-Gray",
    jobTitle: "Designer",
    rating: "4.5",
    skills: "Figma, Webflow, Elementor, Gatsby, WordPress",
    dataTab: "designer",
    about:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi exercitationem dicta porro aliquam suscipit nisi aperiam error temporibus id quia. Modi, ad amet. Quas neque molestias architecto debitis in.",
  },
  {
    name: "Nicholas Harris",
    photo: "img/person/Nicholas-Harris.png",
    alt: "Nicholas-Harris",
    jobTitle: "Designer",
    rating: "4.2",
    skills: "Figma, Webflow, Elementor, Gatsby, WordPress",
    dataTab: "designer",
    about:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi exercitationem dicta porro aliquam suscipit nisi aperiam error temporibus id quia. Modi, ad amet. Quas neque molestias architecto debitis in.",
  },
  {
    name: "Parker Stewart",
    photo: "img/person/Parker-Stewart.png",
    alt: "Parker-Stewart",
    jobTitle: "Designer",
    rating: "5.0",
    skills: "Figma, Webflow, Elementor, Gatsby, WordPress",
    dataTab: "designer",
    about:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi exercitationem dicta porro aliquam suscipit nisi aperiam error temporibus id quia. Modi, ad amet. Quas neque molestias architecto debitis in.",
  },
  {
    name: "Phoebe Robertson",
    photo: "img/person/Phoebe-Robertson.png",
    alt: "Phoebe-Robertson",
    jobTitle: "Designer",
    rating: "4.2",
    skills: "Figma, Webflow, Elementor, Gatsby, WordPress",
    dataTab: "designer",
    about:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi exercitationem dicta porro aliquam suscipit nisi aperiam error temporibus id quia. Modi, ad amet. Quas neque molestias architecto debitis in.",
  },
  {
    name: "Caleb Ward",
    photo: "img/person/Caleb-Ward.png",
    alt: "Caleb-Ward",
    jobTitle: "Designer",
    rating: "4.4",
    skills: "Figma, Webflow, Elementor, Gatsby, WordPress",
    dataTab: "designer",
    about:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi exercitationem dicta porro aliquam suscipit nisi aperiam error temporibus id quia. Modi, ad amet. Quas neque molestias architecto debitis in.",
  },
  {
    name: "Rosie Macdonald",
    photo: "img/person/Rosie-Macdonald.png",
    alt: "Rosie-Macdonald",
    jobTitle: "Designer",
    rating: "4.2",
    skills: "Figma, Webflow, Elementor, Gatsby, WordPress",
    dataTab: "designer",
    about:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi exercitationem dicta porro aliquam suscipit nisi aperiam error temporibus id quia. Modi, ad amet. Quas neque molestias architecto debitis in.",
  },
  {
    name: "Charlotte Campbell",
    photo: "img/person/Charlotte-Campbell.png",
    alt: "Charlotte-Campbell",
    jobTitle: "Designer",
    rating: "4.8",
    skills: "Figma, Webflow, Elementor, Gatsby, WordPress",
    dataTab: "designer",
    about:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi exercitationem dicta porro aliquam suscipit nisi aperiam error temporibus id quia. Modi, ad amet. Quas neque molestias architecto debitis in.",
  },

  /* ------- Accountant ------- */
  {
    name: "Amelia Thomson",
    photo: "img/person/Amelia-Thomson.png",
    alt: "Amelia-Thomson",
    jobTitle: "Accountant",
    rating: "4.7",
    skills: "organization and attention to detail, analytical and problem solving skills, mathematical and deductive reasoning",
    dataTab: "accountant",
    about:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi exercitationem dicta porro aliquam suscipit nisi aperiam error temporibus id quia. Modi, ad amet. Quas neque molestias architecto debitis in.",
  },
  {
    name: "Arabella Walker",
    photo: "img/person/Arabella-Walker.png",
    alt: "Arabella-Walker",
    jobTitle: "Accountant",
    rating: "4.3",
    skills: "organization and attention to detail, analytical and problem solving skills, mathematical and deductive reasoning",
    dataTab: "accountant",
    about:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi exercitationem dicta porro aliquam suscipit nisi aperiam error temporibus id quia. Modi, ad amet. Quas neque molestias architecto debitis in.",
  },
  {
    name: "Bonnie Johnston",
    photo: "img/person/Bonnie-Johnston.png",
    alt: "Bonnie-Johnston",
    jobTitle: "Accountant",
    rating: "4.6",
    skills: "organization and attention to detail, analytical and problem solving skills, mathematical and deductive reasoning",
    dataTab: "accountant",
    about:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi exercitationem dicta porro aliquam suscipit nisi aperiam error temporibus id quia. Modi, ad amet. Quas neque molestias architecto debitis in.",
  },
  {
    name: "Ella Kelly",
    photo: "img/person/Ella-Kelly.png",
    alt: "Ella-Kelly",
    jobTitle: "Accountant",
    rating: "4.5",
    skills: "organization and attention to detail, analytical and problem solving skills, mathematical and deductive reasoning",
    dataTab: "accountant",
    about:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi exercitationem dicta porro aliquam suscipit nisi aperiam error temporibus id quia. Modi, ad amet. Quas neque molestias architecto debitis in.",
  },
  {
    name: "Levi Roberts",
    photo: "img/person/Levi-Roberts.png",
    alt: "Levi-Roberts",
    jobTitle: "Accountant",
    rating: "4.9",
    skills: "organization and attention to detail, analytical and problem solving skills, mathematical and deductive reasoning",
    dataTab: "accountant",
    about:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi exercitationem dicta porro aliquam suscipit nisi aperiam error temporibus id quia. Modi, ad amet. Quas neque molestias architecto debitis in.",
  },
  {
    name: "Sofia Jones",
    photo: "img/person/Sofia-Jones.png",
    alt: "Sofia-Jones",
    jobTitle: "Accountant",
    rating: "4.6",
    skills: "organization and attention to detail, analytical and problem solving skills, mathematical and deductive reasoning",
    dataTab: "accountant",
    about:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi exercitationem dicta porro aliquam suscipit nisi aperiam error temporibus id quia. Modi, ad amet. Quas neque molestias architecto debitis in.",
  },
  {
    name: "Walker Torres",
    photo: "img/person/Walker-Torres.png",
    alt: "Walker-Torres",
    jobTitle: "Accountant",
    rating: "4.3",
    skills: "organization and attention to detail, analytical and problem solving skills, mathematical and deductive reasoning",
    dataTab: "accountant",
    about:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi exercitationem dicta porro aliquam suscipit nisi aperiam error temporibus id quia. Modi, ad amet. Quas neque molestias architecto debitis in.",
  },
  {
    name: "Everett Wood",
    photo: "img/person/Everett-Wood.png",
    alt: "Everett-Wood",
    jobTitle: "Accountant",
    rating: "4.9",
    skills: "organization and attention to detail, analytical and problem solving skills, mathematical and deductive reasoning",
    dataTab: "accountant",
    about:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi exercitationem dicta porro aliquam suscipit nisi aperiam error temporibus id quia. Modi, ad amet. Quas neque molestias architecto debitis in.",
  },

  /* ------- Human Resource ------- */
  {
    name: "Grayson Johnson",
    photo: "img/person/Grayson-Johnson.png",
    alt: "Grayson-Johnson",
    jobTitle: "Human Resource",
    rating: "4.9",
    skills: "Leadership, problem-solving, and communication skills",
    dataTab: "HR",
    about:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi exercitationem dicta porro aliquam suscipit nisi aperiam error temporibus id quia. Modi, ad amet. Quas neque molestias architecto debitis in.",
  },
  {
    name: "Ivy Duncan",
    photo: "img/person/Ivy-Duncan.png",
    alt: "Ivy-Duncan",
    jobTitle: "Human Resource",
    rating: "4.2",
    skills: "Leadership, problem-solving, and communication skills",
    dataTab: "HR",
    about:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi exercitationem dicta porro aliquam suscipit nisi aperiam error temporibus id quia. Modi, ad amet. Quas neque molestias architecto debitis in.",
  },
  {
    name: "Sienna Fraser",
    photo: "img/person/Sienna-Fraser.png",
    alt: "Sienna-Fraser",
    jobTitle: "Human Resource",
    rating: "4.5",
    skills: "Leadership, problem-solving, and communication skills",
    dataTab: "HR",
    about:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi exercitationem dicta porro aliquam suscipit nisi aperiam error temporibus id quia. Modi, ad amet. Quas neque molestias architecto debitis in.",
  },
  {
    name: "Julian Taylor",
    photo: "img/person/Julian-Taylor.png",
    alt: "Julian-Taylor",
    jobTitle: "Human Resource",
    rating: "4.8",
    skills: "Leadership, problem-solving, and communication skills",
    dataTab: "HR",
    about:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi exercitationem dicta porro aliquam suscipit nisi aperiam error temporibus id quia. Modi, ad amet. Quas neque molestias architecto debitis in.",
  },
  {
    name: "Sophie Bell",
    photo: "img/person/Sophie-Bell.png",
    alt: "Sophie-Bell",
    jobTitle: "Human Resource",
    rating: "4.9",
    skills: "Leadership, problem-solving, and communication skills",
    dataTab: "HR",
    about:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi exercitationem dicta porro aliquam suscipit nisi aperiam error temporibus id quia. Modi, ad amet. Quas neque molestias architecto debitis in.",
  },
  {
    name: "Brooks Bennett",
    photo: "img/person/Brooks-Bennett.png",
    alt: "Brooks-Bennett",
    jobTitle: "Human Resource",
    rating: "4.7",
    skills: "Leadership, problem-solving, and communication skills",
    dataTab: "HR",
    about:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi exercitationem dicta porro aliquam suscipit nisi aperiam error temporibus id quia. Modi, ad amet. Quas neque molestias architecto debitis in.",
  },
  {
    name: "Michael Peterson",
    photo: "img/person/Michael-Peterson.png",
    alt: "Michael-Peterson",
    jobTitle: "Human Resource",
    rating: "4.3",
    skills: "Leadership, problem-solving, and communication skills",
    dataTab: "HR",
    about:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi exercitationem dicta porro aliquam suscipit nisi aperiam error temporibus id quia. Modi, ad amet. Quas neque molestias architecto debitis in.",
  },
  {
    name: "Joshua Sanders",
    photo: "img/person/Joshua-Sanders.png",
    alt: "Joshua-Sanders.png",
    jobTitle: "Human Resource",
    rating: "4.9",
    skills: "Leadership, problem-solving, and communication skills",
    dataTab: "HR",
    about:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi exercitationem dicta porro aliquam suscipit nisi aperiam error temporibus id quia. Modi, ad amet. Quas neque molestias architecto debitis in.",
  },

  /* ------- Marketing ------- */
  {
    name: "Poppy Paterson",
    photo: "img/person/Poppy-Paterson.png",
    alt: "Poppy-Paterson",
    jobTitle: "Marketing",
    rating: "4.5",
    skills: "Copywriting, content creation, and presentation skills",
    dataTab: "marketing",
    about:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi exercitationem dicta porro aliquam suscipit nisi aperiam error temporibus id quia. Modi, ad amet. Quas neque molestias architecto debitis in.",
  },
  {
    name: "Leo Anderson",
    photo: "img/person/Leo-Anderson.png",
    alt: "Leo-Anderson",
    jobTitle: "Marketing",
    rating: "4.9",
    skills: "Copywriting, content creation, and presentation skills",
    dataTab: "marketing",
    about:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi exercitationem dicta porro aliquam suscipit nisi aperiam error temporibus id quia. Modi, ad amet. Quas neque molestias architecto debitis in.",
  },
  {
    name: "Isabella Jones",
    photo: "img/person/Isabella-Jones.png",
    alt: "Isabella-Jones",
    jobTitle: "Marketing",
    rating: "4.2",
    skills: "Copywriting, content creation, and presentation skills",
    dataTab: "marketing",
    about:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi exercitationem dicta porro aliquam suscipit nisi aperiam error temporibus id quia. Modi, ad amet. Quas neque molestias architecto debitis in.",
  },
  {
    name: "Nathan Bailey",
    photo: "img/person/Nathan-Bailey.png",
    alt: "Nathan-Bailey",
    jobTitle: "Marketing",
    rating: "4.3",
    skills: "Copywriting, content creation, and presentation skills",
    dataTab: "marketing",
    about:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi exercitationem dicta porro aliquam suscipit nisi aperiam error temporibus id quia. Modi, ad amet. Quas neque molestias architecto debitis in.",
  },
  {
    name: "Aiden Adams",
    photo: "img/person/Aiden-Adams.png",
    alt: "Aiden-Adams",
    jobTitle: "Marketing",
    rating: "4.2",
    skills: "Copywriting, content creation, and presentation skills",
    dataTab: "marketing",
    about:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi exercitationem dicta porro aliquam suscipit nisi aperiam error temporibus id quia. Modi, ad amet. Quas neque molestias architecto debitis in.",
  },
  {
    name: "Millie Ross",
    photo: "img/person/Millie-Ross.png",
    alt: "Millie-Ross",
    jobTitle: "Marketing",
    rating: "4.9",
    skills: "Copywriting, content creation, and presentation skills",
    dataTab: "marketing",
    about:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi exercitationem dicta porro aliquam suscipit nisi aperiam error temporibus id quia. Modi, ad amet. Quas neque molestias architecto debitis in.",
  },
  {
    name: "Jayden Cooper",
    photo: "img/person/Jayden-Cooper.png",
    alt: "Jayden-Cooper",
    jobTitle: "Marketing",
    rating: "5.0",
    skills: "Copywriting, content creation, and presentation skills",
    dataTab: "marketing",
    about:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi exercitationem dicta porro aliquam suscipit nisi aperiam error temporibus id quia. Modi, ad amet. Quas neque molestias architecto debitis in.",
  },
  {
    name: "Lily Kelly",
    photo: "img/person/Lily-Kelly.png",
    alt: "Lily-Kelly",
    jobTitle: "Marketing",
    rating: "4.6",
    skills: "Copywriting, content creation, and presentation skills",
    dataTab: "marketing",
    about:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi exercitationem dicta porro aliquam suscipit nisi aperiam error temporibus id quia. Modi, ad amet. Quas neque molestias architecto debitis in.",
  },
];
