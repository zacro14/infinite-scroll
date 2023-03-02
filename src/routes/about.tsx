import { MainPage } from '@/components/Layout';

const About = () => {
  return (
    <MainPage>
      <div className={'mx-60'}>
        <div className={'flex justify-center items-center flex-col p-10'}>
          <span className={'tracking-widest'}>About</span>
          <h1 className={'font-bold py-2 text-4xl'}>SpaceXinfo.io</h1>
        </div>
        <section className="py-14">
          <h1 className={'font-bold text-xl'}>Abous Us</h1>
          <p className={'py-14'}>
            SpaceX is a private aerospace company founded in 2002 by tech
            entrepreneur Elon Musk with the goal of revolutionizing space
            exploration and making life multi-planetary. The company is
            headquartered in Hawthorne, California and has additional locations
            in Texas, Florida, and Washington, DC.
          </p>
        </section>
        <section className="py-14">
          <h1 className={'font-bold text-xl'}>Our Mission</h1>
          <p className={'py-5'}>
            At SpaceX, our mission is to make life multi-planetary by enabling
            the colonization of Mars and other planets. We believe that human
            civilization can only truly thrive if we become a multi-planetary
            species and create a sustainable presence beyond Earth. To achieve
            this goal, we are working on developing reusable rockets and
            spacecraft that can make space travel more affordable and
            accessible.
          </p>
        </section>
        <section className="py-20">
          <h1 className={'font-bold text-xl'}>Our Achievements</h1>
          <p className={'py-5'}>
            Since our inception, SpaceX has achieved many groundbreaking
            milestones in the space industry. These include the first
            privately-funded liquid-propellant rocket to reach orbit, the first
            successful landing of a first stage rocket on an autonomous drone
            ship at sea, and the first privately-funded spacecraft to send
            humans to the International Space Station.
          </p>
          <p>
            In addition to these achievements, SpaceX has also disrupted the
            satellite launch industry by offering competitive pricing and
            performance through its reusable rockets. By reusing the first stage
            booster of its Falcon 9 rocket, SpaceX has drastically reduced the
            cost of launching payloads into orbit and paved the way for a new
            era of commercial spaceflight.
          </p>
        </section>
      </div>
    </MainPage>
  );
};

export default About;
