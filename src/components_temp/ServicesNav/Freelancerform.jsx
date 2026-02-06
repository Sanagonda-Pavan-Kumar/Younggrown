import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { HiOutlineArrowLeft, HiOutlineCloudArrowUp } from "react-icons/hi2";
import Footers from "../Footers";
import { supabase } from "../../lib/supabase";

export default function FreelancerForm() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    experience: "",
    resume: null,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "resume") {
      setFormData({ ...formData, resume: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      /* 1️⃣ Upload resume from device */
      const file = formData.resume;
      const fileName = `${Date.now()}-${file.name}`;

      const { error: uploadError } = await supabase.storage
        .from("resumes")
        .upload(fileName, file);

      if (uploadError) throw uploadError;

      /* 2️⃣ Get public URL of resume */
      const { data: urlData } = supabase.storage
        .from("resumes")
        .getPublicUrl(fileName);

      /* 3️⃣ Insert form data into table */
      const { error: insertError } = await supabase
        .from("Freelancer_Applications")
        .insert({
          first_name: formData.firstName,
          last_name: formData.lastName,
          email: formData.email,
          mobile: formData.mobile,
          experience: formData.experience,
          resume_url: urlData.publicUrl,
        });

      if (insertError) throw insertError;

      alert("Application submitted successfully!");
      navigate("/Freelancing");

    } catch (error) {
      console.error("Submission error:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.bgGlow} />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        style={styles.formWrapper}
      >
        <button onClick={() => navigate(-1)} style={styles.backBtn}>
          <HiOutlineArrowLeft /> Back to Freelancing
        </button>

        <header style={styles.header}>
          <h1 style={styles.title}>
            <span style={styles.blue}>Younggrown</span>
          </h1>
          <p style={styles.subtitle}>
            Fill in your details to get matched with high-impact client projects.
          </p>
        </header>

        <form onSubmit={handleSubmit} style={styles.form}>
          {/* Name */}
          <div style={styles.row}>
            <div style={styles.inputGroup}>
              <label style={styles.label}>First Name</label>
              <input
                name="firstName"
                type="text"
                required
                onChange={handleChange}
                style={styles.input}
              />
            </div>

            <div style={styles.inputGroup}>
              <label style={styles.label}>Last Name</label>
              <input
                name="lastName"
                type="text"
                required
                onChange={handleChange}
                style={styles.input}
              />
            </div>
          </div>

          {/* Contact */}
          <div style={styles.row}>
            <div style={styles.inputGroup}>
              <label style={styles.label}>Email Address</label>
              <input
                name="email"
                type="email"
                required
                onChange={handleChange}
                style={styles.input}
              />
            </div>

            <div style={styles.inputGroup}>
              <label style={styles.label}>Mobile Number</label>
              <input
                name="mobile"
                type="tel"
                required
                onChange={handleChange}
                style={styles.input}
              />
            </div>
          </div>

          {/* Experience */}
          <div style={styles.inputGroup}>
            <label style={styles.label}>
              Years of Experience / Primary Expertise
            </label>
            <input
              name="experience"
              type="text"
              required
              onChange={handleChange}
              style={styles.input}
            />
          </div>

          {/* Resume */}
          <div style={styles.inputGroup}>
            <label style={styles.label}>Upload Resume (PDF / DOC)</label>
            <div style={styles.fileUploadWrapper}>
              <input
                name="resume"
                type="file"
                accept=".pdf,.doc,.docx"
                required
                onChange={handleChange}
                style={styles.fileInput}
                id="resume-upload"
              />
              <label htmlFor="resume-upload" style={styles.fileLabel}>
                <HiOutlineCloudArrowUp size={24} />
                {formData.resume
                  ? formData.resume.name
                  : "Choose File or Drag & Drop"}
              </label>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={loading}
            style={styles.submitBtn}
          >
            {loading ? "Processing..." : "Submit Application"}
          </motion.button>
        </form>
      </motion.div>

      <Footers />
    </div>
  );
}

/* ===================== STYLES ===================== */

const styles = {
  container: {
    minHeight: "100vh",
    position: "relative",
    color: "#fff",
    fontFamily: "'Inter', sans-serif",
  },
  bgGlow: {
    position: "absolute",
    top: 0,
    left: "50%",
    transform: "translateX(-50%)",
    width: "100%",
    height: "600px",
    zIndex: 0,
  },
  formWrapper: {
    position: "relative",
    zIndex: 1,
    maxWidth: "800px",
    margin: "0 auto",
    padding: "120px 24px 80px",
  },
  backBtn: {
    background: "none",
    border: "none",
    color: "#3b82f6",
    display: "flex",
    alignItems: "center",
    gap: "8px",
    cursor: "pointer",
    fontSize: "1rem",
    marginBottom: "32px",
  },
  header: {
    marginBottom: "48px",
    textAlign: "center",
  },
  title: {
    fontSize: "clamp(2rem, 5vw, 3rem)",
    fontWeight: 800,
    marginBottom: "12px",
  },
  blue: {
    color: "#3b82f6",
  },
  subtitle: {
    color: "#94a3b8",
    fontSize: "1.1rem",
  },
  form: {
    background: "rgba(15, 23, 42, 0.6)",
    padding: "40px",
    borderRadius: "32px",
    border: "1px solid rgba(255,255,255,0.05)",
    backdropFilter: "blur(20px)",
    display: "flex",
    flexDirection: "column",
    gap: "24px",
  },
  row: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "20px",
  },
  inputGroup: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },
  label: {
    fontSize: "0.9rem",
    color: "#cbd5e1",
    fontWeight: 500,
  },
  input: {
    padding: "14px 18px",
    borderRadius: "12px",
    background: "#0f172a",
    border: "1px solid #1e293b",
    color: "#fff",
    outline: "none",
    fontSize: "1rem",
  },
  fileUploadWrapper: {
    position: "relative",
    width: "100%",
    height: "80px",
    border: "2px dashed #1e293b",
    borderRadius: "12px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#0f172a",
  },
  fileInput: {
    position: "absolute",
    width: "100%",
    height: "100%",
    opacity: 0,
    cursor: "pointer",
  },
  fileLabel: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "8px",
    color: "#94a3b8",
    pointerEvents: "none",
  },
  submitBtn: {
    padding: "18px",
    borderRadius: "14px",
    background: "#3b82f6",
    color: "#fff",
    border: "none",
    fontWeight: 700,
    fontSize: "1.1rem",
    cursor: "pointer",
    marginTop: "12px",
  },
};
