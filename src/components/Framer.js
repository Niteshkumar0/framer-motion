import React from 'react';
import { Container, Section,ColumnLeft,Button,ColumnRight ,Image} from '../style/framer';
import planetOne from "../images/planet.svg"
import planetTwo from "../images/planet2.svg"
import planetThree from "../images/planet3.svg"
import planetFour from "../images/planet4.svg"
import { motion} from "framer-motion";




export default function Framer() {

    let fadeleft = {
        hidden: {opacity:0, x:-100},
        visible: {opacity:1 , x: 0}
    }

  return (
    <>
        <Section>
            <Container>
                <ColumnLeft>
                    <motion.h1
                        initial={{opacity:0}}
                        animate={{opacity : 1}}
                        transaction={{duration : 2}}
                    >Wellcome to space</motion.h1>
                    <motion.p
                        variants={fadeleft}
                        initial='hidden'
                        animate='visible'
                        transaction={{duration : 1}}
                    >Journey to the unknown</motion.p>
                    <Button
                        whileHover={{scale:1.03}}
                        initial={{opacity:0}}
                        animate={{opacity:1}}
                        transaction={{duration:1}}
                        whileTap={{scale:0.95, backgroundColor:'#67F6E7',border:'none',color:'#000'}}
                    >Get Started</Button>
                </ColumnLeft>
                <ColumnRight>
                    <Image src={planetOne} alt="" 
                    dragConstraints={{left:100,bottom:100,top:100,right:100}}
                    drag={true} whileTap={{scale:0.8}}
                    initial={{opacity:0}}
                    animate={{opacity:1}}
                    transition={{duration:0.5}}/>
                    <Image src={planetTwo} alt="" dragConstraints={{left:100,right:-200,bottom:0,top:0}}
                    drag={true} whileTap={{scale:0.8}}
                    initial={{opacity:0}}
                    animate={{opacity:1}}
                    transition={{duration:0.5}} />
                    <Image src={planetThree} alt=""  dragConstraints={{left:10,bottom:-10,top:10,right:10}}
                    drag={true} whileTap={{scale:0.8}}
                    initial={{opacity:0}}
                    animate={{opacity:1}}
                    transition={{duration:0.5}} />
                    <Image src={planetFour} alt=""
                     dragConstraints={{left:20,bottom:-50,top:20,right:-100}}
                     drag={true} whileTap={{scale:0.8}}
                     initial={{opacity:0}}
                     animate={{opacity:1}}
                     transition={{duration:0.5}} />
                </ColumnRight>
            </Container>
        </Section>
    </>
  )
}
