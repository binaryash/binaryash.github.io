type Social = {
  label: string;
  link: string;
  icon?: string;
};

type Presentation = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
  profile?: string;
};

const presentation: Presentation = {
  mail: "binaryash@hotmail.com",
  title: "Hi, I'm Ash 👋",
  profile: "/image.png",
  description:
    "Hi, I'm a full-stack web developer specializing in **Django**. I also have expertise in the **MERN stack**, **FastAPI**, **Machine Learning** and **Data Analysis**. When I'm not optimizing web apps, you can find me tackling pointers and memory leaks in **C++** —because low-level control has its own thrill.",
  socials: [
    {
      label: "Github",
      link: "https://github.com/binaryash",
      icon: "github",
    },
    {
      label: "Linkedin",
      link: "https://www.linkedin.com/in/ash-c-7b3113291",
      icon: "linkedin",
    },
  ],
};

export default presentation;
