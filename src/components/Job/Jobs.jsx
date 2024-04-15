import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../../main";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categoryFilter, setCategoryFilter] = useState("");
  const [categories, setCategories] = useState([
    "Graphics & Design",
    "Mobile App Development",
    "Frontend Web Development",
    "MERN Stack Development",
    "Account & Finance",
    "Artificial Intelligence",
    "Video Animation",
    "MEAN Stack Development",
    "MEVN Stack Development",
    "Data Entry Operator",
   
  ]); // State to store categories
  const { isAuthorized } = useContext(Context);
  const navigateTo = useNavigate();

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/api/v1/job/getall",
          {
            withCredentials: true,
          }
        );
        setJobs(response.data.jobs);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching jobs:", error);
        setLoading(false);
        // Handle error according to your application's requirements
      }
    };

    if (!isAuthorized) {
      navigateTo("/");
    } else {
      fetchJobs();
    }
  }, [isAuthorized, navigateTo]);

  const handleCategoryChange = (event) => {
    setCategoryFilter(event.target.value);
  };

  const filteredJobs = categoryFilter
    ? jobs.filter((job) => job.category === categoryFilter)
    : jobs;

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <section className="jobs page">
      <div className="container">
        <h1>ALL AVAILABLE JOBS</h1>
        <div>
          <label htmlFor="categoryFilter">Filter by Category:</label>
          <select id="categoryFilter" onChange={handleCategoryChange}>
            <option value="">Select Category</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <div className="banner">
          {filteredJobs.map((job) => (
            <div className="card" key={job._id}>
              <p>{job.title}</p>
              <p>{job.category}</p>
              <p>{job.country}</p>
              <Link to={`/job/${job._id}`}>Job Details</Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Jobs;
