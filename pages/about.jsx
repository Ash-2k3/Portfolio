const AboutPage = () => {
  return (
    <>
      <h3>A Little Bit About Me</h3>
      <br />
      <p>As a GSoC Mentee at Oppia Foundation, I worked on developing and improving the user interface and functionality of the online learning platform that aims to provide high-quality education to everyone. I used Figma, JavaScript, and Django to create engaging and interactive web pages and components that enhance the user experience and accessibility. I also collaborated with other developers, mentors, and reviewers to ensure the quality and consistency of the code and design.</p>
      <br />
      <p>I am pursuing my Bachelor of Technology in Computer Engineering at Quantum University, where I have learned various programming languages, frameworks, and tools, as well as the fundamentals of computer science, data structures, algorithms, and software engineering. I have also completed multiple certifications and virtual experience programs in topics such as problem solving, Android mobile application development, etc.</p>
      <br />
      <p>I am passionate about learning new technologies and skills, and applying them to real-world problems and projects. I have over a years of work experience as a collaborator and a team lead at Oppia Foundation, where I have contributed to the onboarding, content development, and community engagement initiatives of the organization. I have also been a mentee at Google Summer of Code, where I have received mentorship and guidance from experienced and talented professionals in the field of web development. </p>
      <br />
      <p>I am a motivated, creative, and collaborative person who values innovation, education, and social impact. I aspire to become a successful and impactful software engineer who can create meaningful and accessible solutions for various domains and communities.</p>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;
