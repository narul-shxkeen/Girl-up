import React,{useState} from "react";

function Contact(){

    const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("https://contact-mail.vercel.app/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submitted");
    name.value = "";
    email.value = "";
    message.value = "";
  
    setTimeout(() => {
      setStatus("Submit");
    }, 3000);
    let result = await response.json();
   
  };

    return <div className="h-[100vh] overflow-y-scroll"> 
    <div className="bg-[#E3D5CA] flex flex-col items-center">
        <h1 className="sen-regular sm:mt-3 text-7xl mt-5 sm:mb-3 text-center">Contact Us</h1>
        <div className="relative h-[120vh] flex flex-col items-center">
            <img src="/images/home2.png" className="hidden sm:block sm:w-[100vw] sm:h-auto h-full  z-0 object-cover"/>
            <div className="bg-[#D9D9D9] rounded-none sm:rounded-[65px] z-10 mb-20 sm:mx-40 sm:mb-40 my-12 absolute top-[10px] px-5 py-12 flex flex-col items-center justify-center w-[100vw] sm:w-2/3">
                <p className="sen-regular text-xl text-black mb-4 text-center">Send us a message</p>
                <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center gap-4 w-full">
      <div className="flex w-[300px] sm:w-[350px] justify-between overflow-x-hidden">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" className="relative rounded-sm  w-[200px] sm:w-[250px]" required />
      </div>
      <div className="flex w-[300px] sm:w-[350px] justify-between overflow-x-hidden">
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" className="relative rounded-sm w-[200px] sm:w-[250px]" required />
      </div>
      <div className="flex w-[300px] sm:w-[350px] justify-between overflow-x-hidden">
        <label htmlFor="message">Message:</label>
        <textarea id="message" required className="relative rounded-sm w-[200px] sm:w-[250px] h-[100px] sm:h-[200px]"/>
      </div>
      <button type="submit" className="bg-[#502E2A] px-3 py-1 rounded-lg text-white">{status}</button>
    </form>
            </div>
        </div>
    </div>
    </div>
}

export default Contact;