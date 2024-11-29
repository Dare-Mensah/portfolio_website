import React from 'react'
//import Slider from "react-slick";

//import "slick-carousel/slick/slick.css";
//import "slick-carousel/slick/slick-theme.css";

import Heroimg from "./assets/Profilepic.jpg"
import linkinimg from "./assets/linkedinlogo.png"
import githubimg from "./assets/github.jpg"
import GTLogo from './assets/GTLogo.jpeg'
import amazonLogo from './assets/Amazon-Logo-07.jpg'
import microsoftLogo from './assets/microsoftLogo.png'

import QueenMaryUniversityLogo from './assets/Queen-Mary-UniversityLogo.png'
import ClimateSenseHomepagePhoneOne from './assets/ClimateSenseHomepagePhoneOne.jpg'
//import ClimateSenseHomepageTablet from '../../assets/ClimateSenseHomepageTablet.jpg'
//import ClimateSenseLoginScreen from '../../assets/ClimateSenseLoginScreen.jpg'
import FDMWellbeingHomepageOne from'./assets/FDMWellbeingHomepageOne.jpg'
//import FDMWellbeingHomepageTwo from'../../assets/FDMWellbeingHomepageTwo.jpg'

import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css';
//import 'bootstrap/dist/css/bootstrap.min.css';

const Main = () => {
    const Work_Experiences = [
        {
            company: 'Grant Thornton',
            job_title: 'Technology Risk Consultant',
            description: ['Delivered end-to-end solutions, including software development and ERP integration, with cross-functional teams.', 'Implemented cloud adoption, cybersecurity, and data analytics solutions for clients.' ],
            logo: GTLogo,
            duration: 'Sep 2024 - Dec 2024'
        },

        {
            company: 'Amazon',
            job_title: 'Program Manager',
            description: ['Enhanced the performance of the Amazon locker network, achieving an estimated 10% increase in efficiency and estimated revenue savings of over $100,000 annually.', 'Refined a Machine Learning Model, providing insights in regional differences in internal metrics, and package volume performance, with findings presented to senior management to further push projects.'],
            logo: amazonLogo,
            duration: 'Jan 2024 - Aug 2024'
        },

        {
            company: 'Microsoft',
            job_title: 'Technology Internship',
            description: ['Engineered a feature-rich app demo using React Native Expo, which boosted prospective leadership interest by 18%.', 'Maintained extensive knowledge base in AI and software engineering by regularly attending workshops, webinars, and industry conferences.'],
            logo: microsoftLogo,
            duration: 'Jul 2023 - Aug 2023'
        },

        {
            company: 'Grant Thornton',
            job_title: 'Technology Risk Consultant Internship',
            description: ['Enhanced client communication by providing clear and concise code review feedback, leading to a 10% increase in client satisfaction with our services.', 'Collaborated with cross-functional teams to identify and resolve control weaknesses, working closely with various departments to conduct thorough assessments and implement effective solutions. '],
            logo: GTLogo,
            duration: 'Jun 2023 - Jul 2023'
        },

        {
            company: 'Queen Mary University London',
            job_title: 'Teaching Assistant',
            description: ['Developed and implemented engaging lesson plans that improved student performance in coursework 10%.', 'Used technology to supplement traditional teaching methods, resulting in a 5% increase in student engagement.'],
            logo: QueenMaryUniversityLogo,
            duration: 'Oct 2023 - Dec 2023'
        },

        {
            company: 'Queen Mary University London',
            job_title: 'Student Ambassador',
            description: ['Organised a campus tour program that provided prospective students with a comprehensive overview of the university and increased prospective student attendance by 6%.', 'Represented the university at various outreach events and recruitment drives, resulting in a 4% increase in applications from prospective students.'],
            logo: QueenMaryUniversityLogo,
            duration: 'Feb 2023 - Aug 2024'
        },
    ]

    const Projects =[
        {
            Title: 'Climate Sense',
            image: ClimateSenseHomepagePhoneOne,
            github_link: ''
        },

        {
            Title: 'FDM WellbeingApp',
            image: FDMWellbeingHomepageOne,
            github_link: ''
        },

    ]


  return (
    <div>
    <section id='profile'>
    <div className='justify-items-center' >
        <div className='container grid md:grid-cols-2 gap-11 mx-10 min-h-[500px] bg-white w-full'>
            <div className='flex flex-col justify-center text-center md:text-left pt-24 md:p-0 pb-5 bg-white w-full'>
                <h4 className='text-xl font-light text-stone-900 mt-48' >Hi, I'm</h4>
                <h1 className='text-6xl font-bold'> Dare Mensah </h1>
                <h1 className='text-6xl font-bold text-stone-900'>Product Manager/ Software Developer</h1>
                <p className='mt-10'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit enim inventore
                    incidunt cupiditate ducimus aut ullam, veritatis ex doloremque fuga? Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                    Reiciendis accusantium sint aut perspiciatis accusamus. Hic ea harum voluptatibus commodi minus maxime at.
                </p>
                <div class="flex flex-nowrap my-5 gap-4 justify-center">
                    <div>
                        <a href="https://drive.google.com/uc?export=download&id=1VS2lJSuqRcQFO7LDeIljtOf8jCjygMTz">
                            <button className='bg-stone-600 hover:bg-stone-800 text-white font-bold py-2 px-4 rounded-full'>
                                <p>Downlaod CV</p>
                            </button>
                        </a>
                    </div>
                    <div>
                        <a href="https://www.linkedin.com/in/dare-mensah-a78934226/">
                            <button>
                                <img className ='rounded-full src' src={linkinimg} height={42} width={42}/>
                            </button>
                        </a>
                    </div>
                    <div>
                        <a href="https://github.com/Dare-Mensah">
                            <button>
                                <img className ='rounded-full src' src={githubimg} height={42} width={42}/>
                            </button>
                        </a>
                    </div>
            </div>    
            </div>
            <div className='mt-48 mx-7'>
                <img className='rounded-md' src={Heroimg} alt= ""/>
            </div>
        </div>

    </div>
    </section>

    <section id="about" className="my-60">
        <p className="text-stone-900 text-center">Get To Know Me</p>
        <h1 className="text-6xl font-bold text-center mb-12">About Me</h1>
        <div className="container flex flex-col items-center justify-center gap-11 mx-auto  bg-white w-full">
            <div className="flex flex-wrap justify-center gap-4">
                <div className="border-2 rounded-md p-3 w-96 h-70">
                <p className="text-center font-bold mb-3">Experience</p>
                <p className="text-center">1+ years</p>
                <p className="text-center mt-2">Software Development & Product Management</p>
            </div>
            <div className="border-2 rounded-md p-3 w-96 h-70">
                <p className="text-center font-bold mb-3">Education</p>
                <p className="text-center">BSc Honours Computer Science: 1st Class</p>
                <p className="text-center">A Level: Computer Science - A*, Politics - A, Philosophy - A</p>
            </div>
            <div className="border-2 rounded-md p-3 w-96 h-70">
                <p className="text-center font-bold mb-3">Skills</p>
                <p className="text-center">Java, Python, React, SQL, APIs</p>
                <p className="text-center">HTML, CSS, JavaScript, PySpark</p>
            </div>
            
        </div>
        <div>
            <p className="max-w-full text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit enim
                inventore incidunt cupiditate ducimus aut ullam, veritatis ex
                doloremque fuga? Lorem ipsum dolor sit, amet consectetur adipisicing
                elit. Reiciendis accusantium sint aut perspiciatis accusamus. Hic ea
                harum voluptatibus commodi minus maxime at.
            </p>
        </div>
        </div>
    </section>

    <section id="work_experience" className="my-60">
        <p className="text-stone-900 text-center">Explore my</p>
        <h1 className="text-6xl font-bold text-center mb-10">Work Experience</h1>
        <div className="container flex flex-col items-center justify-center gap-11 mx-auto bg-white w-full">
            <div className="flex flex-wrap justify-center gap-3">
            {Work_Experiences.map((Work_Experiences, index) => (
                <div className="border-2 rounded-3xl p-3 w-96 h-70">
                    <p className="text-center font-bold mb-3">{Work_Experiences.job_title}</p>
                    <div className='flex space-x-3 grid-rows-2  justify-center'>
                        <img src={Work_Experiences.logo} height={40} width={40}/>
                        <p className="text-center mt-2">{Work_Experiences.company}</p>
                    </div>
                        <p className='text-center font-thin mt-3 text-neutral-800 antialiased'>{Work_Experiences.duration}</p>
                    <div>
                    {Work_Experiences.description.map((text, textIndex) => (
                        <div key={textIndex}>
                            <ol className=' list-disc pl-5'>
                                <li className='mt-4'>{text}</li>
                            </ol>
                        </div>
                    ))}
                    </div>
                </div>
            ))}
        </div>
        <div>
            <p className="max-w-full text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit enim
                inventore incidunt cupiditate ducimus aut ullam, veritatis ex
                doloremque fuga? Lorem ipsum dolor sit, amet consectetur adipisicing
                elit. Reiciendis accusantium sint aut perspiciatis accusamus. Hic ea
                harum voluptatibus commodi minus maxime at.
            </p>
        </div>
        </div>
    </section>

    <section id="projects" className="my-60">
        <p className="text-stone-900 text-center">Browse My Recent</p>
        <h1 className="text-6xl font-bold text-center mb-10">Projects</h1>
        <div className="container flex flex-col items-center justify-center gap-11 mx-auto  bg-white w-full">
        <Carousel swipeable={true} showIndicators={true} showThumbs={false} showArrows={true}>
        {Projects.map((Projects, index) => (
            <div key ={index} className="flex flex-wrap justify-center gap-3"> 
                <div className="border-2 rounded-3xl p-3 w-96 h-70 justify-items-center">
                    <img className='rounded-3xl items-center' src= {Projects.image} height={200} width={200}/>
                    <div>
                        <h2 className='text-3xl font-bold text-center my-4'>{Projects.Title}</h2>
                    </div>
                </div>
            </div>
            
        ))}
        </Carousel>
        </div>
    </section>


    </div>
    

  )
}

export default Main