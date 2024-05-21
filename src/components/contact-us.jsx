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
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };

    return <div className=""> 
    <div className="bg-[#E3D5CA] flex flex-col items-center h-[100vh] overflow-y-scroll">
        <h1 className="sen-regular mt-3 text-7xl mb-3">Contact Us</h1>
        <div className="relative h-[150vh] flex flex-col items-center">
            <img src="/images/home2.png" className="w-[100vw] h-auto z-0 object-cover"/>
            <div className="bg-[#D9D9D9] rounded-[65px] z-10 mx-40 mb-40 my-12 absolute top-[10px] px-5 py-12 flex flex-col items-center w-2/3">
                <p className="sen-regular text-xl text-black mb-4">Send us a message</p>
                <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center gap-4 w-full">
      <div className="flex gap-4">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" className="relative left-4 rounded-sm" required />
      </div>
      <div className="flex gap-4">
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" className="relative left-5 rounded-sm" required />
      </div>
      <div className="flex gap-4">
        <label htmlFor="message">Message:</label>
        <textarea id="message" required className="relative right-1 rounded-sm"/>
      </div>
      <button type="submit" className="bg-[#502E2A] px-3 py-1 rounded-lg text-white">{status}</button>
    </form>
            </div>
        </div>
    </div>
    </div>
}

export default Contact;