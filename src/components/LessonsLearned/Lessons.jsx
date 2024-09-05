
import styles from './Lessons.module.css';
import img1 from './../../assets/images/lession1.png';
import img2 from './../../assets/images/lession2.png';
import img3 from './../../assets/images/lession3.png';
import img4 from './../../assets/images/lession4.png';
import img5 from './../../assets/images/lession5.png';
import Card from '../Card/Card';
const Lessons = () => {
  const data=[
    {
      img1:img1,
      title:"My name is Muhammad Yassin. I am 26 years old and I am a dentist.",
      desc:`I am from the village of Ftairo, which is about 17 kilometers away from Lattakia. I am part of a family of
four, including my parents and a younger brother who
is three years younger than me. We have lived in Ftairo
since childhood, where I studied in its schools and
learned from the experiences of its people.
Today, after 26 years of living in my village, I was able,
through the Youth Connect project, to embark on a new
experience in the field of development, and give back to
my community.
I am new to the community work and I am surprised
how in such a short time I was able with my team to
implement training sessions and workshops to the
villagers to connect some artisans to youth from the
village to produce handmade products and most`
    },
    {
      img1:img2,
      title:"My name is Antoine Oweika",
      desc:"My journey into community work began with the Connect Youth project, and I could never have anticipated how transformative the four-day training would be. This experience was further enriched by the research phase, where we engaged with youth to understand their needs and identify the most pressing issues. We then crafted an intervention to address these needs through the Eco Camp project.Today, thanks to this experience, I am confident in managing interactive dialogue spaces and training in my field of expertise—economics—while linking it to youth and public benefit. The project also enabled me to successfully apply for and secure a position with a Syrian bank. The significant boost to my self-confidence, particularly in my area of study, is a direct result of my involvement in the project and the extensive knowledge and skills I gained. I now feel well-equipped to achieve my goals, just like any young person aspiring for success and a better life."
    },
    {
      img1:img3,
      title:"My name is Jihan Seloum. I am 23 years old and a student at the Faculty of Commerce and Economics, Tishreen University.",
      desc:"During my experience with the youth connect project, I explored concepts and activities for the first time. I joined the project out of curiosity but ended up joining the youth-tech project team, which effectively empowers young people in the field of technology. I challenged myself to join a project that was out of my comfort zone but I knew could make a difference in my life and the life of other youth.My field of study and interests are far from technology, but because the space we worked in was truly safe, we were able to learn quickly and explore how by integrating technology in our life/work/community so we can create a better future.Furthermore today, I can say that I have the ability to integrate with a group of individuals that are very different from me socially, educationally, and even with people with disability and feeling in a safe environment and being able to develop all together new learning skills.This project not only gave me the knowledge and the technological ability but also the confidence to try something new! I started marketing my drawing skills on social media platforms and am capable of designing a marketing plan for my work…I feel a new Jihane is born!"
    },
    {
        img1:img4,
        title:"My name is Samira Atiyeh, and I am 26 years old with special needs. I did not complete my education and live with my family of nine members. I am wheelchair-bound ",
        desc:"My journey began with the Youth Connect project, where I participated in the training alongside my sister. At first, I was apprehensive about my ability to engage with the project and the training due to my health condition and I felt that I was surrounded by youth that are much more educated. However, during the training, I noticed that most of the exercises were considerate of my physical situation, allowing me to participate and the training offered me a safe space to contribute as much as any other participant.After completing the training and research phase, I worked with my team on the “Collage project”. I was involved in planning and implementing activities, I participated in interactive theater training and, through this experience, was able to discuss the issues faced by people with special needs. The performance was attended by the Director of Social Affairs and Labor in Latakia, who responded positively and informed me that he would work on providing further support to youth with special need. I never thought i would be standing in front of the director of social affair and have a voice and talk on behalf of youth that don’t have one!Today, I can say that I broke the barrier of fear and expressed myself in front of others despite of my special needs."
      },
      {
        img1:img5,
        title:"My name is Ali Shkouhi. I was born in Lattakia Governorate, I am a person with disabilities, suffering from 90% vision loss. I graduated from the Faculty of Economics and work as an employee at Tishreen University in the Student Affairs Department. I am also a board member of the Blind Care Association in the Lattakia branch",
        desc:"I joined the Youth Connect project based on an invitation extended to us by the Peace Makers Association. During my participation in the project, I was able to shed light on the segment of people with disabilities. The project included a group of young men and women, along with some individuals with disabilities. I can say that the Youth Connect project has added new knowledge to my life, enabling me to spread the culture of development among the blind community. Especially since we organized a theatrical performance in coordination with the Collage Interactive Theater team within Peace Makers, which was a great success thanks to the efforts of the team and the blind individuals involved.Today, I, as Ali, was able to represent a significant segment of our society. I know that my participation was a valuable addition to the project. Currently, I have begun working with the association's staff to initiate community development efforts, in addition to the professional development we are focusing on.In conclusion, I would say that a blind person sees with their heart, and we must contribute to bringing forth what this heart and mind hold."
      }
  ]
  return (
    <>
    <div className={styles.Values}>
      <h5>Success Stories</h5>
      <div className={styles.valuecontainer}>
        {data.map((element,index)=>{return(
          <Card key={index} img1={element.img1} title={element.title} desc={element.desc}/>
        )})}
      </div>
    </div>
    
    </>
  );
};

export default Lessons;
