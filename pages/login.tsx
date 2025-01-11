"use client";

import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useRouter } from "next/router";
import styles from "../styles/login.module.css";
import axios from "axios";

export default function TeacherLogin() {
  const [formData, setForm] = useState({});
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [getUrl, setGet] = useState("");
  const [msg, setMsg] = useState("Please Enter your Password");
  const [schools, setSchools] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const getSchools = async () => {
      try {
        const response = await axios.get("http://localhost:5000/schools_info");
        setSchools(response.data);
      } catch (error) {
        console.error("Error fetching schools:", error);
      }
    };

    getSchools();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      if (!getUrl) return;

      setLoading(true);
      try {
        const response = await axios.post(getUrl, formData);
        setData(response.data);

        if (response.data.message === "Login successful") {
          setMsg("Success!");
          router.push(`/${response.data.redirect}`);
        } else {
          setMsg("Failed");
        }
      } catch (error) {
        console.error("Error during fetch:", error);
        setMsg("An error occurred. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [getUrl]); 
  function handleSubmit(e) {
    e.preventDefault();
    setGet("http://127.0.0.1:5000/login");
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  return (
    <div className={styles.container}>
      {/* This will be our container */}
      <form onSubmit={handleSubmit} className={styles.form}>
        <h1>Hello </h1>
        <FormControl
          sx={{
            m: 1,
            minWidth: 200,
            backgroundColor: "white",
            position: "relative",
            borderRadius: "5px",
          }}
        >
          <InputLabel sx={{ margin: "30px", fontSize: "20px" }}>
            Select School
          </InputLabel>
          <Select
            value=""
            onChange={(e) => setForm({ ...formData, school: e.target.value })}
            label="schools"
          >
            {schools.map((school, index) => (
              <MenuItem key={index} value={school}>
                {school}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <div className={styles.inputGroup}>
          <label htmlFor="username" className={styles.label}>
            Email:
          </label>
          <input
            type="text"
            name="username"
            id="username"
            value={formData.username || ""}
            onChange={handleChange}
            className={styles.input}
          />
          <label htmlFor="password" className={styles.label}>
            Password:
          </label>
          <input
            type="password"
            name="password"
            id="password"
            value={formData.password || ""}
            onChange={handleChange}
            className={styles.input}
          />
        </div>
        <button type="submit" className={styles.button} disabled={isLoading}>
          {isLoading ? "Loading..." : "Submit"}
        </button>
        <div>{msg}</div>
      </form>
    </div>
  );
}

