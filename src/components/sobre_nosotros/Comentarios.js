import React from 'react';
import {DiscussionEmbed} from 'disqus-react'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


const Comentarios=()=>{
    
    return (
        <>
            <div className="container">
                <DiscussionEmbed
                    shortname="FoodWorld"
                    config={
                        {
                            url:'https://foodworld-1.disqus.com/embed.js',
                            identifier: "",
                            title: "FoodWorld",
                            language: 'es_MX' 
                        }
                    }
                
                
                />


            </div>
           
        </>
    )
}

export default Comentarios;