import React from 'react';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import styles from '../styles/Team.module.css';

const Team = () => {
    return (
      <div className={styles.container}>
        <Header />
        <div className={styles.team_page}>
          <div className={styles.team_members}>
            <h2>Team Members</h2>
            {/* Include the team members content here */}
          </div>
          <div className={styles.team_collaborators}>
            <h2>Collaborators</h2>
            {/* Include the collaborators content here */}
          </div>
        </div>
        <Footer />
      </div>
    );
  };
  
  export default Team;
  