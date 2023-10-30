import hero from './assets/hero.svg';
const Hero = () => {
  return (
    <section className='hero'>
      <div className='hero-center'>
        <div className='hero-title'>
          <h1>Contentful CMS</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            dignissimos voluptatem cupiditate impedit, necessitatibus aut
            voluptatum vero minus temporibus quasi iusto tenetur laboriosam
            odit. Labore aspernatur omnis rerum laboriosam reiciendis?
          </p>
        </div>
        <div className='img-container'>
          <img src={hero} alt='woman with browser' className='img' />
        </div>
      </div>
    </section>
  );
};
export default Hero;
