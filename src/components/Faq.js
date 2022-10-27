import React from 'react';

const Faq = () => {
    return (

        <div className='text-center mt-5'><h1> FAQ <span className='text-primary'>Section</span> </h1>
            <div className='mx-5 my-5 border border-primary p-5 rounded'>
                <p>1. What is JavaScript?<br />
                    JavaScript is a scripting language used mostly in web programming. It is based on an object-oriented model and available in all modern browsers so it's a cross-platform language too. Mostly JavaScript is realized as part of HTML, where it can change itself and other elements of HTML scripts. <br />


                    2. What are the differences between JavaScript and Java? <br />
                    JavaScript doesn't strongly type one and requires additional integration in HTML to be executed, while Java supports multi-threading, and requires JDK installation to make it usable. <br />

                    3. What data types are there in JavaScript? <br />
                    There are two groups of data types in JavaScript: Primitive and Non-Primitive. The first group includes String, Boolean, Number, BigInt, Null, undefined and Symbol. The non-primitive data type is the Object.<br />

                    4. What is the global variable? <br />
                    It is the variable with global scope, so it is available from any part of the script.

                    5. What problems are associated with global variables? <br />
                    Global variables stay in memory all time, have lower protection as inside the functions and may have conflicts with local variables with the same name.<br />

                    6. What is the "null" in JavaScript? <br />
                    The JS script returns "null" if the requested value is "empty". It may happen when you try to request a deleted element of the script or when a variable value was assigned with null to check it for changes during the script execution.</p>       </div> </div>
    );
};

export default Faq;