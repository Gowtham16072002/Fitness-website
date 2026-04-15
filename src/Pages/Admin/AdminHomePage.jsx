// import React, { useState } from "react";
// import AdminSidebar from "../../Components/AdminSidebar";
// import "../../Styles/AdminHomePage.css";

// function AdminHomePage() {
//   const [openSection, setOpenSection] = useState("hero");

//   const [heroData, setHeroData] = useState({
//     title: "Complete Fitness for Body, Mind & Energy",
//     subtitle:
//       "Gym training, yoga, Zumba dance programs designed to help you achieve strength, flexibility and confidence.",
//     button1: "Start 7-Day Free Trial",
//     button2: "View Programs",
//     image:
//       "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=800",
//   });

//   const [statsData, setStatsData] = useState([
//     { id: 1, value: "4.9", label: "Google Rating" },
//     { id: 2, value: "500+", label: "Active Members" },
//     { id: 3, value: "10+", label: "Certified Trainers" },
//   ]);

//   const [whyChooseData, setWhyChooseData] = useState({
//     title: "Why Choose Us",
//     description:
//       "We provide expert trainers, modern equipment, and personalized fitness programs to help you reach your goals.",
//   });

//   const [programData, setProgramData] = useState([
//     { id: 1, title: "Cardio Training" },
//     { id: 2, title: "Yoga Classes" },
//     { id: 3, title: "Zumba Sessions" },
//     { id: 4, title: "Strength Training" },
//   ]);

//   const [trainerData, setTrainerData] = useState([
//     { id: 1, name: "Emilia Clarke", role: "Strength Trainer" },
//     { id: 2, name: "Michael Lee", role: "Yoga Trainer" },
//     { id: 3, name: "Sophia", role: "Zumba Trainer" },
//   ]);

//   const [testimonialData, setTestimonialData] = useState([
//     { id: 1, name: "Rahul Sharma", review: "Amazing trainers and environment." },
//     { id: 2, name: "Priya Patel", review: "Best fitness program I ever joined." },
//     { id: 3, name: "Arjun", review: "Very motivating and professional trainers." },
//   ]);

//   const [pricingData, setPricingData] = useState([
//     { id: 1, plan: "Basic", price: "999" },
//     { id: 2, plan: "Standard", price: "1499" },
//     { id: 3, plan: "Premium", price: "1999" },
//   ]);

//   const [footerData, setFooterData] = useState({
//     title: "Victory Fit",
//     description:
//       "Build strength, confidence, and a healthier lifestyle with our expert-led fitness programs.",
//     email: "victoryfit@gmail.com",
//     phone: "+91 9876543210",
//   });

//   const toggleSection = (section) => {
//     setOpenSection(openSection === section ? "" : section);
//   };

//   const handleHeroChange = (e) => {
//     const { name, value } = e.target;
//     setHeroData({ ...heroData, [name]: value });
//   };

//   const handleHeroImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const imageUrl = URL.createObjectURL(file);
//       setHeroData({ ...heroData, image: imageUrl });
//     }
//   };

//   const handleStatsChange = (index, field, value) => {
//     const updated = [...statsData];
//     updated[index][field] = value;
//     setStatsData(updated);
//   };

//   const handleWhyChooseChange = (e) => {
//     const { name, value } = e.target;
//     setWhyChooseData({ ...whyChooseData, [name]: value });
//   };

//   const handleProgramChange = (index, value) => {
//     const updated = [...programData];
//     updated[index].title = value;
//     setProgramData(updated);
//   };

//   const handleTrainerChange = (index, field, value) => {
//     const updated = [...trainerData];
//     updated[index][field] = value;
//     setTrainerData(updated);
//   };

//   const handleTestimonialChange = (index, field, value) => {
//     const updated = [...testimonialData];
//     updated[index][field] = value;
//     setTestimonialData(updated);
//   };

//   const handlePricingChange = (index, field, value) => {
//     const updated = [...pricingData];
//     updated[index][field] = value;
//     setPricingData(updated);
//   };

//   const handleFooterChange = (e) => {
//     const { name, value } = e.target;
//     setFooterData({ ...footerData, [name]: value });
//   };

//   const handleSubmit = () => {
//     const allData = {
//       heroData,
//       statsData,
//       whyChooseData,
//       programData,
//       trainerData,
//       testimonialData,
//       pricingData,
//       footerData,
//     };

//     console.log("Updated Home Page Data:", allData);
//     alert("Content updated successfully!");
//   };

//   return (
//     <div className="admin-page">
//       <AdminSidebar />

//       <main className="admin-content">
//         <h1>Edit Home Page Content</h1>

//         <div className="admin-section">
//           <div className="section-header" onClick={() => toggleSection("hero")}>
//             <h2>Hero Section</h2>
//             <span>{openSection === "hero" ? "⌃" : "⌄"}</span>
//           </div>

//           {openSection === "hero" && (
//             <div className="section-body">
//               <label>Title</label>
//               <input
//                 type="text"
//                 name="title"
//                 value={heroData.title}
//                 onChange={handleHeroChange}
//               />

//               <label>Subtitle</label>
//               <textarea
//                 name="subtitle"
//                 rows="4"
//                 value={heroData.subtitle}
//                 onChange={handleHeroChange}
//               />

//               <label>Button 1 Text</label>
//               <input
//                 type="text"
//                 name="button1"
//                 value={heroData.button1}
//                 onChange={handleHeroChange}
//               />

//               <label>Button 2 Text</label>
//               <input
//                 type="text"
//                 name="button2"
//                 value={heroData.button2}
//                 onChange={handleHeroChange}
//               />

//               <label>Background Image</label>
//               <div className="image-preview-box">
//                 <img src={heroData.image} alt="Hero Preview" />
//               </div>

//               <input type="file" accept="image/*" onChange={handleHeroImageChange} />
//             </div>
//           )}
//         </div>

//         <div className="admin-section">
//           <div className="section-header" onClick={() => toggleSection("stats")}>
//             <h2>Stats Section</h2>
//             <span>{openSection === "stats" ? "⌃" : "⌄"}</span>
//           </div>

//           {openSection === "stats" && (
//             <div className="section-body">
//               {statsData.map((item, index) => (
//                 <div className="multi-field-row" key={item.id}>
//                   <div>
//                     <label>Value</label>
//                     <input
//                       type="text"
//                       value={item.value}
//                       onChange={(e) => handleStatsChange(index, "value", e.target.value)}
//                     />
//                   </div>

//                   <div>
//                     <label>Label</label>
//                     <input
//                       type="text"
//                       value={item.label}
//                       onChange={(e) => handleStatsChange(index, "label", e.target.value)}
//                     />
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>

//         <div className="admin-section">
//           <div className="section-header" onClick={() => toggleSection("whyChoose")}>
//             <h2>Why Choose Us Section</h2>
//             <span>{openSection === "whyChoose" ? "⌃" : "⌄"}</span>
//           </div>

//           {openSection === "whyChoose" && (
//             <div className="section-body">
//               <label>Title</label>
//               <input
//                 type="text"
//                 name="title"
//                 value={whyChooseData.title}
//                 onChange={handleWhyChooseChange}
//               />

//               <label>Description</label>
//               <textarea
//                 name="description"
//                 rows="4"
//                 value={whyChooseData.description}
//                 onChange={handleWhyChooseChange}
//               />
//             </div>
//           )}
//         </div>

//         <div className="admin-section">
//           <div className="section-header" onClick={() => toggleSection("programs")}>
//             <h2>Programs Section</h2>
//             <span>{openSection === "programs" ? "⌃" : "⌄"}</span>
//           </div>

//           {openSection === "programs" && (
//             <div className="section-body">
//               {programData.map((item, index) => (
//                 <div key={item.id}>
//                   <label>Program {index + 1}</label>
//                   <input
//                     type="text"
//                     value={item.title}
//                     onChange={(e) => handleProgramChange(index, e.target.value)}
//                   />
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>

//         <div className="admin-section">
//           <div className="section-header" onClick={() => toggleSection("trainers")}>
//             <h2>Trainers Section</h2>
//             <span>{openSection === "trainers" ? "⌃" : "⌄"}</span>
//           </div>

//           {openSection === "trainers" && (
//             <div className="section-body">
//               {trainerData.map((trainer, index) => (
//                 <div className="trainer-box" key={trainer.id}>
//                   <label>Name</label>
//                   <input
//                     type="text"
//                     value={trainer.name}
//                     onChange={(e) => handleTrainerChange(index, "name", e.target.value)}
//                   />

//                   <label>Role</label>
//                   <input
//                     type="text"
//                     value={trainer.role}
//                     onChange={(e) => handleTrainerChange(index, "role", e.target.value)}
//                   />
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>

//         <div className="admin-section">
//           <div className="section-header" onClick={() => toggleSection("testimonials")}>
//             <h2>Testimonials Section</h2>
//             <span>{openSection === "testimonials" ? "⌃" : "⌄"}</span>
//           </div>

//           {openSection === "testimonials" && (
//             <div className="section-body">
//               {testimonialData.map((item, index) => (
//                 <div className="testimonial-box" key={item.id}>
//                   <label>Client Name</label>
//                   <input
//                     type="text"
//                     value={item.name}
//                     onChange={(e) => handleTestimonialChange(index, "name", e.target.value)}
//                   />

//                   <label>Review</label>
//                   <textarea
//                     rows="3"
//                     value={item.review}
//                     onChange={(e) => handleTestimonialChange(index, "review", e.target.value)}
//                   />
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>

//         <div className="admin-section">
//           <div className="section-header" onClick={() => toggleSection("pricing")}>
//             <h2>Pricing Section</h2>
//             <span>{openSection === "pricing" ? "⌃" : "⌄"}</span>
//           </div>

//           {openSection === "pricing" && (
//             <div className="section-body">
//               {pricingData.map((item, index) => (
//                 <div className="multi-field-row" key={item.id}>
//                   <div>
//                     <label>Plan Name</label>
//                     <input
//                       type="text"
//                       value={item.plan}
//                       onChange={(e) => handlePricingChange(index, "plan", e.target.value)}
//                     />
//                   </div>

//                   <div>
//                     <label>Price</label>
//                     <input
//                       type="text"
//                       value={item.price}
//                       onChange={(e) => handlePricingChange(index, "price", e.target.value)}
//                     />
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>

//         <div className="admin-section">
//           <div className="section-header" onClick={() => toggleSection("footer")}>
//             <h2>Footer Section</h2>
//             <span>{openSection === "footer" ? "⌃" : "⌄"}</span>
//           </div>

//           {openSection === "footer" && (
//             <div className="section-body">
//               <label>Footer Title</label>
//               <input
//                 type="text"
//                 name="title"
//                 value={footerData.title}
//                 onChange={handleFooterChange}
//               />

//               <label>Footer Description</label>
//               <textarea
//                 rows="4"
//                 name="description"
//                 value={footerData.description}
//                 onChange={handleFooterChange}
//               />

//               <label>Email</label>
//               <input
//                 type="text"
//                 name="email"
//                 value={footerData.email}
//                 onChange={handleFooterChange}
//               />

//               <label>Phone</label>
//               <input
//                 type="text"
//                 name="phone"
//                 value={footerData.phone}
//                 onChange={handleFooterChange}
//               />
//             </div>
//           )}
//         </div>

//         <div className="update-btn-wrap">
//           <button className="update-btn" onClick={handleSubmit}>
//             Update Content
//           </button>
//         </div>
//       </main>
//     </div>
//   );
// }

// export default AdminHomePage;






// import React, { useState, useEffect } from "react";
// import AdminSidebar from "../../Components/AdminSidebar";
// import "../../Styles/AdminHomePage.css";

// function AdminHomePage() {
//   const [openSection, setOpenSection] = useState("hero");

//   const [formData, setFormData] = useState({
//     hero: {
//       heading: "",
//       description: "",
//       primaryButtonText: "",
//       secondaryButtonText: "",
//       backgroundImage: "",
//     },
//     stats: [
//       { number: "", label: "" },
//       { number: "", label: "" },
//       { number: "", label: "" },
//     ],
//     whyChooseUs: {
//       heading: "",
//       cards: [
//         { title: "", description: "", icon: "" },
//         { title: "", description: "", icon: "" },
//         { title: "", description: "", icon: "" },
//       ],
//     },
//     cta: {
//       heading: "",
//       subHeading: "",
//       description: "",
//       primaryButtonText: "",
//       secondaryButtonText: "",
//     },
//   });

//   // ---------------- FETCH DATA ----------------
//   useEffect(() => {
//     fetchHomeContent();
//   }, []);

//   const fetchHomeContent = async () => {
//     try {
//       const res = await fetch("http://localhost:3000/api/home-content");
//       const data = await res.json();

//       if (data.success) {
//         setFormData(data.data);
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   // ---------------- TOGGLE ----------------
//   const toggleSection = (section) => {
//     setOpenSection(openSection === section ? "" : section);
//   };

//   // ---------------- HERO ----------------
//   const handleHeroChange = (e) => {
//     const { name, value } = e.target;

//     setFormData((prev) => ({
//       ...prev,
//       hero: {
//         ...prev.hero,
//         [name]: value,
//       },
//     }));
//   };

//   // ---------------- STATS ----------------
//   const handleStatChange = (index, field, value) => {
//     const updated = [...formData.stats];
//     updated[index][field] = value;

//     setFormData((prev) => ({
//       ...prev,
//       stats: updated,
//     }));
//   };

//   // ---------------- WHY CHOOSE ----------------
//   const handleWhyCardChange = (index, field, value) => {
//     const updated = [...formData.whyChooseUs.cards];
//     updated[index][field] = value;

//     setFormData((prev) => ({
//       ...prev,
//       whyChooseUs: {
//         ...prev.whyChooseUs,
//         cards: updated,
//       },
//     }));
//   };

//   const handleWhyHeadingChange = (e) => {
//     setFormData((prev) => ({
//       ...prev,
//       whyChooseUs: {
//         ...prev.whyChooseUs,
//         heading: e.target.value,
//       },
//     }));
//   };

//   // ---------------- CTA ----------------
//   const handleCTAChange = (e) => {
//     const { name, value } = e.target;

//     setFormData((prev) => ({
//       ...prev,
//       cta: {
//         ...prev.cta,
//         [name]: value,
//       },
//     }));
//   };

//   // ---------------- SUBMIT ----------------
//   const handleSubmit = async () => {
//     try {
//       const response = await fetch("http://localhost:3000/api/home-content", {
//         method: "PUT",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });

//       const result = await response.json();

//       if (result.success) {
//         alert("Content updated successfully!");
//       } else {
//         alert(result.message || "Update failed");
//       }
//     } catch (error) {
//       console.error(error);
//       alert("Error updating content");
//     }
//   };

//   return (
//     <div className="admin-page">
//       <AdminSidebar />

//       <main className="admin-content">
//         <h1>Edit Home Page Content</h1>

//         {/* HERO */}
//         <div className="admin-section">
//           <div className="section-header" onClick={() => toggleSection("hero")}>
//             <h2>Hero Section</h2>
//             <span>{openSection === "hero" ? "⌃" : "⌄"}</span>
//           </div>

//           {openSection === "hero" && (
//             <div className="section-body">
//               <label>Heading</label>
//               <input
//                 type="text"
//                 name="heading"
//                 value={formData.hero.heading}
//                 onChange={handleHeroChange}
//               />

//               <label>Description</label>
//               <textarea
//                 name="description"
//                 rows="4"
//                 value={formData.hero.description}
//                 onChange={handleHeroChange}
//               />

//               <label>Primary Button</label>
//               <input
//                 type="text"
//                 name="primaryButtonText"
//                 value={formData.hero.primaryButtonText}
//                 onChange={handleHeroChange}
//               />

//               <label>Secondary Button</label>
//               <input
//                 type="text"
//                 name="secondaryButtonText"
//                 value={formData.hero.secondaryButtonText}
//                 onChange={handleHeroChange}
//               />

//               <label>Background Image URL</label>
//               <input
//                 type="text"
//                 name="backgroundImage"
//                 value={formData.hero.backgroundImage}
//                 onChange={handleHeroChange}
//               />
//             </div>
//           )}
//         </div>

//         {/* STATS */}
//         <div className="admin-section">
//           <div className="section-header" onClick={() => toggleSection("stats")}>
//             <h2>Stats Section</h2>
//             <span>{openSection === "stats" ? "⌃" : "⌄"}</span>
//           </div>

//           {openSection === "stats" && (
//             <div className="section-body">
//               {formData.stats.map((item, index) => (
//                 <div className="multi-field-row" key={index}>
//                   <div>
//                     <label>Number</label>
//                     <input
//                       type="text"
//                       value={item.number}
//                       onChange={(e) =>
//                         handleStatChange(index, "number", e.target.value)
//                       }
//                     />
//                   </div>

//                   <div>
//                     <label>Label</label>
//                     <input
//                       type="text"
//                       value={item.label}
//                       onChange={(e) =>
//                         handleStatChange(index, "label", e.target.value)
//                       }
//                     />
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>

//         {/* WHY CHOOSE */}
//         <div className="admin-section">
//           <div
//             className="section-header"
//             onClick={() => toggleSection("why")}
//           >
//             <h2>Why Choose Us</h2>
//             <span>{openSection === "why" ? "⌃" : "⌄"}</span>
//           </div>

//           {openSection === "why" && (
//             <div className="section-body">
//               <label>Heading</label>
//               <input
//                 type="text"
//                 value={formData.whyChooseUs.heading}
//                 onChange={handleWhyHeadingChange}
//               />

//               {formData.whyChooseUs.cards.map((card, index) => (
//                 <div key={index} className="trainer-box">
//                   <label>Title</label>
//                   <input
//                     type="text"
//                     value={card.title}
//                     onChange={(e) =>
//                       handleWhyCardChange(index, "title", e.target.value)
//                     }
//                   />

//                   <label>Description</label>
//                   <input
//                     type="text"
//                     value={card.description}
//                     onChange={(e) =>
//                       handleWhyCardChange(index, "description", e.target.value)
//                     }
//                   />

//                   <label>Icon (FontAwesome)</label>
//                   <input
//                     type="text"
//                     value={card.icon}
//                     onChange={(e) =>
//                       handleWhyCardChange(index, "icon", e.target.value)
//                     }
//                   />
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>

//         {/* CTA */}
//         <div className="admin-section">
//           <div className="section-header" onClick={() => toggleSection("cta")}>
//             <h2>CTA Section</h2>
//             <span>{openSection === "cta" ? "⌃" : "⌄"}</span>
//           </div>

//           {openSection === "cta" && (
//             <div className="section-body">
//               <label>Heading</label>
//               <input
//                 type="text"
//                 name="heading"
//                 value={formData.cta.heading}
//                 onChange={handleCTAChange}
//               />

//               <label>Sub Heading</label>
//               <input
//                 type="text"
//                 name="subHeading"
//                 value={formData.cta.subHeading}
//                 onChange={handleCTAChange}
//               />

//               <label>Description</label>
//               <textarea
//                 name="description"
//                 rows="3"
//                 value={formData.cta.description}
//                 onChange={handleCTAChange}
//               />

//               <label>Primary Button</label>
//               <input
//                 type="text"
//                 name="primaryButtonText"
//                 value={formData.cta.primaryButtonText}
//                 onChange={handleCTAChange}
//               />

//               <label>Secondary Button</label>
//               <input
//                 type="text"
//                 name="secondaryButtonText"
//                 value={formData.cta.secondaryButtonText}
//                 onChange={handleCTAChange}
//               />
//             </div>
//           )}
//         </div>

//         {/* UPDATE BUTTON */}
//         <div className="update-btn-wrap">
//           <button className="update-btn" onClick={handleSubmit}>
//             Update Content
//           </button>
//         </div>
//       </main>
//     </div>
//   );
// }

// export default AdminHomePage;





// import React, { useState, useEffect } from "react";
// import AdminSidebar from "../../Components/AdminSidebar";
// import "../../Styles/AdminHomePage.css";

// function AdminHomePage() {
//   const [openSection, setOpenSection] = useState("hero");
//   const [uploading, setUploading] = useState(false);
//   const [saving, setSaving] = useState(false);
//   const [uploadMessage, setUploadMessage] = useState("");

//   const [formData, setFormData] = useState({
//     hero: {
//       heading: "",
//       description: "",
//       primaryButtonText: "",
//       secondaryButtonText: "",
//       backgroundImage: "",
//     },
//     stats: [
//       { number: "", label: "" },
//       { number: "", label: "" },
//       { number: "", label: "" },
//     ],
//     whyChooseUs: {
//       heading: "",
//       cards: [
//         { title: "", description: "", icon: "" },
//         { title: "", description: "", icon: "" },
//         { title: "", description: "", icon: "" },
//       ],
//     },
//     cta: {
//       heading: "",
//       subHeading: "",
//       description: "",
//       primaryButtonText: "",
//       secondaryButtonText: "",
//     },
//   });

//   useEffect(() => {
//     fetchHomeContent();
//   }, []);

//   const fetchHomeContent = async () => {
//     try {
//       const res = await fetch("http://localhost:3000/api/home-content");
//       const data = await res.json();

//       if (data.success) {
//         setFormData(data.data);
//       }
//     } catch (error) {
//       console.error("Fetch error:", error);
//     }
//   };

//   const toggleSection = (section) => {
//     setOpenSection(openSection === section ? "" : section);
//   };

//   const handleHeroChange = (e) => {
//     const { name, value } = e.target;

//     setFormData((prev) => ({
//       ...prev,
//       hero: {
//         ...prev.hero,
//         [name]: value,
//       },
//     }));
//   };

//   const handleStatChange = (index, field, value) => {
//     const updated = [...formData.stats];
//     updated[index][field] = value;

//     setFormData((prev) => ({
//       ...prev,
//       stats: updated,
//     }));
//   };

//   const handleWhyHeadingChange = (e) => {
//     setFormData((prev) => ({
//       ...prev,
//       whyChooseUs: {
//         ...prev.whyChooseUs,
//         heading: e.target.value,
//       },
//     }));
//   };

//   const handleWhyCardChange = (index, field, value) => {
//     const updated = [...formData.whyChooseUs.cards];
//     updated[index][field] = value;

//     setFormData((prev) => ({
//       ...prev,
//       whyChooseUs: {
//         ...prev.whyChooseUs,
//         cards: updated,
//       },
//     }));
//   };

//   const handleCTAChange = (e) => {
//     const { name, value } = e.target;

//     setFormData((prev) => ({
//       ...prev,
//       cta: {
//         ...prev.cta,
//         [name]: value,
//       },
//     }));
//   };

//   const handleImageUpload = async (e) => {
//     const file = e.target.files[0];
//     if (!file) return;

//     const imageData = new FormData();
//     imageData.append("image", file);

//     setUploading(true);
//     setUploadMessage("Uploading image... Please wait.");

//     try {
//       const response = await fetch("http://localhost:3000/api/upload", {
//         method: "POST",
//         body: imageData,
//       });

//       const result = await response.json();
//       console.log("Upload response:", result);

//       if (result.success) {
//         setFormData((prev) => ({
//           ...prev,
//           hero: {
//             ...prev.hero,
//             backgroundImage: result.imageUrl,
//           },
//         }));

//         setUploadMessage("Image uploaded successfully.");
//         alert("Image uploaded successfully!");
//       } else {
//         setUploadMessage(result.message || "Image upload failed.");
//         alert(result.message || "Image upload failed");
//       }
//     } catch (error) {
//       console.error("Upload error:", error);
//       setUploadMessage("Error uploading image.");
//       alert("Error uploading image");
//     } finally {
//       setUploading(false);
//     }
//   };

//   const handleSubmit = async () => {
//     if (uploading) {
//       alert("Please wait until image upload is completed.");
//       return;
//     }

//     try {
//       setSaving(true);

//       const response = await fetch("http://localhost:3000/api/home-content", {
//         method: "PUT",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });

//       const result = await response.json();

//       if (result.success) {
//         alert("Content updated successfully!");
//         fetchHomeContent();
//       } else {
//         alert(result.message || "Update failed");
//       }
//     } catch (error) {
//       console.error("Update error:", error);
//       alert("Error updating content");
//     } finally {
//       setSaving(false);
//     }
//   };

//   return (
//     <div className="admin-page">
//       <AdminSidebar />

//       <main className="admin-content">
//         <h1>Edit Home Page Content</h1>

//         <div className="admin-section">
//           <div className="section-header" onClick={() => toggleSection("hero")}>
//             <h2>Hero Section</h2>
//             <span>{openSection === "hero" ? "⌃" : "⌄"}</span>
//           </div>

//           {openSection === "hero" && (
//             <div className="section-body">
//               <label>Heading</label>
//               <input
//                 type="text"
//                 name="heading"
//                 value={formData.hero.heading}
//                 onChange={handleHeroChange}
//               />

//               <label>Description</label>
//               <textarea
//                 name="description"
//                 rows="4"
//                 value={formData.hero.description}
//                 onChange={handleHeroChange}
//               />

//               <label>Primary Button</label>
//               <input
//                 type="text"
//                 name="primaryButtonText"
//                 value={formData.hero.primaryButtonText}
//                 onChange={handleHeroChange}
//               />

//               <label>Secondary Button</label>
//               <input
//                 type="text"
//                 name="secondaryButtonText"
//                 value={formData.hero.secondaryButtonText}
//                 onChange={handleHeroChange}
//               />

//               <label>Upload Background Image</label>
//               <input
//                 type="file"
//                 accept="image/*"
//                 onChange={handleImageUpload}
//               />

//               {uploadMessage && (
//                 <p className="upload-status-text">{uploadMessage}</p>
//               )}

//               {formData.hero.backgroundImage && (
//                 <div className="image-preview-box">
//                   <img
//                     src={formData.hero.backgroundImage}
//                     alt="Hero Preview"
//                   />
//                 </div>
//               )}
//             </div>
//           )}
//         </div>

//         <div className="admin-section">
//           <div className="section-header" onClick={() => toggleSection("stats")}>
//             <h2>Stats Section</h2>
//             <span>{openSection === "stats" ? "⌃" : "⌄"}</span>
//           </div>

//           {openSection === "stats" && (
//             <div className="section-body">
//               {formData.stats.map((item, index) => (
//                 <div className="multi-field-row" key={index}>
//                   <div>
//                     <label>Number</label>
//                     <input
//                       type="text"
//                       value={item.number}
//                       onChange={(e) =>
//                         handleStatChange(index, "number", e.target.value)
//                       }
//                     />
//                   </div>

//                   <div>
//                     <label>Label</label>
//                     <input
//                       type="text"
//                       value={item.label}
//                       onChange={(e) =>
//                         handleStatChange(index, "label", e.target.value)
//                       }
//                     />
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>

//         <div className="admin-section">
//           <div className="section-header" onClick={() => toggleSection("why")}>
//             <h2>Why Choose Us</h2>
//             <span>{openSection === "why" ? "⌃" : "⌄"}</span>
//           </div>

//           {openSection === "why" && (
//             <div className="section-body">
//               <label>Heading</label>
//               <input
//                 type="text"
//                 value={formData.whyChooseUs.heading}
//                 onChange={handleWhyHeadingChange}
//               />

//               {formData.whyChooseUs.cards.map((card, index) => (
//                 <div className="trainer-box" key={index}>
//                   <label>Card Title</label>
//                   <input
//                     type="text"
//                     value={card.title}
//                     onChange={(e) =>
//                       handleWhyCardChange(index, "title", e.target.value)
//                     }
//                   />

//                   <label>Card Description</label>
//                   <input
//                     type="text"
//                     value={card.description}
//                     onChange={(e) =>
//                       handleWhyCardChange(index, "description", e.target.value)
//                     }
//                   />

//                   <label>Icon Class</label>
//                   <input
//                     type="text"
//                     value={card.icon}
//                     onChange={(e) =>
//                       handleWhyCardChange(index, "icon", e.target.value)
//                     }
//                     placeholder="fa-dumbbell"
//                   />
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>

//         <div className="admin-section">
//           <div className="section-header" onClick={() => toggleSection("cta")}>
//             <h2>CTA Section</h2>
//             <span>{openSection === "cta" ? "⌃" : "⌄"}</span>
//           </div>

//           {openSection === "cta" && (
//             <div className="section-body">
//               <label>Heading</label>
//               <input
//                 type="text"
//                 name="heading"
//                 value={formData.cta.heading}
//                 onChange={handleCTAChange}
//               />

//               <label>Sub Heading</label>
//               <input
//                 type="text"
//                 name="subHeading"
//                 value={formData.cta.subHeading}
//                 onChange={handleCTAChange}
//               />

//               <label>Description</label>
//               <textarea
//                 rows="4"
//                 name="description"
//                 value={formData.cta.description}
//                 onChange={handleCTAChange}
//               />

//               <label>Primary Button Text</label>
//               <input
//                 type="text"
//                 name="primaryButtonText"
//                 value={formData.cta.primaryButtonText}
//                 onChange={handleCTAChange}
//               />

//               <label>Secondary Button Text</label>
//               <input
//                 type="text"
//                 name="secondaryButtonText"
//                 value={formData.cta.secondaryButtonText}
//                 onChange={handleCTAChange}
//               />
//             </div>
//           )}
//         </div>

//         <div className="update-btn-wrap">
//           <button
//             className="update-btn"
//             onClick={handleSubmit}
//             disabled={uploading || saving}
//           >
//             {uploading
//               ? "Please wait, image uploading..."
//               : saving
//               ? "Saving..."
//               : "Update Content"}
//           </button>
//         </div>
//       </main>
//     </div>
//   );
// }

// export default AdminHomePage;





import React, { useState, useEffect } from "react";
import AdminSidebar from "../../Components/AdminSidebar";
import "../../Styles/AdminHomePage.css";

function AdminHomePage() {
  const [openSection, setOpenSection] = useState("hero");
  const [uploading, setUploading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [uploadMessage, setUploadMessage] = useState("");

  const [formData, setFormData] = useState({
    hero: {
      heading: "",
      description: "",
      primaryButtonText: "",
      secondaryButtonText: "",
      backgroundImage: "",
    },
    stats: [
      { number: "", label: "" },
      { number: "", label: "" },
      { number: "", label: "" },
    ],
    whyChooseUs: {
      heading: "",
      cards: [
        { title: "", description: "", icon: "" },
        { title: "", description: "", icon: "" },
        { title: "", description: "", icon: "" },
      ],
    },
    cta: {
      heading: "",
      subHeading: "",
      description: "",
      primaryButtonText: "",
      secondaryButtonText: "",
    },
  });

  useEffect(() => {
    fetchHomeContent();
  }, []);

  const fetchHomeContent = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/home-content");
      const data = await res.json();

      if (data.success) {
        setFormData(data.data);
      }
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? "" : section);
  };

  const handleHeroChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      hero: {
        ...prev.hero,
        [name]: value,
      },
    }));
  };

  const handleStatChange = (index, field, value) => {
    const updated = [...formData.stats];
    updated[index][field] = value;

    setFormData((prev) => ({
      ...prev,
      stats: updated,
    }));
  };

  const handleWhyHeadingChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      whyChooseUs: {
        ...prev.whyChooseUs,
        heading: e.target.value,
      },
    }));
  };

  const handleWhyCardChange = (index, field, value) => {
    const updated = [...formData.whyChooseUs.cards];
    updated[index][field] = value;

    setFormData((prev) => ({
      ...prev,
      whyChooseUs: {
        ...prev.whyChooseUs,
        cards: updated,
      },
    }));
  };

  const handleCTAChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      cta: {
        ...prev.cta,
        [name]: value,
      },
    }));
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const token = localStorage.getItem("token");
    if (!token) {
      alert("Please login first");
      return;
    }

    const imageData = new FormData();
    imageData.append("image", file);

    setUploading(true);
    setUploadMessage("Uploading image... Please wait.");

    try {
      const response = await fetch("http://localhost:3000/api/upload", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: imageData,
      });

      const result = await response.json();

      if (result.success) {
        setFormData((prev) => ({
          ...prev,
          hero: {
            ...prev.hero,
            backgroundImage: result.imageUrl,
          },
        }));

        setUploadMessage("Image uploaded successfully.");
      } else {
        setUploadMessage(result.message || "Image upload failed.");
        alert(result.message || "Image upload failed");
      }
    } catch (error) {
      console.error("Upload error:", error);
      setUploadMessage("Error uploading image.");
      alert("Error uploading image");
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async () => {
    if (uploading) {
      alert("Please wait until image upload is completed.");
      return;
    }

    const token = localStorage.getItem("token");
    if (!token) {
      alert("Please login first");
      return;
    }

    try {
      setSaving(true);

      const response = await fetch("http://localhost:3000/api/home-content", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        alert("Content updated successfully!");
        fetchHomeContent();
      } else {
        alert(result.message || "Update failed");
      }
    } catch (error) {
      console.error("Update error:", error);
      alert("Error updating content");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="admin-page">
      <AdminSidebar />

      <main className="admin-content">
        <h1>Edit Home Page Content</h1>

        <div className="admin-section">
          <div className="section-header" onClick={() => toggleSection("hero")}>
            <h2>Hero Section</h2>
            <span>{openSection === "hero" ? "⌃" : "⌄"}</span>
          </div>

          {openSection === "hero" && (
            <div className="section-body">
              <label>Heading</label>
              <input
                type="text"
                name="heading"
                value={formData.hero.heading}
                onChange={handleHeroChange}
              />

              <label>Description</label>
              <textarea
                name="description"
                rows="4"
                value={formData.hero.description}
                onChange={handleHeroChange}
              />

              <label>Primary Button</label>
              <input
                type="text"
                name="primaryButtonText"
                value={formData.hero.primaryButtonText}
                onChange={handleHeroChange}
              />

              <label>Secondary Button</label>
              <input
                type="text"
                name="secondaryButtonText"
                value={formData.hero.secondaryButtonText}
                onChange={handleHeroChange}
              />

              <label>Upload Background Image</label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
              />

              {uploadMessage && (
                <p className="upload-status-text">{uploadMessage}</p>
              )}

              {formData.hero.backgroundImage && (
                <div className="image-preview-box">
                  <img
                    src={formData.hero.backgroundImage}
                    alt="Hero Preview"
                  />
                </div>
              )}
            </div>
          )}
        </div>

        <div className="admin-section">
          <div className="section-header" onClick={() => toggleSection("stats")}>
            <h2>Stats Section</h2>
            <span>{openSection === "stats" ? "⌃" : "⌄"}</span>
          </div>

          {openSection === "stats" && (
            <div className="section-body">
              {formData.stats.map((item, index) => (
                <div className="multi-field-row" key={index}>
                  <div>
                    <label>Number</label>
                    <input
                      type="text"
                      value={item.number}
                      onChange={(e) =>
                        handleStatChange(index, "number", e.target.value)
                      }
                    />
                  </div>

                  <div>
                    <label>Label</label>
                    <input
                      type="text"
                      value={item.label}
                      onChange={(e) =>
                        handleStatChange(index, "label", e.target.value)
                      }
                    />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="admin-section">
          <div className="section-header" onClick={() => toggleSection("why")}>
            <h2>Why Choose Us</h2>
            <span>{openSection === "why" ? "⌃" : "⌄"}</span>
          </div>

          {openSection === "why" && (
            <div className="section-body">
              <label>Heading</label>
              <input
                type="text"
                value={formData.whyChooseUs.heading}
                onChange={handleWhyHeadingChange}
              />

              {formData.whyChooseUs.cards.map((card, index) => (
                <div className="trainer-box" key={index}>
                  <label>Card Title</label>
                  <input
                    type="text"
                    value={card.title}
                    onChange={(e) =>
                      handleWhyCardChange(index, "title", e.target.value)
                    }
                  />

                  <label>Card Description</label>
                  <input
                    type="text"
                    value={card.description}
                    onChange={(e) =>
                      handleWhyCardChange(index, "description", e.target.value)
                    }
                  />

                  <label>Icon Class</label>
                  <input
                    type="text"
                    value={card.icon}
                    onChange={(e) =>
                      handleWhyCardChange(index, "icon", e.target.value)
                    }
                    placeholder="fa-dumbbell"
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="admin-section">
          <div className="section-header" onClick={() => toggleSection("cta")}>
            <h2>CTA Section</h2>
            <span>{openSection === "cta" ? "⌃" : "⌄"}</span>
          </div>

          {openSection === "cta" && (
            <div className="section-body">
              <label>Heading</label>
              <input
                type="text"
                name="heading"
                value={formData.cta.heading}
                onChange={handleCTAChange}
              />

              <label>Sub Heading</label>
              <input
                type="text"
                name="subHeading"
                value={formData.cta.subHeading}
                onChange={handleCTAChange}
              />

              <label>Description</label>
              <textarea
                rows="4"
                name="description"
                value={formData.cta.description}
                onChange={handleCTAChange}
              />

              <label>Primary Button Text</label>
              <input
                type="text"
                name="primaryButtonText"
                value={formData.cta.primaryButtonText}
                onChange={handleCTAChange}
              />

              <label>Secondary Button Text</label>
              <input
                type="text"
                name="secondaryButtonText"
                value={formData.cta.secondaryButtonText}
                onChange={handleCTAChange}
              />
            </div>
          )}
        </div>

        <div className="update-btn-wrap">
          <button
            className="update-btn"
            onClick={handleSubmit}
            disabled={uploading || saving}
          >
            {uploading
              ? "Please wait, image uploading..."
              : saving
              ? "Saving..."
              : "Update Content"}
          </button>
        </div>
      </main>
    </div>
  );
}

export default AdminHomePage;