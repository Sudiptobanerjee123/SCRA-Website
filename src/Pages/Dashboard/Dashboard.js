// Dashboard.js
import React from "react";
import "./Dashboard.css";
import JacobImage from "../../Images/Jacob-image.jpg";
import NikhilaImage from "../../Images/nikhila-image.jpg";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <section className="dashboard-section">
        <div className="section-box">
          <h2>SCRA Vision</h2>
          <div className="line-dashboard"></div>
          <p className="vision-text">
            The vision of the Student Committee for Research Affairs (SCRA) is
            to cultivate a vibrant research culture at Illinois Tech, where
            students are empowered to actively engage in innovative research
            pursuits. SCRA strives to empower student researchers by providing
            them with the necessary resources, mentorship, and opportunities to
            excel academically and professionally, preparing them for success
            beyond graduation. SCRA's commitment to promoting diversity and
            inclusion ensures that all students have equitable access to
            research opportunities, fostering a community where diverse
            perspectives thrive. Through hands-on co-curricular experiences and
            interdisciplinary collaboration, SCRA aims to enhance students'
            academic journey, enabling them to tackle complex challenges and
            drive impactful research outcomes. By elevating the university's
            research profile and instilling a passion for lifelong learning,SCRA
            envisions a future where every student at Illinois Tech becomes an
            active contributor to cutting-edge research initiatives, driving
            innovation and making significant advancements in their respective
            fields, thus promoting Research Vision at Illinois Institute of
            Technology.
          </p>
        </div>
      </section>

      <section className="dashboard-section">
        <div className="section-box">
          <h2>SCRA Representatives</h2>
          <div className="line-dashboard"></div>
          <div class="representative-container">
            <div class="representative-card">
              <h3>Undergraduate</h3>
              <p class="card-text">
                As Undergraduate Representatives of the Student Committee for
                Research Affairs (SCRA), SCRA's mission is to ensure broad
                representation and cultivate a thriving community of researchers
                within each program or major at Illinois Tech. SCRA focuses on
                promoting and communicating scholarship and research
                opportunities, advocating for training, funding, and advancement
                prospects provided by the university. Additionally, SCRA
                facilitates connections with alumni and current graduate
                students, supports the maintenance of the Illinois Tech
                Undergraduate Research Journal (URJIIT), and communicates the
                overall process of undergraduate research to students. Through
                SCRA's efforts, SCRA aims to empower undergraduate students to
                actively engage in research and contribute to the university's
                vibrant research culture. SCRA strives to foster a dynamic
                research environment, enabling undergraduates to make meaningful
                contributions to Illinois Tech.
              </p>
            </div>
            <div class="representative-card">
              <h3>Graduate & PhD</h3>
              <p class="card-text">
                As Graduate Representatives of the Student Committee for
                Research Affairs (SCRA), our primary objective is to ensure
                broad representation and foster a supportive community of
                researchers within each graduate program or major at Illinois
                Tech. SCRA addresses specific topics crucial to graduate
                students, including stipends, benefits, and resources available,
                as well as the direction of departments and the university
                concerning research. SCRA also focuses on integrating the
                university with other institutes and programs, ensuring access
                to quality colloquia, seminars, and facilities, while advocating
                for affordability and diversity within the graduate student
                body. Recognizing the unique position of graduate students, SCRA
                streamlines the process for completing degrees by providing
                guidance on choosing graduation tracks, finding advisors, and
                navigating obstacles encountered during research projects. SCRA
                aim to support and empower graduate students in research.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="dashboard-section">
        <div className="section-box">
          <h2>Committee Executives</h2>
          <div className="line-dashboard"></div>
          <div className="founders-info">
            {/* First Row */}
            <div className="founder">
              <div className="founder-info">
                <img
                  src={JacobImage}
                  alt="Jacob Thomas"
                  className="founder-photo"
                />
                <h3>Jacob H. Thomas (Chair)</h3>
                <p>Applied Physics & Mathematics (U.G)</p>
              </div>
            </div>
            <div className="founder">
              <div className="founder-info">
                <img
                  src={NikhilaImage}
                  alt="Nikhila Panyam"
                  className="founder-photo"
                />
                <h3>Nikhila Panyam (Vice-Chair)</h3>
                <p>Psychological Science (U.G)</p>
              </div>
            </div>
            <div className="founder">
              <div className="founder-info">
                <img
                  src={JacobImage}
                  alt="Jacob Thomas"
                  className="founder-photo"
                />
                <h3>Sudipta Banerjee (Director of Web Operations)</h3>
                <p>Computer Science (G)</p>
              </div>
            </div>

            {/* Second Row */}
            <div className="founder">
              <div className="founder-info">
                <img
                  src={JacobImage}
                  alt="Nikhila Panyam"
                  className="founder-photo"
                />
                <h3>Abhinash Mohanty (Director of Media)</h3>
                <p>Sustainability Analytics (G)</p>
              </div>
            </div>
            <div className="founder">
              <div className="founder-info">
                <img
                  src={JacobImage}
                  alt="Jacob Thomas"
                  className="founder-photo"
                />
                <h3>Josh Grube (CAURS Rep)</h3>
                <p>Physics (U.G)</p>
              </div>
            </div>
            <div className="founder">
              <div className="founder-info">
                <img
                  src={JacobImage}
                  alt="Nikhila Panyam"
                  className="founder-photo"
                />
                <h3>Tejas Panda (URJ EIC)</h3>
                <p>Computer Science (G)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="dashboard-section">
        <div className="section-box">
          <h2>Possible Outcomes</h2>
          <div className="line-dashboard"></div>
        </div>
      </section>

      <section className="dashboard-section">
        <div className="section-box">
          <h2>Research Quote</h2>
          <div className="line-dashboard"></div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
