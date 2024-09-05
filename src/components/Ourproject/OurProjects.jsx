import Project1 from "../Theproject/Project";
import styles from './OurProjects.module.css';
import image1_1 from './../../assets/images/project1.1.png';
import image1_2 from './../../assets/images/project1.2.png';
import image2_1 from './../../assets/images/project2.1.png';
import image2_2 from './../../assets/images/project2.2.png';
import image3_1 from './../../assets/images/project6.2.png';
import image3_2 from './../../assets/images/project2.png';
import image4_1 from './../../assets/images/project4.1.png';
import image4_2 from './../../assets/images/project4.2.png';
import image5_1 from './../../assets/images/project5.1.png';
import image5_2 from './../../assets/images/project5.2.png';

function OurProjects() {
  const properties = [
    { image1: image1_1, image2: image1_2, title: "Youth- Tech", desc: `This project aimed to foster a culture of technology among youth by connecting it with their personal skills. The activities focused on raising awareness of the role of technology in improving daily life and professional development.

The project began with a session on technological knowledge, where participants explored the importance of technology and how to use platforms like email, social media, and job opportunity websites. Another session introduced essential websites and applications for skill development, with hands-on activities using mobile devices and laptops.

A session on artificial intelligence (AI) provided insights into its purpose and potential benefits in everyday life. Finally, the project partnered with a programming expert to develop a website, currently under construction, to share the experiences of youth involved in the initiative.

The project benefited the youth-tech team and 25 other participants.`, rev: "", style1: "style1" },
    { image1: image2_1, image2: image2_2, title: "Our Society, Our Identity", desc: `This 60-day project aimed to empower young men and women aged 18 to 35, helping them understand their identity and affiliations in a rapidly changing world. The goal was to enable the formation of active and productive youth groups within the community.
Key activities included recruiting youth through an online form, followed by introductory meetings led by the "Our Society, Our Identity" team. Gatherings and workshops brought together youth, community leaders, and key stakeholders to help participants recognize their roles in society and learn essential teamwork and planning skills. 
The project also featured two murals: one focused on peace and community, created in a rural area of Latakia, and another titled "Youth" in a prominent area of the city. These were coordinated with the Peace Makers Association and other partners. The project benefited 18 young participants directly and involved around 100 supporters, including stakeholders and community members.`, rev: "style.revers", style1: "" },
    { image1: image4_1, image2: image4_2, title: "From Us and Among Us", desc: `This project, lasting 65 days, aimed to empower youth from rural areas, especially in Fatiru village, by connecting them with local artisans. The goal was to teach practical skills that could help generate income and foster community involvement. Key activities included a hands-on training session on making homemade cleaning products, which engaged 20 participants, and community engagement sessions, which focused on utilizing local resources and fostering collaboration. The project benefited 35 people in total, helping them become more active and productive in their communities.`,rev: "", style1: "style1" },
    { image1: image3_1, image2: image3_2, title: "Collage", desc: `This 70-day project focused on improving the mental health of young people from diverse backgrounds. It involved 15 participants aged 18 to 35, who embarked on a journey of personal discovery and social awareness.

During the research phase, the issues of domestic violence and limited services for children with disabilities emerged as key community concerns. The team collaborated with local CSOs to address these issues and raise awareness. Through artistic activities like interactive theater and art therapy, the participants explored ways to reduce stress and promote mental health.

One of the key events was an interactive theatrical performance, addressing domestic violence and its impact on youth, attended by over 50 young people. Another performance, in collaboration with the Ikhaa Family Association, focused on families of children with special needs, aiming to reduce psychological pressure.`, rev: "style.revers", style1: ""  },
    { image1: image5_1, image2: image5_2, title: "Eco Camp", desc: `This 40-day project aimed to raise awareness among youth about economic changes and their impact on entrepreneurship, equipping them with the tools needed to establish their own ventures. The target group included the Eco Camp team, active youth in the community sector, and those preparing to launch their professional careers.

Project activities began with an application process that attracted 17 young participants interested in economics and community work. A five-day non-residential camp followed, where participants engaged in sessions with various stakeholders, gaining knowledge and tools to aid them personally and professionally. The workshops highlighted the importance of economic capabilities for achieving self-sufficiency and developing skills.

Following the camp, the youth organized a community open day to share what they had learned with a broader audience. They then worked on personal business plans with guidance from professionals and peers with finance and marketing expertise.`, rev: "", style1: "style1" }
  ];

  return (
    <div className={styles.ourProjects}>
      <h1> Our Projects </h1>
      
      {properties.map((property, index) => (
        <Project1
          key={index}
          title={property.title}
          desc={property.desc}
          firstImg={property.image1}
          secImg={property.image2}
          rev={property.rev}
          style1={property.style1}
        />
      ))}
    </div>
  );
}

export default OurProjects;
