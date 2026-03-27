import React, { useState } from "react";
import "../../Styles/AdminHomePage.css"

function AdminHomePage() {
  const [openSection, setOpenSection] = useState("hero");

  const [heroData, setHeroData] = useState({
    title: "Complete Fitness for Body, Mind & Energy",
    subtitle:
      "Gym training, yoga, Zumba dance programs designed to help you achieve strength, flexibility and confidence.",
    button1: "Start 7-Day Free Trial",
    button2: "View Programs",
    image:
      "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=800"
  });

  const [statsData, setStatsData] = useState([
    { id: 1, value: "4.9", label: "Google Rating" },
    { id: 2, value: "500+", label: "Active Members" },
    { id: 3, value: "10+", label: "Certified Trainers" }
  ]);

  const [whyChooseData, setWhyChooseData] = useState({
    title: "Why Choose Us",
    description:
      "We provide expert trainers, modern equipment, and personalized fitness programs to help you reach your goals."
  });

  const [programData, setProgramData] = useState([
    { id: 1, title: "Cardio Training" },
    { id: 2, title: "Yoga Classes" },
    { id: 3, title: "Zumba Sessions" }
  ]);

  const [trainerData, setTrainerData] = useState([
    { id: 1, name: "Emilia Clarke", role: "Strength Trainer" },
    { id: 2, name: "Michael Lee", role: "Yoga Trainer" }
  ]);

  const [testimonialData, setTestimonialData] = useState([
    { id: 1, name: "Rahul Sharma", review: "Amazing trainers and environment." },
    { id: 2, name: "Priya Patel", review: "Best fitness program I ever joined." }
  ]);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? "" : section);
  };

  const handleHeroChange = (e) => {
    const { name, value } = e.target;
    setHeroData({ ...heroData, [name]: value });
  };

  const handleHeroImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setHeroData({ ...heroData, image: imageUrl });
    }
  };

  const handleStatsChange = (index, field, value) => {
    const updatedStats = [...statsData];
    updatedStats[index][field] = value;
    setStatsData(updatedStats);
  };

  const handleWhyChooseChange = (e) => {
    const { name, value } = e.target;
    setWhyChooseData({ ...whyChooseData, [name]: value });
  };

  const handleProgramChange = (index, value) => {
    const updatedPrograms = [...programData];
    updatedPrograms[index].title = value;
    setProgramData(updatedPrograms);
  };

  const handleTrainerChange = (index, field, value) => {
    const updatedTrainers = [...trainerData];
    updatedTrainers[index][field] = value;
    setTrainerData(updatedTrainers);
  };

  const handleTestimonialChange = (index, field, value) => {
    const updatedTestimonials = [...testimonialData];
    updatedTestimonials[index][field] = value;
    setTestimonialData(updatedTestimonials);
  };

  const handleSubmit = () => {
    const allData = {
      heroData,
      statsData,
      whyChooseData,
      programData,
      trainerData,
      testimonialData
    };

    console.log("Updated Admin Data:", allData);
    alert("Content updated successfully!");
  };

  return (
    <div className="admin-page">
      {/* Sidebar */}
      <aside className="admin-sidebar">
        <div className="admin-logo">
          <h2>VICTORY FIT</h2>
          <p>Dream it. Do it.</p>
        </div>

        <ul className="sidebar-menu">
          <li>Dashboard</li>
          <li>Home Page</li>
          <li>Programs</li>
          <li>Trainers</li>
          <li>Testimonials</li>
          <li>Settings</li>
        </ul>

        <div className="admin-user-box">
          <div className="admin-user-image">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="Admin"
            />
          </div>
          <div>
            <h4>Hello, Admin</h4>
            <p>Logout</p>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="admin-content">
        <h1>Edit Home Page Content</h1>

        {/* Hero Section */}
        <div className="admin-section">
          <div
            className="section-header"
            onClick={() => toggleSection("hero")}
          >
            <h2>Hero Section</h2>
            <span>{openSection === "hero" ? "⌃" : "⌄"}</span>
          </div>

          {openSection === "hero" && (
            <div className="section-body">
              <label>Title</label>
              <input
                type="text"
                name="title"
                value={heroData.title}
                onChange={handleHeroChange}
              />

              <label>Subtitle</label>
              <textarea
                name="subtitle"
                value={heroData.subtitle}
                onChange={handleHeroChange}
                rows="4"
              />

              <label>Button 1 Text</label>
              <input
                type="text"
                name="button1"
                value={heroData.button1}
                onChange={handleHeroChange}
              />

              <label>Button 2 Text</label>
              <input
                type="text"
                name="button2"
                value={heroData.button2}
                onChange={handleHeroChange}
              />

              <label>Background Image</label>
              <div className="image-preview-box">
                <img src={heroData.image} alt="Hero Preview" />
              </div>

              <input
                type="file"
                accept="image/*"
                onChange={handleHeroImageChange}
              />
            </div>
          )}
        </div>

        {/* Stats Section */}
        <div className="admin-section">
          <div
            className="section-header"
            onClick={() => toggleSection("stats")}
          >
            <h2>Stats Section</h2>
            <span>{openSection === "stats" ? "⌃" : "⌄"}</span>
          </div>

          {openSection === "stats" && (
            <div className="section-body">
              {statsData.map((item, index) => (
                <div className="multi-field-row" key={item.id}>
                  <div>
                    <label>Value</label>
                    <input
                      type="text"
                      value={item.value}
                      onChange={(e) =>
                        handleStatsChange(index, "value", e.target.value)
                      }
                    />
                  </div>

                  <div>
                    <label>Label</label>
                    <input
                      type="text"
                      value={item.label}
                      onChange={(e) =>
                        handleStatsChange(index, "label", e.target.value)
                      }
                    />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Why Choose Us Section */}
        <div className="admin-section">
          <div
            className="section-header"
            onClick={() => toggleSection("whyChoose")}
          >
            <h2>Why Choose Us Section</h2>
            <span>{openSection === "whyChoose" ? "⌃" : "⌄"}</span>
          </div>

          {openSection === "whyChoose" && (
            <div className="section-body">
              <label>Title</label>
              <input
                type="text"
                name="title"
                value={whyChooseData.title}
                onChange={handleWhyChooseChange}
              />

              <label>Description</label>
              <textarea
                name="description"
                rows="4"
                value={whyChooseData.description}
                onChange={handleWhyChooseChange}
              />
            </div>
          )}
        </div>

        {/* Programs Section */}
        <div className="admin-section">
          <div
            className="section-header"
            onClick={() => toggleSection("programs")}
          >
            <h2>Our Fitness Programs</h2>
            <span>{openSection === "programs" ? "⌃" : "⌄"}</span>
          </div>

          {openSection === "programs" && (
            <div className="section-body">
              {programData.map((item, index) => (
                <div key={item.id}>
                  <label>Program {index + 1}</label>
                  <input
                    type="text"
                    value={item.title}
                    onChange={(e) => handleProgramChange(index, e.target.value)}
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Trainers Section */}
        <div className="admin-section">
          <div
            className="section-header"
            onClick={() => toggleSection("trainers")}
          >
            <h2>Trainers Section</h2>
            <span>{openSection === "trainers" ? "⌃" : "⌄"}</span>
          </div>

          {openSection === "trainers" && (
            <div className="section-body">
              {trainerData.map((trainer, index) => (
                <div className="trainer-box" key={trainer.id}>
                  <label>Name</label>
                  <input
                    type="text"
                    value={trainer.name}
                    onChange={(e) =>
                      handleTrainerChange(index, "name", e.target.value)
                    }
                  />

                  <label>Role</label>
                  <input
                    type="text"
                    value={trainer.role}
                    onChange={(e) =>
                      handleTrainerChange(index, "role", e.target.value)
                    }
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Testimonials Section */}
        <div className="admin-section">
          <div
            className="section-header"
            onClick={() => toggleSection("testimonials")}
          >
            <h2>Testimonials Section</h2>
            <span>{openSection === "testimonials" ? "⌃" : "⌄"}</span>
          </div>

          {openSection === "testimonials" && (
            <div className="section-body">
              {testimonialData.map((item, index) => (
                <div className="testimonial-box" key={item.id}>
                  <label>Client Name</label>
                  <input
                    type="text"
                    value={item.name}
                    onChange={(e) =>
                      handleTestimonialChange(index, "name", e.target.value)
                    }
                  />

                  <label>Review</label>
                  <textarea
                    rows="3"
                    value={item.review}
                    onChange={(e) =>
                      handleTestimonialChange(index, "review", e.target.value)
                    }
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="update-btn-wrap">
          <button className="update-btn" onClick={handleSubmit}>
            Update Content
          </button>
        </div>
      </main>
    </div>
  );
}

export default AdminHomePage;