import { motion } from 'framer-motion';
import animation from '../../assets/images/home-GIF.gif';
function Home() {
// #0d1117
// #232730
  return (
    <>
      <main className="max-h-screen flex text-white flex-col md:flex-row items-center justify-between py-10 bg-[#0d1117] px-14">
        <motion.div
          className="content md:w-1/2 text-center md:text-left mb-4"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 2, x: 10 }}
          transition={{ duration: 1 }}
        >
          <div  className="xl:text-6xl lg:text-4xl md:text-[28px] 2xl:text-8xl text-3xl font-bold mb-4">
            <h1 className=' leading-[45px] lg:text-[3rem] xl:leading-[70px] 2xl:leading-[100px]  2xl:text-8xl'>
              Empowering Developers Across
            </h1>
            <h1  className="xl:leading-[70px] 2xl:leading-[90px]  leading-[45px]  text-[#ffde59]">
              Web, AI/ML, Web3, & Android.
            </h1>
          </div>
      
            <p className="text-base sm:text-lg md:text-xl xl:text-3xl 2xl:text-5xl">
             <span className='xl:leading-[50px] 2xl:leading-[70px]'>
              <b className=''>Documentation, Roadmap Guidelines,</b> and <b className=''> Interview Guidelines.</b>
            </span> <br /> 
            <span className='xl:leading-[50px] 2xl:leading-[70px]'>
             <b className=''>Blog Posting, </b> and <b className=''>Solving LeetCode Problems. </b>
            </span><br />
            <span className='xl:leading-[50px] 2xl:leading-[70px]'>
              <b className=''> Active Members </b> and 
              <b className=''> Popular discussion topics.</b>
            </span>
             
          </p>
        </motion.div>
        <motion.div
          className="image md:w-1/2 mb-8 md:mb-0"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src={animation}
            alt="Developer working on various technologies"
            className="md:w-[80%] lg:w-[70%] w-[80%] rounded-3xl  xl:py-10 mx-auto"
          />
        </motion.div>
      </main>
    </>
  )
}

export default Home;