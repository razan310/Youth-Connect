
import styles from './Lessons.module.css';
import diversity from './../../assets/images/diversity.jpg';
import cooperation from './../../assets/images/cooperation.jpg';
import AcceptanceOfOthers from './../../assets/images/AcceptanceOfOthers.jpeg';
import Card from '../Card/Card';
const Lessons = () => {
  const data=[
    {
      img1:diversity,
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
      img1:cooperation,
      title:"Cooperation",
      desc:"he act of working together towards a common goal or purpose, where individuals or groups join forces to achieve something that may not be possible alone. It involves sharing resources, ideas, and responsibilities, while each person contributes their unique skills and efforts. Cooperation is built on mutual respect, open communication, and a willingness to support one another. By cooperating, we can overcome challenges, solve problems more effectively, and create a sense of unity and teamwork that leads to greater success and stronger relationships."
    },
    {
      img1:AcceptanceOfOthers,
      title:"Acceptance of others",
      desc:"refers to the willingness and ability to recognize, respect, and embrace the differences in others, including their beliefs, values, cultures, and behaviors. It involves understanding that diversity enriches our communities and contributes to personal growth. By accepting others, we foster an inclusive environment where everyone feels valued, supported, and free to express their true selves without fear of judgment or discrimination. This principle encourages open-mindedness, empathy, and the appreciation of the unique qualities each individual brings to the table."
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
