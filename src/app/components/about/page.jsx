import Heading from "@/components/heading/heading";

const About = () => {
  return (
    <div
      className="container flex flex-col gap-14 justify-center items-center text-center"
      id="about"
    >
      <Heading title={"About Me"} />
      <p className="text-center">
        I am a dedicated and results-driven Software Engineer with over 3 years
        of experience in building innovative web and mobile applications.
        Skilled in technologies like React.js, Next.js, Vue.js, and Nest.js, I
        specialize in creating scalable, user-friendly solutions. I am
        passionate about problem-solving, client satisfaction, and continuous
        learning.
        <br />
        As a team lead, I manage and mentor development teams, ensuring smooth
        project execution and high-quality results. My goal is to drive
        technical excellence while delivering impactful software that meets both
        business and user needs.
      </p>
    </div>
  );
};

export default About;
