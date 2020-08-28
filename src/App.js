import React, { useState } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Course from './Components/Course/Course';
import Cart from './Components/Cart/Cart';






const App = () => {
  const [cart, setCart] = useState([]);
// const data = Data ;
const [data, setData] = useState([
  {
    "id": 1,
    "name": "AI technology",
    "price": "10",
    "description": "Combine the power of Data Science, Machine Learning and Deep Learning Learning Learning Learning Learning Learning Learningto create powerful AI for Real-World applications!",
    "language": "English",
    "image": "https://i.ibb.co/thfp2Xc/9.jpg",
    "instructor": " tom Hanks",
    "email": "Sincere@april.biz",       
   
  },
  {
      "id": 2,
      "name": "The Complete Web Developer Course",
      "description": "Learn Web Development by building 25 websites and mobile apps using HTML, CSS, Javascript, PHP, Python, MySQL & more!",
      "language": "English",
      "price": "9",
      "image": "https://i.ibb.co/X4xDsLy/2.jpg",
      "instructor": "Stephen Grider",
      "email": "Sincere@april.biz",       
      
    },
    {
      "id": 3,
      "name": "The Complete iOS App Development Bootcamp",
      "description": "From Beginner to iOS App Developer with Just One Course! Fully Updated with a Comprehensive Module Dedicated to SwiftUI!",
      "language": "English",
      "price": "11",
      "image": "https://i.ibb.co/fGQ7kCM/3.jpg",
      "instructor": "Dr. Angela Yu",
      "email": "Sincere@april.biz",       
            
      
    },
    {
      "id": 4,
      "name": "Advanced CSS and Sass: Flexbox, Grid",
      "description": "The most advanced and modern CSS course on the internet: flexbox, Grid, responsive design, and so much more.",
      "language": "English",
      "price": "8",
      "image": "https://i.ibb.co/Z1hTz2m/4.jpg",
      "instructor": "Jonas Schmedtmann",
      "email": "Sincere@april.biz",       
            
     
    },
    {
      "id": 5,
      "name": "CSS - The Complete Guide 2020 ",
      "description": "Learn Python like a Professional! Start from the basics and go all the way to creating your own applications and games!",
      "language": "English",
      "price": "10",
      "image": "https://i.ibb.co/S5kV1x7/ssss.jpg",
      "instructor": "Jose Portilla",
      "email": "Sincere@april.biz",       
             
      
    },
    {
      "id": 6,
      "name": "The Web Developer Bootcamp",
      "description": "The only course you need to learn web development - HTML, CSS, JS, Node, and More!",
      "language": "English",
      "price": "11",
      "image": "https://i.ibb.co/Js9r1xF/8.jpg",
      "instructor": "Colte Steele",
      "email": "Sincere@april.biz",       
           
      
    },
    {
      "id": 7,
      "name": "Machine Learning A-Z™",
      "description": "Learn to create Machine Learning Algorithms in Python and R from two Data Science experts. code templates included Code templates included.",
      "language": "English",
      "price": "12",
      "image": "https://i.ibb.co/KwCycPZ/55555.jpg",
      "instructor": "Krill Eremenko",
      "email": "Sincere@april.biz",       
            
      
    },
    {
      "id": 8,
      "name": "Java Programming for Software Developers",
      "description": "Learn Java In This Course And Become a Computer Programmer. Obtain valuable Core Java Skills And Java Certification",
      "language": "English",
      "price": "10",
      "image": "https://i.ibb.co/J2ZcYfm/10.jpg",
      "instructor": "Tim Buchalka",
      "email": "Sincere@april.biz",       
            
             
      
    },
    {
      "id": 9,
      "name": "Angular - The Complete Guide ",
      "description": "Master Angular 10 (formerly 'Angular 2') and build awesome, reactive web apps with the successor of Angular.js",
      "language": "English",
      "price": "9",
      "image": "https://i.ibb.co/Q9jDjQZ/11.jpg",
      "instructor": "Maximilian Schwarzmüller",
      "email": "Sincere@april.biz",       
      
    },
    {
      "id": 10,
      "name": "Complete C# Unity Game Developer 2D",
      "description": "Learn Unity in C# & Code Your First Seven 2D Video Games for Web, Mac & PC. The Tutorials Cover Tilemap (35 hours)",
      "language": "English",
      "price": "11",
      "image": "https://i.ibb.co/T0zdzdd/12.jpg",
      "instructor": "BEn Tristen",
      "email": "Sincere@april.biz",       
             
      
    },
    {
      "id": 11,
      "name": "Python Data Science and Machine Learning",
      "description": "Learn how to use NumPy, Pandas, Seaborn , Matplotlib , Plotly , Scikit-Learn , Machine Learning, Tensorflow , and more!",
      "language": "English",
      "price": "8",
      "image": "https://i.ibb.co/Q9jDjQZ/11.jpg",
      "instructor": "Jose Portilla",
      "email": "Sincere@april.biz",       
           
      
    },
    {
      "id": 12,
      "name": "The Complete JavaScript Course 2020",
      "description": "Master JavaScript with the most complete course! Projects, challenges, quizzes, JavaScript ES6+, OOP, AJAX, Webpack",
      "language": "English",
      "price": "9",
      "image": "https://i.ibb.co/K08K0Vp/jsjs.jpg",
      "instructor": "Stephen Jonas",
      "email": "Sincere@april.biz",       
          
      
    },
    {
      "id": 13,
      "name": "The Data Science Course 2020",
      "description": "Complete Data Science Training: Mathematics, Statistics, Python, Advanced Statistics in Python, Machine & Deep Learning",
      "language": "English",
      "price": "10",
      "image": "https://i.ibb.co/1fpzCPc/ddddd.jpg",
      "instructor": "Team Grider",
      "email": "Sincere@april.biz",       
            
      
    },
    {
      "id": 14,
      "name": "React - The Complete Guide",
      "description": "Dive in and learn React.js from scratch! Learn Reactjs, Hooks, Redux, React Routing, Animations, Next.js and way more!",
      "language": "English",
      "price": "9",
      "image": "https://i.ibb.co/23qRQLN/14.jpg",
      "instructor": "Stephen Grider",
      "email": "Sincere@april.biz",       
      
    },
    {
      "id": 15,
      "name": "Docker Kubernetes: The Complete Guide",
      "description": "Build, test, and deploy Docker applications with Kubernetes while learning learning learning learning production-style development workflows",
      "language": "English",
      "price": "7",
      "image": "https://i.ibb.co/7v9VsJR/eeeeee.jpg",
      "instructor": "Stephen Grider",
      "email": "Sincere@april.biz",       
      
    },
]);

const addToCart = (item) => {
  const newCart = [...cart, item];
  setCart(newCart)
}

const totalPrice = cart.reduce((acc, current) => acc + parseInt(current.price), 0);

  
  return (
    <div className="">
      <Header></Header>
      <div className="container-fluid px-2" >
              <h2 className="text-center py-4 logo" id="logo-name">Online Course</h2>
              <div className="row food-items">
                <div className="col-md-9 row border-right">
                  {data.map(course => <Course key={course.id} course={course} addToCart={addToCart}/>)}
                </div>
                
                <div className="col-md-3"  id="sticky-sidebar">
                  <h3 className="text-center enroll-btn">ENROLL:  {cart.length} </h3>
                  <ul className="list-group"> 
                    {cart.map(item => <Cart item={item} />)}
                  </ul>
                  <button type="button " className="btn btn-warning btn-block enroll-btn">
                  ENROLL <span className="badge badge-light">$ {totalPrice}</span>
                  </button>
                </div>
              </div>
            </div>  
      
    </div>


  );
};

export default App;