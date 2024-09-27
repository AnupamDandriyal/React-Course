import { Link } from 'react-router-dom';
import styles from './Home.module.css';
import Button from '@mui/material/Button';
import { useEffect, useState } from 'react';


const Home = () => {
  const imgs = [
    'https://images.unsplash.com/photo-1583364486567-ce2e045676e9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2Vic2l0ZSUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D',
    'https://images.unsplash.com/photo-1710162734135-8dc148f53abe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHdlYnNpdGUlMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww',
    'https://media.istockphoto.com/id/1157789866/photo/modern-computer-laptop-with-blank-screen-on-counter-barand-window-view.webp?a=1&b=1&s=612x612&w=0&k=20&c=edNJiHr7YRMkp1WVTj_RmFUy6hGzShhEoSp7GjT9S18=',
    'https://media.istockphoto.com/id/1425819292/photo/phone-laptop-and-communication-at-night-with-a-business-woman-working-in-her-office-late-on-a.webp?a=1&b=1&s=612x612&w=0&k=20&c=CEmp2JZCjQCZgw-tUuXLkmxNKkd6EXhLc4h-iHRnMWc=',
    'https://plus.unsplash.com/premium_photo-1701590725824-3d0482721544?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fHdlYnNpdGUlMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww',
    'https://images.unsplash.com/photo-1710162734239-f2368bc6fae1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fHdlYnNpdGUlMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww',
    'https://images.unsplash.com/photo-1710166755745-9ac9f1a6ae80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fHdlYnNpdGUlMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww'
  ]

  const [bg, setBg] = useState('');

  useEffect(() => {
    const savedBg = localStorage.getItem('bgImg',);
    if (savedBg) {
      setBg(savedBg);
    }
    else {
      const randomBg = imgs[Math.floor(Math.random * imgs.length)];
      setBg(randomBg);
      localStorage.setItem('bgImg', randomBg);
      console.log("New Bg")
    }
  },[])
  return (
    <div style={{backgroundImage:`URL(${bg})`,backgroundSize:'cover'}} className={styles.home}>
      <div className={styles.container}>
        <h2>Trusted by over 2800+ companies</h2>
        <h1>Find Your <span>Remote Job</span><br/> Easy And Fast.</h1>
        <h3>A Platform when you can get your desired job withput any hasse</h3>
        <div className={styles.entry}>
          <input type="email" placeholder='Your Email Address' />
          <Link to='/get-started'><Button className={styles.darkbtn} variant="contained">Get Started</Button></Link>
        </div>
      </div>
      
   </div>
  )
}

export default Home